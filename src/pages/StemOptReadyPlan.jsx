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
        title="STEM OPT就绪计划"
        description="Keystone Strategies 帮助国际STEM毕业生搭建获得并维持STEM OPT身份所需的雇主、雇佣、培训、文件与持续合规架构。"
        path="/stem-opt-ready-plan"
      />
      <StemHero />
      <StemStats />
      <StemAbout />
      <WhoItsFor />
      <EligibilityRequirements />
      <WhatYoullGet />
      <CompactCta
        title="保障应该是服务本身的一部分——而不只是销售阶段的一句承诺。"
        ctaLabel="预约您的咨询"
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
