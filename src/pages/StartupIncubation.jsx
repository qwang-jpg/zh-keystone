import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/startup-incubation/Hero";
import ProgramOverview from "@/components/startup-incubation/ProgramOverview";
import CoreServiceModules from "@/components/startup-incubation/CoreServiceModules";
import WhyKeystone from "@/components/startup-incubation/WhyKeystone";
import Testimonials from "@/components/startup-incubation/Testimonials";
import IncubationProcess from "@/components/startup-incubation/IncubationProcess";
import FinalCta from "@/components/startup-incubation/FinalCta";

export default function StartupIncubation() {
  return (
    <PageLayout>
      <Seo
        title="公司注册与架构设计"
        description="Keystone Strategies 负责实体类型选择、州注册递交、治理文件起草及联邦EIN申请，为您的美国公司搭建合规、可扩展的基础架构。"
        path="/company-formation-corporate-structure"
      />
      <Hero />
      <ProgramOverview />
      <CoreServiceModules />
      <WhyKeystone />
      <Testimonials />
      <IncubationProcess />
      <FinalCta />
    </PageLayout>
  );
}
