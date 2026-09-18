import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "What is a registered agent, and do I need one?",
    answer:
      "A registered agent is the person or company designated to receive legal notices and state correspondence on your company's behalf in its state of formation. Most states require one, and it's especially important if you don't have a physical presence there. We handle this as part of your governance setup.",
  },
  {
    question: "What happens if I miss an annual report or franchise tax deadline?",
    answer:
      "Missing a state's annual report or franchise tax deadline can put your company into bad standing, which can block financing, delay a visa petition, or even lead to administrative dissolution if left too long. We track these deadlines for you and send reminders well ahead of time.",
  },
  {
    question: "Do I need to update my bylaws or operating agreement after formation?",
    answer:
      "Yes, whenever ownership, management, or your business scope changes materially, your governance documents should be updated and the decision documented with a resolution. We review these documents periodically and help you keep them aligned with how the company actually operates.",
  },
  {
    question: "Do I need a physical office for my operating address?",
    answer:
      "Not necessarily. Many companies use a registered agent or virtual mailbox address that satisfies state and federal requirements. We help you choose an option that fits your situation and update your filings accordingly.",
  },
  {
    question: "Are the contract and invoice templates customized to my business?",
    answer:
      "We provide our standard, attorney-reviewed templates for a Client Service Agreement, invoices, and employee work records, adapted to your entity type and industry so they're ready to use, not generic boilerplate.",
  },
  {
    question: "Is Workers' Compensation Insurance legally required?",
    answer:
      "Requirements vary by state and by whether you have employees, but most states require coverage once you hire your first employee. We help you understand your state's threshold and connect you with a suitable carrier.",
  },
  {
    question: "What happens if I don't keep my government filings updated?",
    answer:
      "Outdated company information with the state or IRS can cause missed notices, lapsed good standing, and complications during a future visa petition or bank review. We help you keep records current as your company changes.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Business Operations Setup — FAQ" faqs={faqs} />;
}
