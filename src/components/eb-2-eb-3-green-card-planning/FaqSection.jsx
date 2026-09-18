import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "What's the actual difference between EB-2 and EB-3?",
    answer:
      "EB-2 generally requires an advanced degree (or a bachelor's degree plus five years of progressive experience) or exceptional ability in the field. EB-3 covers skilled workers, professionals with a bachelor's degree, and other workers. The right category depends on your specific credentials and the job's actual requirements, not just your job title.",
  },
  {
    question: "Can my own company sponsor me for a green card the way it sponsored my H-1B?",
    answer:
      "Yes, a founder-led company can sponsor an EB-2 or EB-3 petition, but the employer side needs to show the same things a third-party employer would: a genuine job opening, an arm's-length hiring process where PERM applies, and documented ability to pay the offered wage. We structure this specifically for founder-led sponsors.",
  },
  {
    question: "Do all EB-2 and EB-3 cases require PERM labor certification?",
    answer:
      "Most do. A limited set of EB-2 cases (National Interest Waiver) can skip PERM, but that path has its own, higher bar to clear. We help you understand which route actually fits your situation before committing to one.",
  },
  {
    question: "How long does the EB-2 / EB-3 process typically take?",
    answer:
      "It varies significantly by category, country of birth, and current visa bulletin backlogs, and can run from roughly one to several years across PERM, the I-140, and the final adjustment of status or consular stage. We build a realistic timeline for your specific case rather than a generic estimate.",
  },
  {
    question: "Should I start EB-2 / EB-3 planning while I'm still on H-1B?",
    answer:
      "Generally yes. Starting the employer and position groundwork early, often while H-1B time remains, gives you room to correct course if an issue comes up and keeps your long-term status timeline from becoming a scramble.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="EB-2 / EB-3 Green Card Planning — FAQ" faqs={faqs} />;
}
