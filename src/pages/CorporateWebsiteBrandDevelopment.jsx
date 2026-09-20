import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/corporate-website-brand-development/Hero";
import StatsBar from "@/components/corporate-website-brand-development/StatsBar";
import Overview from "@/components/corporate-website-brand-development/Overview";
import WhoItsFor from "@/components/corporate-website-brand-development/WhoItsFor";
import CoreDeliverables from "@/components/corporate-website-brand-development/CoreDeliverables";
import WhyKeystone from "@/components/home/WhyKeystone";
import FaqSection, { faqs } from "@/components/corporate-website-brand-development/FaqSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: Array.isArray(faq.answer) ? faq.answer.join(" ") : faq.answer },
  })),
};

export default function CorporateWebsiteBrandDevelopment() {
  return (
    <PageLayout>
      <Seo
        title="企业官网与品牌形象建设"
        description="Keystone Strategies 为您设计品牌标志，并端到端搭建公司官网，从架构与内容规划到SEO配置与上线全程负责。"
        path="/corporate-website-brand-development"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <WhoItsFor />
      <CoreDeliverables />
      <WhyKeystone />
      <RelatedServices currentHref="/corporate-website-brand-development" />
      <CompactCta
        title="为您的企业打造与其发展水平相匹配的线上形象"
        description={
          <p>
            品牌形象、网站与SEO作为一个统一的整体来搭建，让您的公司在线上呈现出与实际运营同样成熟的形象。
          </p>
        }
        ctaLabel="启动我的品牌与网站建设"
      />
      <FaqSection />
      <CompactCta
        title="打造真正反映您企业实际运营水平的品牌与网站"
        description={<p>品牌形象、视觉体系、UI/UX、网站开发、内容、SEO与公司简介——作为一套完整的企业形象一并交付。</p>}
        ctaLabel="预约网站与品牌咨询"
      />
    </PageLayout>
  );
}
