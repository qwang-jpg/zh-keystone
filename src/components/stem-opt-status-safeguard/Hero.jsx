import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="STEM OPT Employer Compliance Training"
      subtitle="Genuine, Compliant Employer Positions for STEM OPT Students"
      description={
        <>
          A STEM OPT extension lives or dies on whether the employer side of the equation is
          genuinely compliant, real job duties tied to the degree, a real supervisor, and
          ongoing status maintenance. We train and guide employers, including founder-owned
          companies, through building that structure correctly and keeping it that way.
        </>
      }
      ctaLabel="Book an Assessment"
    />
  );
}
