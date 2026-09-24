import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/employee-onboarding-compliance/Hero";
import StatsBar from "@/components/employee-onboarding-compliance/StatsBar";
import Overview from "@/components/employee-onboarding-compliance/Overview";
import WhoItsFor from "@/components/employee-onboarding-compliance/WhoItsFor";
import CoreDeliverables from "@/components/employee-onboarding-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-onboarding-compliance/WhyKeystone";
import FaqSection, { faqs } from "@/components/employee-onboarding-compliance/FaqSection";

export default function EmployeeOnboardingCompliance() {
  return (
    <PageLayout>
      <Seo
        title="招聘与入职体系"
        description="Keystone Strategies 为每一位新员工搭建标准化的招聘流程与合规入职体系，从offer审批到I-9与W-4表格办理，并配套美国基础雇佣合规指南。"
        path="/employee-onboarding-compliance"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/employee-onboarding-compliance" />
      <CompactCta
        title="不要每次招聘都重新搭建入职流程"
        description={
          <p>
            可复用的招聘流程、入职首日所需的文书工作，以及背后的合规保障，一次搭建，此后每一次招聘都可直接沿用。
          </p>
        }
        ctaLabel="搭建我的入职流程"
      />
      <FaqSection />
      <CompactCta
        title="以正确的方式迎接您的下一位新员工"
        description={<p>可复用的招聘流程、offer信、I-9、W-4，以及背后的合规保障，全部在入职首日之前准备就绪。</p>}
        ctaLabel="预约入职体系咨询"
      />
    </PageLayout>
  );
}
