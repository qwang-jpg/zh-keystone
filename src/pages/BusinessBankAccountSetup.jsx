import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/business-bank-account-setup/Hero";
import Overview from "@/components/business-bank-account-setup/Overview";
import CoreDeliverables from "@/components/business-bank-account-setup/CoreDeliverables";
import WhyKeystone from "@/components/business-bank-account-setup/WhyKeystone";
import FaqSection from "@/components/business-bank-account-setup/FaqSection";

export default function BusinessBankAccountSetup() {
  return (
    <PageLayout>
      <Seo
        title="企业银行账户开设支持"
        description="Keystone Strategies 为您准备所需材料，并全程指导您远程或线下开设美国企业银行账户，确保公司获得资金并具备运营条件。"
        path="/business-bank-account-setup"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="正确地为您的公司搭建银行体系"
        description={
          <p>
            只需一次咨询，即可准备好您的材料清单。我们会为您匹配合适的银行，并全程陪同，
            直至账户成功开通并完成注资。
          </p>
        }
        ctaLabel="预约银行开户咨询"
      />
    </PageLayout>
  );
}
