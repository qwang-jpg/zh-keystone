import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/employee-policies-workplace-compliance/Hero";
import Overview from "@/components/employee-policies-workplace-compliance/Overview";
import CoreDeliverables from "@/components/employee-policies-workplace-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-policies-workplace-compliance/WhyKeystone";
import FaqSection from "@/components/employee-policies-workplace-compliance/FaqSection";

export default function EmployeePoliciesWorkplaceCompliance() {
  return (
    <PageLayout>
      <Seo
        title="Employee Policies & Workplace Compliance"
        description="Keystone Strategies builds your employee handbook, anti-harassment and EEO policy, required workplace postings, and worker classification review."
        path="/employee-policies-workplace-compliance"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Put Your Workplace Policies in Writing"
        description={<p>Handbook, EEO policy, required postings, and classification review, built for the state(s) where you actually employ people.</p>}
        ctaLabel="Book a Workplace Compliance Consultation"
      />
    </PageLayout>
  );
}
