import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactClosing from "@/components/contact/ContactClosing";

export default function Contact() {
  return (
    <PageLayout>
      <Seo
        title="联系我们 — 预约免费咨询"
        description="无论您是在规划移民路径、筹备新的创业项目，还是需要企业法律与税务方面的指导，Keystone Strategies 团队都随时为您提供帮助。"
        path="/contact"
      />
      <ContactHero />
      <ContactFormSection />
      <ContactClosing />
    </PageLayout>
  );
}
