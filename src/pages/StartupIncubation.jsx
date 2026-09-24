import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/startup-incubation/Hero";
import StatsBar from "@/components/startup-incubation/StatsBar";
import ProgramOverview from "@/components/startup-incubation/ProgramOverview";
import WhoItsFor from "@/components/startup-incubation/WhoItsFor";
import CoreServiceModules from "@/components/startup-incubation/CoreServiceModules";
import MidCta from "@/components/startup-incubation/MidCta";
import CaseStudies from "@/components/startup-incubation/CaseStudies";
import WhyKeystone from "@/components/startup-incubation/WhyKeystone";
import FaqSection, { faqs } from "@/components/startup-incubation/FaqSection";
import FinalCta from "@/components/startup-incubation/FinalCta";

export default function StartupIncubation() {
  return (
    <PageLayout>
      <Seo
        title="公司注册与架构设计"
        description="Keystone Strategies 负责实体类型选择、州注册递交、治理文件起草及联邦EIN申请，为您的美国公司搭建合规、可扩展的基础架构。"
        path="/company-formation-corporate-structure"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <ProgramOverview />
      <WhoItsFor />
      <CoreServiceModules />
      <MidCta />
      <CaseStudies />
      <WhyKeystone />
      <RelatedServices currentHref="/company-formation-corporate-structure" />
      <FaqSection />
      <FinalCta />
    </PageLayout>
  );
}
