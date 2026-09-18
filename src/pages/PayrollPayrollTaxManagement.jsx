import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/payroll-payroll-tax-management/Hero";
import Overview from "@/components/payroll-payroll-tax-management/Overview";
import CoreDeliverables from "@/components/payroll-payroll-tax-management/CoreDeliverables";
import WhyKeystone from "@/components/payroll-payroll-tax-management/WhyKeystone";
import FaqSection from "@/components/payroll-payroll-tax-management/FaqSection";

export default function PayrollPayrollTaxManagement() {
  return (
    <PageLayout>
      <Seo
        title="Payroll & Payroll Tax Management"
        description="Keystone Strategies sets up your payroll system, registers the right state payroll tax and unemployment insurance accounts, and builds a compliant wage and W-2 process."
        path="/payroll-payroll-tax-management"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Get Payroll Set Up Before Your First Hire Starts"
        description={
          <p>
            From system setup to state registrations to W-2 prep, we build the payroll process your company will
            run on for years.
          </p>
        }
        ctaLabel="Book a Payroll Setup Consultation"
      />
    </PageLayout>
  );
}
