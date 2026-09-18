import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Business Tax & Financial Management"
      description={
        <>
          Keystone Strategies builds the basic bookkeeping and financial management
          framework a new company needs, then maps out your annual tax filing and company
          renewal calendar so nothing gets missed after formation.
          <br />
          We turn compliance from a source of anxiety into a system you can actually rely on.
        </>
      }
      ctaLabel="Book a Financial Assessment"
    />
  );
}
