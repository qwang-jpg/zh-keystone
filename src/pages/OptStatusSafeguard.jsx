import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/opt-status-safeguard/Hero";
import StatsBar from "@/components/opt-status-safeguard/StatsBar";
import WhyThisProgram from "@/components/opt-status-safeguard/WhyThisProgram";
import WhoItsFor from "@/components/opt-status-safeguard/WhoItsFor";
import WhatYoullAchieve from "@/components/opt-status-safeguard/WhatYoullAchieve";
import ServiceProcess from "@/components/opt-status-safeguard/ServiceProcess";
import MidCta from "@/components/opt-status-safeguard/MidCta";
import SuccessCases from "@/components/opt-status-safeguard/SuccessCases";
import WhyKeystone from "@/components/opt-status-safeguard/WhyKeystone";
import Insights from "@/components/opt-status-safeguard/Insights";
import FaqSection from "@/components/opt-status-safeguard/FaqSection";
import ComplianceClosing from "@/components/opt-status-safeguard/ComplianceClosing";

export default function OptStatusSafeguard() {
  return (
    <PageLayout>
      <Seo
        title="OPT身份保障计划 — 以真实工作，守护您的OPT身份"
        description="Keystone Strategies通过与专业相关的真实工作机会及系统化的OPT支持，帮助国际毕业生管理OPT失业风险——500+家合作企业资源，2,000+个真实工作机会。"
        path="/opt-status-safeguard"
      />
      <Hero />
      <StatsBar />
      <WhyThisProgram />
      <WhoItsFor />
      <WhatYoullAchieve />
      <ServiceProcess />
      <MidCta />
      <SuccessCases />
      <WhyKeystone />
      <Insights />
      <RelatedServices currentHref="/opt-status-safeguard" />
      <FaqSection />
      <ComplianceClosing />
    </PageLayout>
  );
}
