import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/eb-2-eb-3-green-card-planning/Hero";
import Overview from "@/components/eb-2-eb-3-green-card-planning/Overview";
import CoreDeliverables from "@/components/eb-2-eb-3-green-card-planning/CoreDeliverables";
import WhyKeystone from "@/components/eb-2-eb-3-green-card-planning/WhyKeystone";
import FaqSection from "@/components/eb-2-eb-3-green-card-planning/FaqSection";

export default function Eb2Eb3GreenCardPlanning() {
  return (
    <PageLayout>
      <Seo
        title="EB-2 / EB-3 绿卡规划"
        description="Keystone Strategies 为EB-2或EB-3绿卡申请搭建雇主与职位架构，做好PERM前期准备工作，并在递交全程与移民律师直接协调对接。"
        path="/eb-2-eb-3-green-card-planning"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="现在就为您的下一阶段身份做好规划"
        description={<p>类别选择、符合PERM要求的职位设计，以及雇主架构搭建，都围绕您的长期时间线量身打造。</p>}
        ctaLabel="预约绿卡规划咨询"
      />
    </PageLayout>
  );
}
