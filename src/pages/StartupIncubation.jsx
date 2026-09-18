import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/startup-incubation/Hero";
import ProgramOverview from "@/components/startup-incubation/ProgramOverview";
import CoreServiceModules from "@/components/startup-incubation/CoreServiceModules";
import WhyKeystone from "@/components/startup-incubation/WhyKeystone";
import Testimonials from "@/components/startup-incubation/Testimonials";
import IncubationProcess from "@/components/startup-incubation/IncubationProcess";
import FinalCta from "@/components/startup-incubation/FinalCta";

export default function StartupIncubation() {
  return (
    <PageLayout>
      <Seo
        title="Company Formation & Corporate Structure"
        description="Keystone Strategies handles entity selection, state filing, governance documents, and your federal EIN, building a compliant, scalable foundation for your U.S. company."
        path="/company-formation-corporate-structure"
      />
      <Hero />
      <ProgramOverview />
      <CoreServiceModules />
      <WhyKeystone />
      <Testimonials />
      <IncubationProcess />
      <FinalCta />
    </PageLayout>
  );
}
