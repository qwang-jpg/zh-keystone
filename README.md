# Keystone Strategies

A React single-page application, built with Vite and loaded as a WordPress theme. WordPress only provides the document shell (`<head>`/`<body>` and asset enqueueing) — every page, route, and piece of UI is rendered client-side by the React app in `dist/`.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 |
| Build tool | Vite 5 (`@vitejs/plugin-react`) |
| Routing | React Router 6 (`BrowserRouter`, client-side only) |
| Styling | Tailwind CSS 3 + PostCSS/Autoprefixer |
| UI primitives | Radix UI (`react-label`, `react-slot`) + `class-variance-authority` + `tailwind-merge` (shadcn/ui-style `src/components/ui/`) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Runtime shell | WordPress theme (PHP), theme name "Keystone Strategies" |

There is no backend/API in this repo — WordPress is used purely as a hosting shell, and all content is static data inside `src/data/`.

## How the WordPress integration works

- `index.php` is the theme's only template. It renders `<div id="root">` and calls `wp_head()` / `wp_footer()`; React Router owns every route from there.
- `functions.php`:
  - Reads Vite's build manifest (`dist/.vite/manifest.json`) and enqueues the hashed JS/CSS it points to.
  - Outputs the favicon `<link>` itself, built from the theme's own `dist/` URI (`KEYSTONE_DIST_URI`) rather than an absolute `/Icon.png` path — **the theme is never served from the site's domain root**, so absolute root paths 404 in production.
  - Forces an HTTP 200 on any front-end URL WordPress doesn't recognize as a Page, so React Router can render app routes WordPress itself has no record of.
- `vite.config.js` sets `base: ""` so every built asset URL stays relative to the theme's `dist/` folder, matching how `functions.php` enqueues them.
- `style.css` exists only to satisfy WordPress's theme-header requirements (theme name/description/version) — it has no rules.

**Practical consequence:** any image referenced at runtime must be `import`-ed from `src/assets/` (Vite hashes it and emits a build-relative URL), never referenced by an absolute `public/`-style path like `/images/foo.png`. `public/` currently only holds files WordPress/browsers expect at a fixed name regardless of hashing (`Icon.png`, `robots.txt`, `sitemap.xml`), and even the favicon path is rewritten by `functions.php` to avoid the domain-root problem.

## Project structure

