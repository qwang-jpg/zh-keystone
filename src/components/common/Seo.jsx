import { useEffect } from "react";
import { SITE_NAME, SITE_URL, ALTERNATE_LOCALE, ALTERNATE_URL, siteIconUrl } from "@/lib/seo";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Unlike canonical, a page can carry several rel="alternate" links at once
// (one per language plus x-default), so these are keyed on hreflang too.
function upsertAlternateLink(hreflang, href) {
  let el = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function removeAlternateLinks() {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
}

// Per-page document head manager: title, meta description, canonical, and
// Open Graph / Twitter Card tags, plus an optional JSON-LD block for
// page-specific structured data (e.g. FAQPage). No react-helmet dependency —
// this app has one <head> and one mounted page at a time, so a plain
// useEffect that upserts tags on mount/route change is enough.
export default function Seo({ title, description, path = "/", noindex = false, jsonLd }) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const image = siteIconUrl();

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", url);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    if (image) upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    if (image) upsertMeta("name", "twitter:image", image);

    // Points crawlers to the English original of this same page (and vice
    // versa in that site's own Seo.jsx) so the two are treated as
    // alternate-language versions rather than duplicate/competing content.
    // Skipped on noindex pages (placeholders, 404s) since there's nothing
    // canonical there to point a translation at.
    if (noindex) {
      removeAlternateLinks();
    } else {
      upsertAlternateLink("zh-CN", url);
      upsertAlternateLink(ALTERNATE_LOCALE, `${ALTERNATE_URL}${path}`);
      upsertAlternateLink("x-default", `${ALTERNATE_URL}${path}`);
    }

    let jsonLdEl = null;
    if (jsonLdString) {
      jsonLdEl = document.createElement("script");
      jsonLdEl.type = "application/ld+json";
      jsonLdEl.textContent = jsonLdString;
      document.head.appendChild(jsonLdEl);
    }

    return () => {
      if (jsonLdEl) jsonLdEl.remove();
    };
  }, [title, description, path, noindex, jsonLdString]);

  return null;
}
