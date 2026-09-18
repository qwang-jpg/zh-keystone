import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/employee-onboarding-compliance/Hero";
import Overview from "@/components/employee-onboarding-compliance/Overview";
import CoreDeliverables from "@/components/employee-onboarding-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-onboarding-compliance/WhyKeystone";
import FaqSection from "@/components/employee-onboarding-compliance/FaqSection";

export default function EmployeeOnboardingCompliance() {
  return (
    <PageLayout>
      <Seo
        title="Employee Onboarding & Employment Compliance"
        description="Keystone Strategies builds a standardized hiring workflow and compliant onboarding for every new hire, from offer approval through Form I-9 and W-4, backed by a basic U.S. employment compliance guide."
        path="/employee-onboarding-compliance"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Onboard Your Next Hire the Right Way"
        description={<p>A repeatable hiring workflow, offer letter, I-9, W-4, and the compliance guardrails behind them, ready before day one.</p>}
        ctaLabel="Book an Onboarding Consultation"
      />
    </PageLayout>
  );
}
