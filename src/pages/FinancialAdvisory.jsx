import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/financial-advisory/Hero";
import ServicesOverview from "@/components/financial-advisory/ServicesOverview";
import StrategicServices from "@/components/financial-advisory/StrategicServices";
import WhyKeystone from "@/components/financial-advisory/WhyKeystone";
import TeamSection from "@/components/financial-advisory/TeamSection";
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
        description="Keystone Strategies 为您的初创企业搭建基础财务管理框架，并规划好年度报税与公司续期的合规日历。"
        path="/business-tax-financial-management"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <ServicesOverview />
      <StrategicServices />
      <WhyKeystone />
      <TeamSection />
      <FaqSection />
      <FinalCta />
    </PageLayout>
  );
}
