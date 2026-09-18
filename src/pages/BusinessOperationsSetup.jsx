import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/business-operations-setup/Hero";
import Overview from "@/components/business-operations-setup/Overview";
import CoreDeliverables from "@/components/business-operations-setup/CoreDeliverables";
import WhyKeystone from "@/components/business-operations-setup/WhyKeystone";
import FaqSection from "@/components/business-operations-setup/FaqSection";

export default function BusinessOperationsSetup() {
  return (
    <PageLayout>
      <Seo
        title="公司治理与持续合规"
        description="Keystone Strategies 帮您维护治理文件、注册代理人与年度申报的持续合规，并搭建企业日常运营所需的基础设施：域名、邮箱、电话、注册地址、合同模板与保险指导。"
        path="/business-operations-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="把已注册的实体，变成真正运营的企业"
        description={<p>域名、邮箱、电话、地址、合同模板与保险指导，一次性协调搭建完成。</p>}
        ctaLabel="预约运营搭建咨询"
      />
    </PageLayout>
  );
}
