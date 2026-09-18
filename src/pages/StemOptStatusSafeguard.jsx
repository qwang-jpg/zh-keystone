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
        title="STEM OPT Employer Compliance Training"
        description="Keystone Strategies designs compliant STEM OPT job descriptions, supervision structures, and ongoing status maintenance guidance for employers and self-sponsoring founders alike."
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
