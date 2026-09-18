import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

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

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", url);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

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
