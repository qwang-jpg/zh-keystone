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
        title="为全球人才提供移民、商业与财务战略"
        description="Keystone Strategies 为国际专业人才与成长型企业提供一体化、全流程解决方案，涵盖OPT、STEM OPT、H-1B、自雇创业以及长期移民规划。"
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
