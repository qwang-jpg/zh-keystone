import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import StemHero from "@/components/stem-opt-ready-plan/StemHero";
import StemStats from "@/components/stem-opt-ready-plan/StemStats";
import EligibilityRequirements from "@/components/stem-opt-ready-plan/EligibilityRequirements";
import StemAbout from "@/components/stem-opt-ready-plan/StemAbout";
import WhoItsFor from "@/components/stem-opt-ready-plan/WhoItsFor";
import CoreAdvantages from "@/components/stem-opt-ready-plan/CoreAdvantages";
import WhatYoullGet from "@/components/stem-opt-ready-plan/WhatYoullGet";
import ServiceWorkflow from "@/components/stem-opt-ready-plan/ServiceWorkflow";
import CaseShare from "@/components/stem-opt-ready-plan/CaseShare";
import SuccessfulCase from "@/components/stem-opt-ready-plan/SuccessfulCase";
import InfinityPlanCrossLink from "@/components/stem-opt-ready-plan/InfinityPlanCrossLink";
import StemFaq from "@/components/stem-opt-ready-plan/StemFaq";
import FinalCta from "@/components/stem-opt-ready-plan/FinalCta";
import OtherServices from "@/components/stem-opt-ready-plan/OtherServices";

export default function StemOptReadyPlan() {
  return (
    <PageLayout>
      <Seo
        title="STEM OPT Status Protection Program"
        description="Keystone Strategies helps international STEM graduates build the employer, employment, training, documentation, and ongoing compliance structure needed to secure and maintain STEM OPT status."
        path="/stem-opt-ready-plan"
      />
      <StemHero />
      <StemStats />
      <StemAbout />
      <WhoItsFor />
      <EligibilityRequirements />
      <WhatYoullGet />
      <CompactCta
        title="Protection should be part of the service — not just a promise made during the sales process."
        ctaLabel="Book Your Consultation"
      />
      <ServiceWorkflow />
      <CaseShare />
      <SuccessfulCase />
      <CoreAdvantages />
      <InfinityPlanCrossLink />
      <StemFaq />
      <FinalCta />
      <OtherServices />
    </PageLayout>
  );
}
