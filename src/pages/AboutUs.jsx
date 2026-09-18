import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import VisionMission from "@/components/about/VisionMission";
import WhereAreYouNow from "@/components/home/WhereAreYouNow";
import WhyKeystone from "@/components/about/WhyKeystone";
import CoreValues from "@/components/about/CoreValues";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import PartnerCta from "@/components/about/PartnerCta";

export default function AboutUs() {
  return (
    <PageLayout>
      <Seo
        title="About Us — Your Partner in Building a U.S. Presence"
        description="Keystone Strategies empowers global talents and entrepreneurs to build a sustainable future in the U.S., combining immigration status planning, business structuring, and financial advisory into one integrated team."
        path="/about-us"
      />
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <WhereAreYouNow />
      <WhyKeystone />
      <CoreValues />
      <AboutTestimonials />
      <PartnerCta />
    </PageLayout>
  );
}
