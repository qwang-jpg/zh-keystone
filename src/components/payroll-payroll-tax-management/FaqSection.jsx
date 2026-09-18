import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "Do I need a separate payroll account in every state my employees work in?",
    answer:
      "Not a separate bank account, but you generally do need separate state payroll tax and unemployment insurance registrations for each state where an employee is physically working, including remote employees. We identify exactly which states apply to you.",
  },
  {
    question: "Can I run payroll myself once it's set up, or do you manage it ongoing?",
    answer:
      "We build and configure the system and the process, so you or your bookkeeper can run pay cycles going forward. Many clients also choose to keep us on for ongoing review, especially around tax filing deadlines and W-2 season.",
  },
  {
    question: "Why does this matter for STEM OPT or H-1B compliance?",
    answer:
      "STEM OPT and H-1B rules require a genuine, documentable employer-employee relationship, including comparable wages and proper compensation. Clean, compliant payroll records are the primary evidence USCIS and DSOs look at when confirming that relationship is real.",
  },
  {
    question: "How soon after company formation should payroll be set up?",
    answer:
      "As soon as you have a hiring date in mind. Payroll system activation and state registrations can take a few weeks to fully process, so we recommend starting well before your first employee's start date.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Payroll & Payroll Tax — FAQ" faqs={faqs} />;
}
