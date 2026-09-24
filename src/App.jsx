import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { routes, redirects } from "@/router/routes";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// React Router doesn't reset scroll position on navigation by default, so
// without this, clicking a nav link while scrolled down on the current page
// lands you at that same pixel offset on the destination page instead of
// the top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lazy-loaded per route: keeps the initial JS payload to Home's own code
// instead of shipping every page's bundle on first load (Core Web Vitals /
// load-speed factor into search ranking, and this app has no SSR to mask it).
const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const FinancialAdvisory = lazy(() => import("@/pages/FinancialAdvisory"));
const ImmigrationStatusPlanning = lazy(() => import("@/pages/ImmigrationStatusPlanning"));
const StemOptReadyPlan = lazy(() => import("@/pages/StemOptReadyPlan"));
const StartupIncubation = lazy(() => import("@/pages/StartupIncubation"));
const H1BInfinityPlan = lazy(() => import("@/pages/H1BInfinityPlan"));
const OptStatusSafeguard = lazy(() => import("@/pages/OptStatusSafeguard"));
const OurCases = lazy(() => import("@/pages/OurCases"));
const Insights = lazy(() => import("@/pages/Insights"));
const InsightArticle = lazy(() => import("@/pages/InsightArticle"));
const ClientPortal = lazy(() => import("@/pages/ClientPortal"));
const StemOptStatusSafeguard = lazy(() => import("@/pages/StemOptStatusSafeguard"));
const BusinessBankAccountSetup = lazy(() => import("@/pages/BusinessBankAccountSetup"));
const BusinessOperationsSetup = lazy(() => import("@/pages/BusinessOperationsSetup"));
const CorporateWebsiteBrandDevelopment = lazy(() => import("@/pages/CorporateWebsiteBrandDevelopment"));
const PayrollPayrollTaxManagement = lazy(() => import("@/pages/PayrollPayrollTaxManagement"));
const EVerifyEmployerAccountSetup = lazy(() => import("@/pages/EVerifyEmployerAccountSetup"));
const EmployeeOnboardingCompliance = lazy(() => import("@/pages/EmployeeOnboardingCompliance"));
const Eb2Eb3GreenCardPlanning = lazy(() => import("@/pages/Eb2Eb3GreenCardPlanning"));
const EmployeePoliciesWorkplaceCompliance = lazy(() => import("@/pages/EmployeePoliciesWorkplaceCompliance"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Every route in router/routes.js needs an entry here (keyed by its slug).
const pageComponents = {
  home: Home,
  contact: Contact,
  "privacy-policy": PrivacyPolicy,
  "about-us": AboutUs,
  "financial-advisory": FinancialAdvisory,
  "immigration-status-planning": ImmigrationStatusPlanning,
  "stem-opt-ready-plan": StemOptReadyPlan,
  "startup-incubation": StartupIncubation,
  "h-1b-infinity-plan": H1BInfinityPlan,
  "opt-status-safeguard": OptStatusSafeguard,
  "our-cases": OurCases,
  insights: Insights,
  "client-portal": ClientPortal,
  "stem-opt-status-safeguard": StemOptStatusSafeguard,
  "business-bank-account-setup": BusinessBankAccountSetup,
  "business-operations-setup": BusinessOperationsSetup,
  "corporate-website-brand-development": CorporateWebsiteBrandDevelopment,
  "payroll-payroll-tax-management": PayrollPayrollTaxManagement,
  "e-verify-employer-account-setup": EVerifyEmployerAccountSetup,
  "employee-onboarding-compliance": EmployeeOnboardingCompliance,
  "eb-2-eb-3-green-card-planning": Eb2Eb3GreenCardPlanning,
  "employee-policies-workplace-compliance": EmployeePoliciesWorkplaceCompliance,
};

// Keyed on the pathname so an error on one page is cleared by navigating
// to another instead of sticking around for the rest of the session.
function AppRoutes() {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary key={pathname}>
      <Suspense fallback={null}>
        <Routes>
          {routes.map((r) => {
            const Page = pageComponents[r.slug];
            return <Route key={r.path} path={r.path} element={<Page />} />;
          })}
          {redirects.map((r) => (
            <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
          ))}
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
