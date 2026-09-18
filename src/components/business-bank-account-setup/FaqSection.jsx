import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "Do I need to be physically in the U.S. to open a business bank account?",
    answer:
      "Not always. Several major U.S. banks support fully remote onboarding for founders outside the country, provided your formation documents, EIN, and ID verification are in order. We help you pick a bank that matches your situation and walk you through whichever path applies.",
  },
  {
    question: "What do I need before the account-opening call?",
    answer:
      "Typically your Articles of Organization/Incorporation, your EIN confirmation letter, ownership and management information, and a government-issued ID for each signer. We confirm the exact list with your chosen bank and help you gather everything ahead of time.",
  },
  {
    question: "How long does account opening usually take?",
    answer:
      "Once your documents are ready, most business accounts open within one scheduled call with a bank relationship manager. Verification and card/check issuance afterward can take a few additional business days depending on the bank.",
  },
  {
    question: "Is the new-account cash bonus guaranteed?",
    answer:
      "Bonus offers and qualifying requirements are set by the bank and change over time. We check current offers when we set up your account and make sure you understand and meet the requirements, but the bank makes the final determination.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Business Banking Setup — FAQ" faqs={faqs} />;
}
