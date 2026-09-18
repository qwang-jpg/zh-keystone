import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// Shared accordion FAQ layout reused across service pages; each page
// supplies its own heading and question/answer list.
export default function ServiceFaqSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={title} />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-border bg-keystone-mist">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">{faq.question}</span>
                  <span className="shrink-0 text-lg font-bold text-primary">{isOpen ? "−" : "+"}</span>
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
