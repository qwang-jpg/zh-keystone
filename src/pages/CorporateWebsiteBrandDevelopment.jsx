import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/corporate-website-brand-development/Hero";
import Overview from "@/components/corporate-website-brand-development/Overview";
import CoreDeliverables from "@/components/corporate-website-brand-development/CoreDeliverables";
import WhyKeystone from "@/components/corporate-website-brand-development/WhyKeystone";
import FaqSection from "@/components/corporate-website-brand-development/FaqSection";

export default function CorporateWebsiteBrandDevelopment() {
  return (
    <PageLayout>
      <Seo
        title="Corporate Website & Brand Presence Development"
        description="Keystone Strategies designs your logo and builds your company website end to end, from architecture and content through SEO setup and launch."
        path="/corporate-website-brand-development"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Give Your Company a Website That Backs Up Your Story"
        description={<p>Logo, full site build, content, SEO basics, and a polished Company Profile, delivered launch-ready.</p>}
        ctaLabel="Book a Website & Brand Consultation"
      />
    </PageLayout>
  );
}
