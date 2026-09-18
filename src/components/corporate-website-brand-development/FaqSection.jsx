import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "How long does it take to design and launch a website?",
    answer:
      "Timelines depend on scope and how quickly content and feedback come back to us, but a basic company site typically moves from kickoff to launch within a few weeks once your brand direction is approved.",
  },
  {
    question: "What if I already have a logo or brand direction I like?",
    answer:
      "We're happy to build around an existing logo or brand direction. The logo design and revision rounds apply if you're starting from scratch or want a refresh.",
  },
  {
    question: "Do you write the website content, or do I need to provide it?",
    answer:
      "We handle full content planning and production for your site and Company Profile, working from an intake conversation about your business, services, and background, so you don't have to write it yourself.",
  },
  {
    question: "Will the website hold up for an immigration petition review?",
    answer:
      "We build sites to clearly and accurately reflect your company's real business scope and operations, which is exactly what stands up well when a website is reviewed as supporting evidence.",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="Website & Brand Development — FAQ" faqs={faqs} />;
}
