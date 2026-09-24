// Single source of truth for site-wide SEO constants, so the domain only
// has to change in one place if it ever does.
export const SITE_NAME = "Keystone Strategies";
export const SITE_URL = "https://pathway.keystonestrategies.us";

// This is the Chinese site; the English original lives on the root
// domain. Used to emit hreflang alternate-language links (see Seo.jsx)
// so Google treats the two as translations, not duplicates.
export const ALTERNATE_LOCALE = "en";
export const ALTERNATE_URL = "https://keystonestrategies.us";

// Absolute URL of the square site icon, for og:image and the Organization
// logo. The theme isn't served from the domain root (so SITE_URL/Icon.png
// 404s); functions.php prints the favicon <link> from the theme's real
// dist/ URL, so read it back from there.
export function siteIconUrl() {
  return document.querySelector('link[rel="icon"]')?.href;
}

// FAQPage structured data for a page's FAQ list (the same `faqs` array its
// FAQ section renders, so the two can't drift). Answers written as JSX
// (links, lists) have no plain-text form and are left out.
export function buildFaqJsonLd(faqs) {
  const entries = faqs
    .map((faq) => ({
      question: faq.question,
      text: Array.isArray(faq.answer) ? faq.answer.join(" ") : faq.answer,
    }))
    .filter((faq) => typeof faq.text === "string");
  if (entries.length === 0) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.text },
    })),
  };
}
