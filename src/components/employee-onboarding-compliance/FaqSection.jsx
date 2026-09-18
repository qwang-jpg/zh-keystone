import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "How soon do I need to complete Form I-9 after hiring someone?",
    answer:
      "Section 1 must be completed by the employee's first day of work, and Section 2 must be completed by the employer within three business days of the start date. We help you build a process that hits this window every time.",
  },
  {
    question: "Do onboarding requirements differ for a STEM OPT or H-1B employee?",
    answer:
      "The core federal forms (I-9, W-4) are the same for every employee, but STEM OPT and H-1B hires carry extra documentation expectations, like a genuine offer letter and job description consistent with the visa filing. We tailor onboarding to fit those requirements.",
  },
  {
    question: "What happens if our I-9s aren't properly retained?",
    answer:
      "Missing or incomplete I-9s are one of the most common findings in a Department of Homeland Security audit and can carry per-violation penalties. We set up a retention process that keeps you organized without extra effort.",
  },
  {
    question: "Can you help with onboarding after we've already hired someone?",
    answer:
      "Yes. We regularly help companies clean up and correct onboarding paperwork for existing employees, not just new hires.",
  },
  {
    question: "What does the hiring workflow actually include beyond the paperwork?",
    answer:
      "A structured sequence from offer approval through a documented first-week schedule: who signs the offer, what gets provisioned before day one (equipment, accounts, system access), and a checklist so nothing depends on someone remembering it. It's built once and reused for every hire.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Employee Onboarding — FAQ" faqs={faqs} />;
}
