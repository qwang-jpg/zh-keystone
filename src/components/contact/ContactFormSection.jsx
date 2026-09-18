import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border p-8 md:p-10">
          <ContactForm />
        </div>

        <div>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
