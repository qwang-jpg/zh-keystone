import CompactCta from "@/components/common/CompactCta";
import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/h1b-infinity-plan/Hero";
import StatsBar from "@/components/h1b-infinity-plan/StatsBar";
import AboutPlan from "@/components/h1b-infinity-plan/AboutPlan";
import ValueProps from "@/components/h1b-infinity-plan/ValueProps";
import WhoItsFor from "@/components/h1b-infinity-plan/WhoItsFor";
import CompetitiveEdge from "@/components/h1b-infinity-plan/CompetitiveEdge";
import Achievements from "@/components/h1b-infinity-plan/Achievements";
import InfinityCta from "@/components/h1b-infinity-plan/InfinityCta";
import ServiceProcess from "@/components/h1b-infinity-plan/ServiceProcess";
import SuccessStories from "@/components/h1b-infinity-plan/SuccessStories";
import ProvenResults from "@/components/h1b-infinity-plan/ProvenResults";
import STEMCrossSell from "@/components/h1b-infinity-plan/STEMCrossSell";
import FAQ, { faqs } from "@/components/h1b-infinity-plan/FAQ";
import OtherServices from "@/components/h1b-infinity-plan/OtherServices";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function H1BInfinityPlan() {
  return (
    <PageLayout>
      <Seo
        title="H-1B无限续航计划 — 公司注册与身份规划"
        description="H-1B无限续航计划专为面临H-1B裁员，或计划通过OPT/H-1B创业实现自雇的人群设计，从公司注册到合规运营提供全程支持。"
        path="/h-1b-status-protection-program"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <StatsBar />
      <nav aria-label="本页导航" className="border-b border-border bg-white py-5">
        <div className="container flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary">
          <a href="#about-plan">计划介绍</a>
          <a href="#who-its-for">适合人群</a>
          <a href="#included-services">服务内容</a>
          <a href="#service-process">服务流程</a>
          <a href="#success-stories">客户案例</a>
          <a href="#h1b-faq">常见问题</a>
        </div>
      </nav>
      <AboutPlan />
      <ValueProps />
      <WhoItsFor />
      <Achievements />
      <CompetitiveEdge />
      <InfinityCta />
      <ServiceProcess />
      <SuccessStories />
      <ProvenResults />
      <CompactCta
        title="您的H-1B自雇指南"
        description={<p>了解公司注册、申请材料准备、律师协调，以及规划您H-1B之路所涉及的各个步骤。</p>}
        ctaLabel="阅读指南"
        ctaHref="/insights/h-1b-self-employment-complete-guide"
      />
      <STEMCrossSell />
      <FAQ />
      <OtherServices />
    </PageLayout>
  );
}
