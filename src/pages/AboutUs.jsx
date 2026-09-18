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
        title="关于我们 — 您在美国立足的战略伙伴"
        description="Keystone Strategies 助力全球人才与创业者在美国建立可持续的未来，将身份规划、企业架构与财务顾问整合为一支团队。"
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
