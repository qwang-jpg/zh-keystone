import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// WordPress theme integration:
// - base "" keeps asset URLs relative so functions.php can enqueue them from the theme's dist/ folder
// - manifest: true emits dist/.vite/manifest.json, which functions.php reads to enqueue hashed js/css
// - assetsDir keeps built files under dist/assets/
export default defineConfig({
  plugins: [react()],
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
