import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Business Operations Setup"
      subtitle="Keep Your Governance Documents and Operating Systems Current"
      description={
        <>
          A company on paper isn&rsquo;t the same as a company that can operate. We keep your
          bylaws or operating agreement, registered agent, and annual filings current, and
          handle the practical identity and operations layer, domain, email, phone, registered
          address, agency filings, and the contract templates you&rsquo;ll actually use, so your
          business runs on real infrastructure and a clean governance record from day one.
        </>
      }
      ctaLabel="Book an Operations Setup Consultation"
    />
  );
}
