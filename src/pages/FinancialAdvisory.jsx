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
        title="Business Tax & Financial Management"
        description="Keystone Strategies builds your startup's basic financial management framework and maps out your annual tax filing and company renewal compliance calendar."
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
