import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/stem-opt-status-safeguard/Hero";
import StatsBar from "@/components/stem-opt-status-safeguard/StatsBar";
import ComparisonSection from "@/components/stem-opt-status-safeguard/ComparisonSection";
import AboutProgram from "@/components/stem-opt-status-safeguard/AboutProgram";
import WhoItsFor from "@/components/stem-opt-status-safeguard/WhoItsFor";
import WhyChooseUs from "@/components/stem-opt-status-safeguard/WhyChooseUs";
import WhatYoullAchieve from "@/components/stem-opt-status-safeguard/WhatYoullAchieve";
import MidCta from "@/components/stem-opt-status-safeguard/MidCta";
import ServiceProcess from "@/components/stem-opt-status-safeguard/ServiceProcess";
import SuccessCases from "@/components/stem-opt-status-safeguard/SuccessCases";
import ComplianceClosing from "@/components/stem-opt-status-safeguard/ComplianceClosing";
import FaqSection from "@/components/stem-opt-status-safeguard/FaqSection";
import RelatedPlans from "@/components/stem-opt-status-safeguard/RelatedPlans";

export default function StemOptStatusSafeguard() {
  return (
    <PageLayout>
      <Seo
        title="STEM OPT雇主合规"
        description="Keystone Strategies 为雇主与自雇型创始人设计合规的STEM OPT岗位描述、监督架构，并提供持续的身份维护指导。"
        path="/stem-opt-employer-compliance-training"
      />
      <Hero />
      <StatsBar />
      <ComparisonSection />
      <AboutProgram />
      <WhoItsFor />
      <WhyChooseUs />
      <WhatYoullAchieve />
      <MidCta />
      <ServiceProcess />
      <SuccessCases />
      <ComplianceClosing />
      <FaqSection />
      <RelatedPlans />
    </PageLayout>
  );
}
