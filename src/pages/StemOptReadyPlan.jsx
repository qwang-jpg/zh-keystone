import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import StemHero from "@/components/stem-opt-ready-plan/StemHero";
import StemStats from "@/components/stem-opt-ready-plan/StemStats";
import StemAbout from "@/components/stem-opt-ready-plan/StemAbout";
import WhoItsFor from "@/components/stem-opt-ready-plan/WhoItsFor";
import CoreAdvantages from "@/components/stem-opt-ready-plan/CoreAdvantages";
import WhatYoullGet from "@/components/stem-opt-ready-plan/WhatYoullGet";
import WhyKeystone from "@/components/home/WhyKeystone";
import StemSuccessStories from "@/components/stem-opt-ready-plan/StemSuccessStories";
import ServiceWorkflow from "@/components/stem-opt-ready-plan/ServiceWorkflow";
import CaseShare from "@/components/stem-opt-ready-plan/CaseShare";
import EvidenceGallery from "@/components/our-cases/EvidenceGallery";
import InfinityPlanCrossLink from "@/components/stem-opt-ready-plan/InfinityPlanCrossLink";
import StemFaq from "@/components/stem-opt-ready-plan/StemFaq";
import FinalCta from "@/components/stem-opt-ready-plan/FinalCta";

export default function StemOptReadyPlan() {
  return (
    <PageLayout>
      <Seo
        title="STEM OPT身份保障计划"
        description="Keystone Strategies 帮助国际STEM毕业生搭建获得并维持STEM OPT身份所需的雇主、雇佣、培训、文件与持续合规架构。"
        path="/stem-opt-ready-plan"
      />
      <StemHero />
      <StemStats />
      <StemAbout />
      <WhoItsFor />
      <CompactCta
        title="您目前的情况能否支撑一套合规的STEM OPT架构？"
        description={<p>从评估您的雇主、职位、培训计划、身份与时间线开始。</p>}
        ctaLabel="获取我的STEM OPT评估"
      />
      <ServiceWorkflow />
      <WhatYoullGet />
      <WhyKeystone />
      <CompactCta
        title="保障应该是服务本身的一部分——而不只是销售阶段的一句承诺。"
        ctaLabel="预约您的咨询"
      />
      <StemSuccessStories />
      <CoreAdvantages />
      <CaseShare />
      <EvidenceGallery />
      <InfinityPlanCrossLink />
      <StemFaq />
      <FinalCta />
    </PageLayout>
  );
}
