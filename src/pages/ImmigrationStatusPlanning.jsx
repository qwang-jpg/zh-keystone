import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/immigration-status/Hero";
import StatsBar from "@/components/immigration-status/StatsBar";
import ServiceOverview from "@/components/immigration-status/ServiceOverview";
import WhoItsFor from "@/components/immigration-status/WhoItsFor";
import ProgramCards from "@/components/immigration-status/ProgramCards";
import MidCta from "@/components/immigration-status/MidCta";
import CaseStudies from "@/components/immigration-status/CaseStudies";
import WhyKeystone from "@/components/immigration-status/WhyKeystone";
import FaqSection, { faqs } from "@/components/immigration-status/FaqSection";
import FinalCta from "@/components/immigration-status/FinalCta";

export default function ImmigrationStatusPlanning() {
  return (
    <PageLayout>
      <Seo
        title="职业签证职位与申请规划"
        description="Keystone Strategies 为H-1B及其他职业类签证申请搭建职位架构、雇主关系与申请材料，包括创始人主导的自雇型公司，并直接与移民律师协调对接。"
        path="/employment-visa-position-petition-planning"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <ServiceOverview />
      <WhoItsFor />
      <ProgramCards />
      <MidCta />
      <CaseStudies />
      <WhyKeystone />
      <RelatedServices currentHref="/employment-visa-position-petition-planning" />
      <FaqSection />
      <FinalCta />
    </PageLayout>
  );
}
