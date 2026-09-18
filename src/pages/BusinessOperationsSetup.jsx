import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/business-operations-setup/Hero";
import Overview from "@/components/business-operations-setup/Overview";
import CoreDeliverables from "@/components/business-operations-setup/CoreDeliverables";
import WhyKeystone from "@/components/business-operations-setup/WhyKeystone";
import FaqSection from "@/components/business-operations-setup/FaqSection";

export default function BusinessOperationsSetup() {
  return (
    <PageLayout>
      <Seo
        title="Business Operations Setup"
        description="Keystone Strategies keeps your governance documents, registered agent, and annual filings current, and builds the operating infrastructure your business runs on: domain, email, phone, registered address, contract templates, and insurance guidance."
        path="/business-operations-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Turn Your Registered Entity Into an Operating Business"
        description={<p>Domain, email, phone, address, templates, and insurance guidance, set up in one coordinated pass.</p>}
        ctaLabel="Book an Operations Setup Consultation"
      />
    </PageLayout>
  );
}
