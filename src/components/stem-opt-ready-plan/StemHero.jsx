import ServiceHero from "@/components/common/ServiceHero";

export default function StemHero() {
  return (
    <ServiceHero
      title={
        <>
          Secure STEM OPT Status.
          <br />
          Compliant. Protected.
        </>
      }
      subtitle="STEM OPT Status Protection Program"
      description={
        <>
          STEM OPT is more than an extension application. It requires the right employer, the
          right employment structure, and the right compliance framework working together.
          Keystone Strategies helps international STEM graduates build the employer, employment,
          training, documentation, and ongoing compliance structure needed to move forward with
          STEM OPT — connecting employer eligibility, E-Verify, employment structure, Form I-983,
          the STEM OPT application, and ongoing compliance into one coordinated solution.
        </>
      }
      ctaLabel="Get My STEM OPT Assessment"
    />
  );
}
