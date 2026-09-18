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
        title="H-1B Infinity Plan — Business Formation & Status Planning"
        description="Our H-1B Infinity Plan is designed for individuals facing H-1B layoffs or planning self-employment through OPT or H-1B entrepreneurship, with full support from company formation to compliant operations."
        path="/h-1b-status-protection-program"
        jsonLd={faqJsonLd}
      />
      <Hero />
      <StatsBar />
      <nav aria-label="On this page" className="border-b border-border bg-white py-5">
        <div className="container flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary">
          <a href="#about-plan">About the Plan</a>
          <a href="#who-its-for">Who It’s For</a>
          <a href="#included-services">What’s Included</a>
          <a href="#service-process">Our Process</a>
          <a href="#success-stories">Client Cases</a>
          <a href="#h1b-faq">Common Questions</a>
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
        title="Your Guide to H-1B Self-Employment"
        description={<p>Explore company formation, petition preparation, attorney coordination, and the steps involved in planning your H-1B journey.</p>}
        ctaLabel="Read the Guide"
        ctaHref="/insights/h-1b-self-employment-complete-guide"
      />
      <STEMCrossSell />
      <FAQ />
      <OtherServices />
    </PageLayout>
  );
}
