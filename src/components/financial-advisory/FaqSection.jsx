import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    question: "Are you a CPA firm? Can you file taxes for me?",
    answer:
      "We are not a CPA firm. Keystone provides strategic financial and tax advisory services based on your company's development stage and structure. We help identify risks, design frameworks, and connect you with licensed CPA partners when needed for tax filings and compliance.",
  },
  {
    question: "If my company already has an accountant, do I still need your services?",
    answer:
      "We step in before accounting operations, building a strategic financial framework from a compliance and immigration planning perspective. Our role complements your accountant's, supporting both business growth and legal compliance.",
  },
  {
    question: "At what stage should I consider financial strategy consulting?",
    answer:
      "The earlier, the better. We provide tailored support before, during, and after company formation to help you avoid early-stage risks and save significant future adjustment costs.",
  },
  {
    question: "Is this a one-time service or long-term collaboration?",
    answer:
      "We offer both one-time strategic advisory and long-term partnerships. Many clients keep us on for ongoing bookkeeping oversight and annual compliance calendar management as their business grows.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Keystone Strategies Financial Advisory — FAQ"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">
                    {i + 1}. {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-primary" />
                  )}
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
