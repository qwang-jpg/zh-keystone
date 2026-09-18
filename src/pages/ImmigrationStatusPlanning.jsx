import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/immigration-status/Hero";
import StatsBar from "@/components/immigration-status/StatsBar";
import ServiceOverview from "@/components/immigration-status/ServiceOverview";
import ProgramCards from "@/components/immigration-status/ProgramCards";
import WhyChooseUs from "@/components/immigration-status/WhyChooseUs";
import CaseStudies from "@/components/immigration-status/CaseStudies";
import Testimonials from "@/components/immigration-status/Testimonials";
import FinalCta from "@/components/immigration-status/FinalCta";

export default function ImmigrationStatusPlanning() {
  return (
    <PageLayout>
      <Seo
        title="Employment Visa Position & Petition Planning"
        description="Keystone Strategies structures the position, employer relationship, and petition materials behind H-1B and other employment-based visa filings, including founder-led, self-sponsored companies, then coordinates directly with immigration counsel."
        path="/employment-visa-position-petition-planning"
      />
      <Hero />
      <StatsBar />
      <ServiceOverview />
      <ProgramCards />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <FinalCta />
    </PageLayout>
  );
}
