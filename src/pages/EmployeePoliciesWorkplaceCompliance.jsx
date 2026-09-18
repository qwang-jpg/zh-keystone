import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/employee-policies-workplace-compliance/Hero";
import Overview from "@/components/employee-policies-workplace-compliance/Overview";
import CoreDeliverables from "@/components/employee-policies-workplace-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-policies-workplace-compliance/WhyKeystone";
import FaqSection from "@/components/employee-policies-workplace-compliance/FaqSection";

export default function EmployeePoliciesWorkplaceCompliance() {
  return (
    <PageLayout>
      <Seo
        title="员工制度与职场合规"
        description="Keystone Strategies 为您搭建员工手册、反骚扰与平等就业机会（EEO）制度、法定职场公示，以及用工分类审核。"
        path="/employee-policies-workplace-compliance"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="把您的职场制度落实成书面文件"
        description={<p>员工手册、EEO制度、法定公示与用工分类审核，均针对您实际用工所在州量身搭建。</p>}
        ctaLabel="预约职场合规咨询"
      />
    </PageLayout>
  );
}
