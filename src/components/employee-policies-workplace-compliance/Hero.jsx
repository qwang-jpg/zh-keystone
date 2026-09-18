import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Employee Policies & Workplace Compliance"
      subtitle="Workplace Policies That Protect Your Company, Not Just Your New Hire's File"
      description={
        <>
          Onboarding paperwork gets one employee started. Workplace policies are what govern
          every employee after that: an employee handbook, anti-harassment and EEO policy, the
          labor law postings you're required to display, and a clean read on how each worker
          should actually be classified.
        </>
      }
      ctaLabel="Book a Workplace Compliance Consultation"
    />
  );
}
