import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "Is E-Verify enrollment required for every employer?",
    answer:
      "Federal law requires it only for certain federal contractors and a handful of states. It becomes a hard requirement for any employer that wants to onboard a STEM OPT extension student, regardless of size or industry.",
  },
  {
    question: "How long does enrollment take?",
    answer:
      "Once your company information is ready, enrollment and orientation are typically completed within days. We recommend starting well before a STEM OPT student's expected start date so there's no scramble against a filing deadline.",
  },
  {
    question: "Does E-Verify enrollment cost anything?",
    answer:
      "Enrollment itself is free through the federal E-Verify program. Our fee covers preparing your submission correctly, configuring your account, and getting your Company ID issued without back-and-forth corrections.",
  },
  {
    question: "Once we're enrolled, do we have to run every new hire through E-Verify?",
    answer:
      "Enrolled employers are generally expected to use E-Verify consistently for new hires going forward, not selectively. We walk you through what that means for your day-to-day hiring process once your account is active.",
  },
  {
    question: "Is state new hire reporting the same thing as E-Verify?",
    answer:
      "No, they're separate systems. E-Verify confirms work authorization; new hire reporting sends basic information about every new employee to a state directory, mainly used for child support enforcement, and nearly every state requires it regardless of whether you use E-Verify. We set up both as part of this service.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="E-Verify Enrollment — FAQ" faqs={faqs} />;
}
