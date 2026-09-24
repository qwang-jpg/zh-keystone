import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { routes, redirects } from "./src/router/routes.js";
import { articleMeta } from "./src/data/insights/meta.js";
import { SITE_URL } from "./src/lib/seo.js";

// Every indexable URL the app renders: the declared routes plus one page per
// Insights article. Source of truth for both build outputs below.
const appPaths = [...routes.map((r) => r.path), ...articleMeta.map((a) => `/insights/${a.slug}`)];

const sitemapPriority = {
  "/": "1.0",
  "/our-cases": "0.7",
  "/insights": "0.7",
  "/contact": "0.6",
  "/client-portal": "0.4",
  "/privacy-policy": "0.3",
};

function priorityFor(p) {
  return sitemapPriority[p] ?? (p.startsWith("/insights/") ? "0.6" : "0.8");
}

// Emits, alongside the bundle:
// - sitemap.xml, generated so a new route or article can't be left out;
// - routes.json, which functions.php reads to answer real 301s for legacy
//   slugs and a real 404 status for URLs the app doesn't know.
function routeManifestPlugin() {
  return {
    name: "keystone-route-manifest",
    apply: "build",
    generateBundle() {
      const urls = appPaths
        .map((p) => `  <url><loc>${SITE_URL}${p}</loc><priority>${priorityFor(p)}</priority></url>`)
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "routes.json",
        source: JSON.stringify({
          routes: appPaths,
          redirects: Object.fromEntries(redirects.map((r) => [r.from, r.to])),
        }),
      });
    },
  };
}

// WordPress theme integration:
// - base "" keeps asset URLs relative so functions.php can enqueue them from the theme's dist/ folder
// - manifest: true emits dist/.vite/manifest.json, which functions.php reads to enqueue hashed js/css
// - assetsDir keeps built files under dist/assets/
// - routeManifestPlugin writes dist/sitemap.xml and dist/routes.json (see above)
export default defineConfig({
  plugins: [react(), routeManifestPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
  server: {
    port: 5173,
  },
});
