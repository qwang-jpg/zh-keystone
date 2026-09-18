import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Company Formation & Corporate Structure"
      subtitle="A Compliant, Scalable Entity, Built Right the First Time"
      description={
        <>
          From choosing the right entity type and registration state to filing with the
          state, drafting your governance documents, and securing your federal EIN, we
          handle every step of forming your U.S. company, then organize the records that
          become the foundation for banking, hiring, and future immigration filings.
        </>
      }
      ctaLabel="Book a Free Formation Consultation"
    />
  );
}
