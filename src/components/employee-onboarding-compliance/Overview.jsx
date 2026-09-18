import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "A repeatable hiring workflow so every hire follows the same steps, not a process reinvented each time",
  "A properly drafted offer letter that stands up as evidence of a genuine job offer",
  "Form I-9 completed and retained the way federal law actually requires",
  "Form W-4 collected so withholding starts correctly from the first paycheck",
  "A basic compliance framework so hiring decisions don't create legal exposure down the line",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="Onboarding Is a System, Not Just Paperwork"
      description="Every new hire triggers federal and state employment obligations, and deserves the same consistent process. We build the hiring workflow and make sure the documentation is complete and correct before day one, not discovered as a gap during an audit or a visa filing."
      checklist={checklist}
    />
  );
}
