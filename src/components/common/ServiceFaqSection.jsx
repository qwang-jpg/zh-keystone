import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// The single FAQ accordion design reused by every service and plan page —
// single column, left-accent highlight, one open item at a time. Answers
// may be a string, an array of paragraphs, or a JSX node (for answers that
// already contain lists or links).
export default function ServiceFaqSection({
  title,
  description,
  faqs,
  background = "white",
  ctaLabel,
  ctaTo = "/contact",
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const mist = background === "mist";

  return (
    <section className={cn("py-20 md:py-28", mist ? "bg-keystone-mist" : "bg-white")}>
      <div className="container">
        <SectionHeading align="left" title={title} description={description} />

        <div className="mt-12 grid grid-cols-1 gap-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border-l-[3px] transition-colors",
                  mist ? "bg-white" : "bg-keystone-mist",
                  isOpen ? "border-l-primary" : "border-l-transparent"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-primary transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="space-y-3 px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {Array.isArray(faq.answer)
                      ? faq.answer.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                      : typeof faq.answer === "string"
                      ? <p>{faq.answer}</p>
                      : faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {ctaLabel && (
          <div className="mt-10 text-center">
            <Link to={ctaTo} className="text-sm font-semibold text-primary hover:underline">
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
