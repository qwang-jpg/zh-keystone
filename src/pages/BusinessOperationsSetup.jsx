import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/business-operations-setup/Hero";
import StatsBar from "@/components/business-operations-setup/StatsBar";
import Overview from "@/components/business-operations-setup/Overview";
import WhoItsFor from "@/components/business-operations-setup/WhoItsFor";
import CoreDeliverables from "@/components/business-operations-setup/CoreDeliverables";
import WhyKeystone from "@/components/home/WhyKeystone";
import FaqSection, { faqs } from "@/components/business-operations-setup/FaqSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: Array.isArray(faq.answer) ? faq.answer.join(" ") : faq.answer },
  })),
};

export default function BusinessOperationsSetup() {
  return (
    <PageLayout>
      <Seo
        title="公司运营搭建"
        description="公司注册完成后，整理好治理记录、企业身份、运营地址、政府记录与核心文档模板。"
        path="/business-operations-setup"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/business-operations-setup" />
      <CompactCta
        title="为您的公司搭建运营层，而不只是一纸证书"
        description={
          <p>
            治理记录、企业身份与即用型模板，一次性整理到位，让您的公司能够真正运转，而不只是停留在纸面上。
          </p>
        }
        ctaLabel="启动我的运营搭建"
      />
      <FaqSection />
      <CompactCta
        title="把已注册的实体，变成真正运营的企业"
        description={<p>为您的企业搭建治理记录、企业身份、公司信息与核心文档，让运营基础更加规范有序。</p>}
        ctaLabel="预约运营搭建咨询"
      />
    </PageLayout>
  );
}
