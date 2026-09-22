import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/h1b-infinity-plan/Hero";
import StatsBar from "@/components/h1b-infinity-plan/StatsBar";
import AboutPlan from "@/components/h1b-infinity-plan/AboutPlan";
import ValueProps from "@/components/h1b-infinity-plan/ValueProps";
import WhoItsFor from "@/components/h1b-infinity-plan/WhoItsFor";
import AssessmentCta from "@/components/h1b-infinity-plan/AssessmentCta";
import Achievements from "@/components/h1b-infinity-plan/Achievements";
import WhyKeystone from "@/components/home/WhyKeystone";
import SuccessStories from "@/components/h1b-infinity-plan/SuccessStories";
import InfinityCta from "@/components/h1b-infinity-plan/InfinityCta";
import ServiceProcess from "@/components/h1b-infinity-plan/ServiceProcess";
import RealEmployer from "@/components/h1b-infinity-plan/RealEmployer";
import EvidenceGallery from "@/components/our-cases/EvidenceGallery";
import FAQ, { faqs } from "@/components/h1b-infinity-plan/FAQ";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

export default function H1BInfinityPlan() {
  return (
    <PageLayout>
      <Seo title="H-1B Infinity Plan — 打造您H-1B之路背后的雇主" description="通过 H-1B Infinity Plan 搭建真正的美国雇主：企业基础、雇主体系、运营证明材料，并与合格移民律师协调对接。" path="/h1b-infinity-plan" jsonLd={faqJsonLd} />
      <Hero />
      <StatsBar />
      <AboutPlan />
      <ValueProps />
      <WhoItsFor />
      <AssessmentCta />
      <ServiceProcess />
      <Achievements />
      <WhyKeystone />
      <SuccessStories />
      <RealEmployer />
      <EvidenceGallery />
      <InfinityCta />
      <FAQ />
      <AssessmentCta final />
    </PageLayout>
  );
}
