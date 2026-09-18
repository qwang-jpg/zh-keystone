import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/business-bank-account-setup/Hero";
import Overview from "@/components/business-bank-account-setup/Overview";
import CoreDeliverables from "@/components/business-bank-account-setup/CoreDeliverables";
import WhyKeystone from "@/components/business-bank-account-setup/WhyKeystone";
import FaqSection from "@/components/business-bank-account-setup/FaqSection";

export default function BusinessBankAccountSetup() {
  return (
    <PageLayout>
      <Seo
        title="Business Bank Account Setup Support"
        description="Keystone Strategies prepares your documents and guides you through opening a U.S. business bank account, remotely or in person, so your company is funded and ready to operate."
        path="/business-bank-account-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Get Your Company Banking Set Up the Right Way"
        description={
          <p>
            One consultation is all it takes to get your document checklist ready. We&rsquo;ll match you with the
            right bank and stay on the call until your account is open and funded.
          </p>
        }
        ctaLabel="Book a Banking Setup Consultation"
      />
    </PageLayout>
  );
}
