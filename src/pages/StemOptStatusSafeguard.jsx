import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/stem-opt-status-safeguard/Hero";
import StatsBar from "@/components/stem-opt-status-safeguard/StatsBar";
import AboutProgram from "@/components/stem-opt-status-safeguard/AboutProgram";
import ComparisonSection from "@/components/stem-opt-status-safeguard/ComparisonSection";
import WhoItsFor from "@/components/stem-opt-status-safeguard/WhoItsFor";
import WhatYoullAchieve from "@/components/stem-opt-status-safeguard/WhatYoullAchieve";
import WhyKeystone from "@/components/stem-opt-status-safeguard/WhyKeystone";
import MidCta from "@/components/stem-opt-status-safeguard/MidCta";
import FaqSection from "@/components/stem-opt-status-safeguard/FaqSection";
import ComplianceClosing from "@/components/stem-opt-status-safeguard/ComplianceClosing";

export default function StemOptStatusSafeguard() {
  return (
    <PageLayout>
      <Seo
        title="STEM OPT雇主合规培训"
        description="Keystone Strategies 为雇主与自雇型创始人设计合规的STEM OPT岗位描述、监督架构，并提供持续的身份维护指导。"
        path="/stem-opt-employer-compliance-training"
      />
      <Hero />
      <StatsBar />
      <AboutProgram />
      <ComparisonSection />
      <WhoItsFor />
      <WhatYoullAchieve />
      <WhyKeystone />
      <RelatedServices currentHref="/stem-opt-employer-compliance-training" />
      <MidCta />
      <FaqSection />
      <ComplianceClosing />
    </PageLayout>
  );
}
