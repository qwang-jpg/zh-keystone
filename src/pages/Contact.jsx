import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactClosing from "@/components/contact/ContactClosing";

export default function Contact() {
  return (
    <PageLayout>
      <Seo
        title="Contact Us — Book a Free Consultation"
        description="Whether you're planning your immigration pathway, launching a new venture, or seeking legal and tax guidance for your business, the Keystone Strategies team is here to help."
        path="/contact"
      />
      <ContactHero />
      <ContactFormSection />
      <ContactClosing />
    </PageLayout>
  );
}
