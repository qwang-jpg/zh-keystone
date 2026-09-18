import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/employee-onboarding-compliance/Hero";
import Overview from "@/components/employee-onboarding-compliance/Overview";
import CoreDeliverables from "@/components/employee-onboarding-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-onboarding-compliance/WhyKeystone";
import FaqSection from "@/components/employee-onboarding-compliance/FaqSection";

export default function EmployeeOnboardingCompliance() {
  return (
    <PageLayout>
      <Seo
        title="招聘与入职体系"
        description="Keystone Strategies 为每一位新员工搭建标准化的招聘流程与合规入职体系，从offer审批到I-9与W-4表格办理，并配套美国基础雇佣合规指南。"
        path="/employee-onboarding-compliance"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="以正确的方式迎接您的下一位新员工"
        description={<p>可复用的招聘流程、offer信、I-9、W-4，以及背后的合规保障，全部在入职首日之前准备就绪。</p>}
        ctaLabel="预约入职体系咨询"
      />
    </PageLayout>
  );
}
