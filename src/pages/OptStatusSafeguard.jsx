import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/opt-status-safeguard/Hero";
import StatsBar from "@/components/opt-status-safeguard/StatsBar";
import AboutProgram from "@/components/opt-status-safeguard/AboutProgram";
import WhoItsFor from "@/components/opt-status-safeguard/WhoItsFor";
import WhyChooseUs from "@/components/opt-status-safeguard/WhyChooseUs";
import WhatYoullAchieve from "@/components/opt-status-safeguard/WhatYoullAchieve";
import MidCta from "@/components/opt-status-safeguard/MidCta";
import ServiceProcess from "@/components/opt-status-safeguard/ServiceProcess";
import SuccessCases from "@/components/opt-status-safeguard/SuccessCases";
import ComplianceClosing from "@/components/opt-status-safeguard/ComplianceClosing";
import FaqSection from "@/components/opt-status-safeguard/FaqSection";
import RelatedPlans from "@/components/opt-status-safeguard/RelatedPlans";

export default function OptStatusSafeguard() {
  return (
    <PageLayout>
      <Seo
        title="OPT就业保障计划 — 合规解决OPT失业困境"
        description="Keystone Strategies 专注于为处于OPT失业期的毕业生提供合法合规的解决方案，涵盖真实工作安置、OPT申请指导及长期身份规划。"
        path="/opt-status-safeguard"
      />
      <Hero />
      <StatsBar />
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
