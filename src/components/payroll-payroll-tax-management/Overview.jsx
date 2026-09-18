import ServiceOverview from "@/components/common/ServiceOverview";

const stats = [
  { value: "50", label: "State Payroll Tax Regimes We Can Register You In" },
  { value: "100%", label: "W-2-Ready Payroll Builds" },
  { value: "1", label: "System Setup Covering Wages, Tax & Records" },
];

const checklist = [
  "Wage income that's actually reportable and W-2-verifiable, not informal or off-the-books",
  "The right state payroll tax and unemployment insurance accounts for where your employees actually work",
  "A repeatable process for calculating, issuing, and documenting every pay run",
  "Pay stubs and W-2s that hold up under E-Verify, STEM OPT, or immigration petition review",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="Why Payroll Has to Be Built Right the First Time"
      description="Payroll isn't just an accounting function. It's the paper trail that proves a real employer-employee relationship exists — for the IRS, for state labor agencies, and for USCIS."
      checklist={checklist}
      stats={stats}
    />
  );
}
