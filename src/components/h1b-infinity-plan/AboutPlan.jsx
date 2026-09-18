import SectionHeading from "@/components/common/SectionHeading";

export default function AboutPlan() {
  return (
    <section id="about-plan" className="scroll-mt-24 bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="About the H-1B Infinity Plan" />
        <div className="mt-10 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
          <p>The <strong className="text-keystone-ink">Keystone Strategies H-1B Infinity Plan</strong> is a one-stop self-employment program for international professionals who cannot find a sponsoring employer, are facing an H-1B layoff, or want to start a business. From company formation to ongoing operations, we help you build a business that can support your immigration and career goals.</p>
          <p>Our services include company registration, an employer identification number (EIN), shareholder or operating agreements, applicable corporate filings, E-Verify enrollment where needed, remote business banking, a professional website, a company handbook, tax planning, and coordination with legal professionals.</p>
          <p>The plan is designed for continuity: establish genuine business operations, prepare for future H-1B registration cycles when eligible, and plan ahead for changes in employment. Your company would act as the petitioning employer; forming a company alone does not grant immigration status or work authorization.</p>
          <p>Beyond immediate status concerns, we bring together business resources and professional guidance to help you navigate a critical stage of your U.S. career and build a foundation for long-term growth.</p>
        </div>
      </div>
    </section>
  );
}
