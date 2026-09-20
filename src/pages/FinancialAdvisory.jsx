import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/financial-advisory/Hero";
import StatsBar from "@/components/financial-advisory/StatsBar";
import ServicesOverview from "@/components/financial-advisory/ServicesOverview";
import WhoItsFor from "@/components/financial-advisory/WhoItsFor";
import StrategicServices from "@/components/financial-advisory/StrategicServices";
import WhyKeystone from "@/components/home/WhyKeystone";
import MidCta from "@/components/financial-advisory/MidCta";
import FaqSection, { faqs } from "@/components/financial-advisory/FaqSection";
import FinalCta from "@/components/financial-advisory/FinalCta";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FinancialAdvisory() {
  return (
    <PageLayout>
      <Seo
        title="企业财税体系搭建"
        description="通过记账体系搭建、年度报税与续期规划、财务记录整理，以及CPA协调，为您的公司打好财务基础。"
        path="/business-tax-financial-management"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <WhoItsFor />
      <StrategicServices />
      <WhyKeystone />
      <RelatedServices currentHref="/business-tax-financial-management" />
      <MidCta />
      <FaqSection />
      <FinalCta />
    </PageLayout>
  );
}
