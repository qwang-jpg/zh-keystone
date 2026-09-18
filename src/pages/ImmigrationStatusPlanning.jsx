import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/immigration-status/Hero";
import StatsBar from "@/components/immigration-status/StatsBar";
import ServiceOverview from "@/components/immigration-status/ServiceOverview";
import ProgramCards from "@/components/immigration-status/ProgramCards";
import WhyChooseUs from "@/components/immigration-status/WhyChooseUs";
import CaseStudies from "@/components/immigration-status/CaseStudies";
import Testimonials from "@/components/immigration-status/Testimonials";
import FinalCta from "@/components/immigration-status/FinalCta";

export default function ImmigrationStatusPlanning() {
  return (
    <PageLayout>
      <Seo
        title="自雇型H-1B规划"
        description="Keystone Strategies 为H-1B及其他职业类签证申请搭建职位架构、雇主关系与申请材料，包括创始人主导的自雇型公司，并直接与移民律师协调对接。"
        path="/employment-visa-position-petition-planning"
      />
      <Hero />
      <StatsBar />
      <ServiceOverview />
      <ProgramCards />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <FinalCta />
    </PageLayout>
  );
}
