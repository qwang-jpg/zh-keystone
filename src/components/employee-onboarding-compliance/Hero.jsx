import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="Employee Onboarding & Employment Compliance"
      subtitle="A Standardized Hiring System, Not a One-Off Scramble Each Time"
      description={
        <>
          A missing I-9, an unsigned offer letter, or an outdated W-4 can quietly undermine
          months of careful planning. We build a repeatable hiring workflow and onboarding
          checklist, plus the paperwork and basic compliance practices every new hire needs,
          from the offer letter through federal employment forms.
        </>
      }
      ctaLabel="Book an Onboarding Consultation"
    />
  );
}
