// Route map mirrors the original WordPress site's URL/slug structure 1:1,
// so existing SEO paths are preserved. Only "home" is implemented so far;
// the rest render a PageLayout placeholder until built page-by-page.
//
// A handful of routes below were renamed so the URL matches what the page
// actually covers (e.g. "startup-incubation" -> the "Company Formation &
// Corporate Structure" service). The old slug still resolves — see
// `redirects` below — so existing links/bookmarks/search results land on
// the right page instead of a mismatched URL.
export const routes = [
  { path: "/", slug: "home", title: "Home" },
  { path: "/about-us", slug: "about-us", title: "About Us" },
  { path: "/insights", slug: "insights", title: "Insights" },
  { path: "/client-portal", slug: "client-portal", title: "Client Portal" },
  { path: "/employment-visa-position-petition-planning", slug: "immigration-status-planning", title: "Employment Visa Position & Petition Planning" },
  { path: "/business-tax-financial-management", slug: "financial-advisory", title: "Business Tax & Financial Management" },
  { path: "/company-formation-corporate-structure", slug: "startup-incubation", title: "Company Formation & Corporate Structure" },
  { path: "/h1b-infinity-plan", slug: "h-1b-infinity-plan", title: "H-1B Status Protection Program" },
  { path: "/stem-opt-ready-plan", slug: "stem-opt-ready-plan", title: "STEM OPT Status Protection Program" },
  { path: "/opt-status-safeguard", slug: "opt-status-safeguard", title: "OPT Status Safeguard" },
  { path: "/stem-opt-employer-compliance-training", slug: "stem-opt-status-safeguard", title: "STEM OPT Employer Compliance Training" },
  { path: "/business-bank-account-setup", slug: "business-bank-account-setup", title: "Business Bank Account Setup Support" },
  { path: "/business-operations-setup", slug: "business-operations-setup", title: "Business Operations Setup" },
  { path: "/corporate-website-brand-development", slug: "corporate-website-brand-development", title: "Corporate Website & Brand Presence Development" },
  { path: "/payroll-payroll-tax-management", slug: "payroll-payroll-tax-management", title: "Payroll & Payroll Tax Management" },
  { path: "/e-verify-employer-account-setup", slug: "e-verify-employer-account-setup", title: "E-Verify & Employer Account Setup" },
  { path: "/employee-onboarding-compliance", slug: "employee-onboarding-compliance", title: "Employee Onboarding & Employment Compliance" },
  { path: "/eb-2-eb-3-green-card-planning", slug: "eb-2-eb-3-green-card-planning", title: "EB-2 / EB-3 Green Card Planning" },
  { path: "/employee-policies-workplace-compliance", slug: "employee-policies-workplace-compliance", title: "Employee Policies & Workplace Compliance" },
  { path: "/our-cases", slug: "our-cases", title: "Our Cases" },
  { path: "/contact", slug: "contact", title: "Contact Us" },
  { path: "/privacy-policy", slug: "privacy-policy", title: "Privacy Policy" },
];

// Legacy URLs being renamed above. Kept alive as redirects to the new
// canonical path so old links, bookmarks, and indexed search results still
// resolve to the right page instead of 404ing or showing a mismatched URL.
export const redirects = [
  { from: "/immigration-status-planning", to: "/employment-visa-position-petition-planning" },
  { from: "/financial-advisory", to: "/business-tax-financial-management" },
  { from: "/startup-incubation", to: "/company-formation-corporate-structure" },
  { from: "/h-1b-infinity-plan", to: "/h1b-infinity-plan" },
  { from: "/h-1b-status-protection-program", to: "/h1b-infinity-plan" },
  { from: "/form-i-983-training-plan-application-support", to: "/stem-opt-ready-plan" },
  { from: "/stem-opt-status-safeguard", to: "/stem-opt-employer-compliance-training" },
];
