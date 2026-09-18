import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/e-verify-employer-account-setup/Hero";
import Overview from "@/components/e-verify-employer-account-setup/Overview";
import CoreDeliverables from "@/components/e-verify-employer-account-setup/CoreDeliverables";
import WhyKeystone from "@/components/e-verify-employer-account-setup/WhyKeystone";
import FaqSection from "@/components/e-verify-employer-account-setup/FaqSection";

export default function EVerifyEmployerAccountSetup() {
  return (
    <PageLayout>
      <Seo
        title="雇佣资格与雇主注册"
        description="Keystone Strategies 为您注册并配置企业E-Verify雇主账户——这是每一位STEM OPT雇员入职的必备条件——同时搭建州新员工申报流程，并交付您的公司ID。"
        path="/e-verify-employer-account-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="让您的公司具备E-Verify资质"
        description={<p>我们负责注册、账户配置与培训引导，确保您的公司ID在需要之前就已经签发就绪。</p>}
        ctaLabel="为我的公司注册E-Verify"
      />
    </PageLayout>
  );
}
