import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="E-Verify & Employer Account Setup"
      subtitle="Register the Employer Account STEM OPT Hiring Requires"
      description={
        <>
          E-Verify enrollment is a hard requirement before your company can employ a STEM OPT
          student, and a common ask from other partners and clients. We handle the enrollment
          process end to end and get your Company ID issued and ready to use.
        </>
      }
      ctaLabel="Register My Company for E-Verify"
    />
  );
}
