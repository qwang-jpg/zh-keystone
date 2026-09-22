// Single source of truth for site-wide SEO constants, so the domain only
// has to change in one place if it ever does.
export const SITE_NAME = "Keystone Strategies";
export const SITE_URL = "https://pathway.keystonestrategies.us";

// This is the Chinese site; the English original lives on the root
// domain. Used to emit hreflang alternate-language links (see Seo.jsx)
// so Google treats the two as translations, not duplicates.
export const ALTERNATE_LOCALE = "en";
export const ALTERNATE_URL = "https://keystonestrategies.us";
