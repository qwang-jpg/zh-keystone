import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/payroll-payroll-tax-management/Hero";
import StatsBar from "@/components/payroll-payroll-tax-management/StatsBar";
import Overview from "@/components/payroll-payroll-tax-management/Overview";
import WhoItsFor from "@/components/payroll-payroll-tax-management/WhoItsFor";
import CoreDeliverables from "@/components/payroll-payroll-tax-management/CoreDeliverables";
import WhyKeystone from "@/components/payroll-payroll-tax-management/WhyKeystone";
import FaqSection, { faqs } from "@/components/payroll-payroll-tax-management/FaqSection";

export default function PayrollPayrollTaxManagement() {
  return (
    <PageLayout>
      <Seo
        title="薪资与薪资税务管理"
        description="Keystone Strategies 为您搭建薪资系统，注册正确的州薪资税与失业保险账户，并建立合规的薪酬与W-2办理流程。"
        path="/payroll-payroll-tax-management"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/payroll-payroll-tax-management" />
      <CompactCta
        title="搭建经得起审查的薪资书面记录"
        description={
          <p>
            系统搭建、州税务注册与符合W-2标准的记录留存，一次到位，同时经得起IRS、州政府部门与USCIS的审查。
          </p>
        }
        ctaLabel="启动我的薪资搭建"
      />
      <FaqSection />
      <CompactCta
        title="在第一位员工入职前，搭建好薪资体系"
        description={
          <p>
            从系统搭建、州注册到W-2准备，我们为您搭建一套公司未来多年都能持续使用的薪资流程。
          </p>
        }
        ctaLabel="预约薪资体系咨询"
      />
    </PageLayout>
  );
}
