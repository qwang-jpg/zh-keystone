import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Payroll & Payroll Tax Management"
      subtitle="Accurate, Compliant Payroll for Every Employee, in Every State"
      description={
        <>
          Issuing legitimate W-2 wages is what makes an offer letter real, and it&rsquo;s a
          precondition for E-Verify, STEM OPT, and H-1B compliance alike. We set up your
          payroll system, register the right state tax and unemployment accounts, and build
          the wage, withholding, and recordkeeping process your company runs on.
        </>
      }
      ctaLabel="Book a Payroll Setup Consultation"
    />
  );
}
