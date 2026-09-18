import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "Am I legally required to have an employee handbook?",
    answer:
      "Federal law doesn't require a handbook outright, but several states require specific written policies (like sick leave or harassment prevention training) once you have employees, and a handbook is the practical way to document and distribute them. It's also strong evidence of good-faith compliance if a dispute ever comes up.",
  },
  {
    question: "What workplace posters am I actually required to display?",
    answer:
      "Federal law requires several posters covering wage and hour, EEO, and safety topics, and most states add their own on top of that. Requirements also shift depending on whether your team works on-site or remotely. We identify exactly which ones apply to your state(s) and workplace setup.",
  },
  {
    question: "What happens if I misclassify an employee as a contractor?",
    answer:
      "Misclassification can trigger back pay for overtime and benefits, back payroll taxes, and penalties from both the IRS and state labor agencies, sometimes years after the fact. We review each role against the actual legal test, not just how the relationship is labeled on paper.",
  },
  {
    question: "How often should workplace policies be updated?",
    answer:
      "At minimum whenever employment law changes in your state, or when your company crosses a headcount threshold that triggers new requirements (many state and federal obligations kick in at specific employee counts). We flag these triggers so your policies don't quietly go stale.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Employee Policies & Workplace Compliance — FAQ" faqs={faqs} />;
}
