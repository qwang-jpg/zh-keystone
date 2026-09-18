import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/eb-2-eb-3-green-card-planning/Hero";
import Overview from "@/components/eb-2-eb-3-green-card-planning/Overview";
import CoreDeliverables from "@/components/eb-2-eb-3-green-card-planning/CoreDeliverables";
import WhyKeystone from "@/components/eb-2-eb-3-green-card-planning/WhyKeystone";
import FaqSection from "@/components/eb-2-eb-3-green-card-planning/FaqSection";

export default function Eb2Eb3GreenCardPlanning() {
  return (
    <PageLayout>
      <Seo
        title="EB-2 / EB-3 Green Card Planning"
        description="Keystone Strategies structures the employer and position behind an EB-2 or EB-3 green card petition, prepares the PERM-ready groundwork, and coordinates directly with immigration counsel through filing."
        path="/eb-2-eb-3-green-card-planning"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="Plan the Next Stage of Your Status Now"
        description={<p>Category selection, PERM-ready position design, and employer structuring, built around your long-term timeline.</p>}
        ctaLabel="Book a Green Card Planning Consultation"
      />
    </PageLayout>
  );
}
