import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutTeaser from "@/components/home/AboutTeaser";
import WhereAreYouNow from "@/components/home/WhereAreYouNow";
import CoreServices from "@/components/home/CoreServices";
import WhyKeystone from "@/components/home/WhyKeystone";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <PageLayout>
      <Seo
        title="Immigration, Business & Financial Strategy for Global Talent"
        description="Keystone Strategies provides integrated, end-to-end solutions for international professionals and growth-driven enterprises, spanning OPT, STEM OPT, H-1B, self-employment, and long-term immigration planning."
        path="/"
      />
      <Hero />
      <StatsBar />
      <WhereAreYouNow />
      <CoreServices />
      <AboutTeaser />
      <WhyKeystone />
      <Testimonials />
      <FinalCta />
    </PageLayout>
  );
}
