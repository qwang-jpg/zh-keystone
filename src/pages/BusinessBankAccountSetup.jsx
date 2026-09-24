import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/business-bank-account-setup/Hero";
import StatsBar from "@/components/business-bank-account-setup/StatsBar";
import Overview from "@/components/business-bank-account-setup/Overview";
import WhoItsFor from "@/components/business-bank-account-setup/WhoItsFor";
import CoreDeliverables from "@/components/business-bank-account-setup/CoreDeliverables";
import WhyKeystone from "@/components/business-bank-account-setup/WhyKeystone";
import FaqSection, { faqs } from "@/components/business-bank-account-setup/FaqSection";

export default function BusinessBankAccountSetup() {
  return (
    <PageLayout>
      <Seo
        title="企业银行账户开设支持 — 远程开设美国企业银行账户"
        description="Keystone帮助符合条件的创始人在美国主要银行开设企业账户，无需SSN或亲自前往银行网点，服务涵盖从材料准备、账户开通到银行卡寄送的全过程。"
        path="/business-bank-account-setup"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/business-bank-account-setup" />
      <CompactCta
        title="别让缺失的银行账户拖慢您的第一笔收款"
        description={
          <p>
            从材料准备到账户成功注资，我们为您打理银行开户的全部流程，让公司即刻具备运营条件。
          </p>
        }
        ctaLabel="启动我的银行开户"
      />
      <FaqSection />
      <CompactCta
        title="远程搭建您的美国企业银行账户"
        description={
          <p>
            准备好正确的材料，为您匹配合适的美国银行方案，无需不必要的奔波或摸索，即可顺利完成开户流程。
          </p>
        }
        ctaLabel="预约银行开户咨询"
      />
    </PageLayout>
  );
}
