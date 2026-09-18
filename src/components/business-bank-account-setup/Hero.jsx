import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Business Bank Account Setup Support"
      subtitle="Get Your Company Banking Open, Funded, and Ready to Operate"
      description={
        <>
          A newly formed company can&rsquo;t run payroll, sign a lease, or accept its first
          payment without a business bank account. We prepare every piece of paperwork in
          advance and walk you through account opening with a U.S. bank, remotely or in
          person, so your company is funded and operational from day one.
        </>
      }
      ctaLabel="Book a Banking Setup Consultation"
    />
  );
}
