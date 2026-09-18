import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CompactCta from "@/components/common/CompactCta";
import Hero from "@/components/corporate-website-brand-development/Hero";
import Overview from "@/components/corporate-website-brand-development/Overview";
import CoreDeliverables from "@/components/corporate-website-brand-development/CoreDeliverables";
import WhyKeystone from "@/components/corporate-website-brand-development/WhyKeystone";
import FaqSection from "@/components/corporate-website-brand-development/FaqSection";

export default function CorporateWebsiteBrandDevelopment() {
  return (
    <PageLayout>
      <Seo
        title="品牌与线上形象建设"
        description="Keystone Strategies 为您设计品牌标志，并端到端搭建公司官网，从架构与内容规划到SEO配置与上线全程负责。"
        path="/corporate-website-brand-development"
      />
      <Hero />
      <Overview />
      <CoreDeliverables />
      <WhyKeystone />
      <FaqSection />
      <CompactCta
        title="为您的公司打造一个能够佐证故事的官网"
        description={<p>品牌标志、完整网站搭建、内容撰写、SEO基础配置，以及一份精美的公司简介，交付即可上线。</p>}
        ctaLabel="预约网站与品牌咨询"
      />
    </PageLayout>
  );
}