```
functions.php, index.php, style.css   WordPress theme shell (see above)
index.html                             Vite dev entry (not used in production)
vite.config.js, tailwind.config.js,
postcss.config.js, jsconfig.json       Build/tooling config ("@/*" → "src/*")
public/                                Files copied to dist/ root as-is (Icon.png, robots.txt, sitemap.xml)
src/
  main.jsx                             React entry point
  App.jsx                              Router setup — maps routes/ to lazy-loaded page components
  router/routes.js                     Canonical route list + legacy-slug redirects
  pages/                               One file per route (see "Pages" below)
  components/
    layout/                            Header, Footer, PageLayout (wraps every page)
    common/                            Shared building blocks: Seo, SectionHeading, AnimatedStatsBar,
                                        CompactCta, TabbedFeatureList, TabbedTestimonials,
                                        PillarShowcase, AudienceExplorer, ImagePlaceholder,
                                        OrganizationSchema, plus the Service* set (ServiceHero,
                                        ServiceOverview, ServiceCoreDeliverables, ServiceWhyKeystone,
                                        ServiceFaqSection) reused across most `/*-setup`/`*-compliance`
                                        service pages
    ui/                                shadcn/ui-style primitives (button, input, label, textarea)
    <page-name>/                       Page-specific section components, one folder per page
                                        (home/, about/, our-cases/, financial-advisory/, etc.)
  data/                                Static content: services.js (nav/service catalog), insights/
                                        (26 long-form articles, one file per article under
                                        data/insights/articles/, aggregated in data/insights/index.js)
  lib/                                 seo.js (SITE_NAME/SITE_URL constants), headings.js, utils.js (cn() helper)
  assets/                              Imported images (Logo.png, hero photo, WeChat QR, etc.)
```

## Pages

Routes are declared once in `src/router/routes.js` and mapped to components in `src/App.jsx`'s `pageComponents` map; any route without an entry there falls back to a `ComingSoon` placeholder instead of 404ing, so every URL always resolves to something. Every route currently declared in `routes.js` has a matching page component — there are no outstanding `ComingSoon` placeholders.

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About Us |
| `/insights` + `/insights/:slug` | Insights hub + 26 long-form articles |
| `/client-portal` | Client Portal |
| `/employment-visa-position-petition-planning` | Employment Visa Position & Petition Planning |
| `/business-tax-financial-management` | Business Tax & Financial Management |
| `/company-formation-corporate-structure` | Company Formation & Corporate Structure |
| `/h1b-infinity-plan` | H-1B Status Protection Program |
| `/stem-opt-ready-plan` | STEM OPT Status Protection Program |
| `/opt-status-safeguard` | OPT Status Safeguard |
| `/stem-opt-employer-compliance-training` | STEM OPT Employer Compliance Training |
| `/business-bank-account-setup` | Business Bank Account Setup Support |
| `/business-operations-setup` | Business Operations Setup |
| `/corporate-website-brand-development` | Corporate Website & Brand Presence Development |
| `/payroll-payroll-tax-management` | Payroll & Payroll Tax Management |
| `/e-verify-employer-account-setup` | E-Verify & Employer Account Setup |
| `/employee-onboarding-compliance` | Employee Onboarding & Employment Compliance |
| `/eb-2-eb-3-green-card-planning` | EB-2 / EB-3 Green Card Planning |
| `/employee-policies-workplace-compliance` | Employee Policies & Workplace Compliance |
| `/our-cases` | Our Cases (success stories, evidence gallery, case highlights) |
| `/contact` | Contact Us |
| `/privacy-policy` | Privacy Policy |

Several routes were renamed from their original WordPress slugs to URLs that better match the page content; the old slugs still resolve via redirects declared in `src/router/routes.js` (e.g. `/startup-incubation` → `/company-formation-corporate-structure`), so existing links/bookmarks/search results keep working.

All pages are lazy-loaded per route (`React.lazy` in `App.jsx`) so the initial bundle only ships Home's own code. A catch-all `*` route renders `NotFound` for any URL that isn't one of the declared routes or redirects above.

## Development

Requires Node 20 (matches the CI workflow).

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # locally preview the production build
```

There is no lint/test script configured in `package.json` yet.

## Build & deploy

Production build:

```bash
npm run build
```

This outputs to `dist/`, including `dist/.vite/manifest.json`, which `functions.php` reads to enqueue the correct hashed JS/CSS.

`.github/workflows/deploy-staging.yml` deploys automatically on every push to `main` that touches app/build-relevant files (`src/`, `public/`, `functions.php`, `index.php`, `style.css`, `index.html`, and the various config files):

1. Checks out the repo, installs deps with `npm ci`, runs `npm run build`.
2. Sanity-checks the build output (`dist/.vite/manifest.json`, `functions.php`, `index.php`, `style.css` all present).
3. `rsync`'s the theme over SSH to a SiteGround staging path, excluding source/dev-only files (`src/`, `public/`, `node_modules/`, config files, `CLAUDE.md`, git metadata, etc.) — only the built theme (`dist/`, PHP files, `style.css`) and required assets are deployed.

Required repo secrets: `SITEGROUND_SSH_KEY`, `SITEGROUND_SSH_PORT`, `SITEGROUND_HOST`, `SITEGROUND_USER`, `SITEGROUND_DEPLOY_PATH`.

## Adding a page

1. Add the route to `src/router/routes.js`.
2. Create `src/pages/<Name>.jsx` (wrap content in `PageLayout`, add an `Seo` component for title/description).
3. Build out section components under `src/components/<page-name>/`.
4. Register the page in `App.jsx`'s lazy imports and `pageComponents` map — otherwise the route keeps rendering `ComingSoon`.

## Adding an image

Import it from `src/assets/` and reference the imported variable as the `src` — never a `public/`-style absolute path (see "How the WordPress integration works" above for why).
