import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/employee-policies-workplace-compliance/Hero";
import StatsBar from "@/components/employee-policies-workplace-compliance/StatsBar";
import Overview from "@/components/employee-policies-workplace-compliance/Overview";
import WhoItsFor from "@/components/employee-policies-workplace-compliance/WhoItsFor";
import CoreDeliverables from "@/components/employee-policies-workplace-compliance/CoreDeliverables";
import WhyKeystone from "@/components/employee-policies-workplace-compliance/WhyKeystone";
import FaqSection, { faqs } from "@/components/employee-policies-workplace-compliance/FaqSection";

export default function EmployeePoliciesWorkplaceCompliance() {
  return (
    <PageLayout>
      <Seo
        title="员工制度与职场合规"
        description="Keystone Strategies 为您搭建员工手册、反骚扰与平等就业机会（EEO）制度、法定职场公示，以及用工分类审核。"
        path="/employee-policies-workplace-compliance"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/employee-policies-workplace-compliance" />
      <CompactCta
        title="补上入职流程无法覆盖的制度缺口"
        description={
          <p>
            一份员工手册、一套EEO制度、法定公示与一次分类审核，均针对您实际用工所在州量身搭建。
          </p>
        }
        ctaLabel="启动我的制度搭建"
      />
      <FaqSection />
      <CompactCta
        title="把您的职场制度落实成书面文件"
        description={<p>员工手册、EEO制度、法定公示与用工分类审核，均针对您实际用工所在州量身搭建。</p>}
        ctaLabel="预约职场合规咨询"
      />
    </PageLayout>
  );
}
