import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/e-verify-employer-account-setup/Hero";
import Overview from "@/components/e-verify-employer-account-setup/Overview";
import CoreDeliverables from "@/components/e-verify-employer-account-setup/CoreDeliverables";
import WhyKeystone from "@/components/e-verify-employer-account-setup/WhyKeystone";
import FaqSection from "@/components/e-verify-employer-account-setup/FaqSection";

export default function EVerifyEmployerAccountSetup() {
  return (
    <PageLayout>
      <Seo
        title="E-Verify & Employer Account Setup"
        description="Keystone Strategies registers and configures your company's E-Verify employer account, the requirement behind every STEM OPT hire, sets up state new hire reporting, and delivers your Company ID."
        path="/e-verify-employer-account-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Get Your Company E-Verify Ready"
        description={<p>We handle enrollment, profile setup, and orientation so your Company ID is issued before you need it.</p>}
        ctaLabel="Register My Company for E-Verify"
      />
    </PageLayout>
  );
}
