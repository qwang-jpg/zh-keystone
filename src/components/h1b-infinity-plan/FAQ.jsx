import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    "q": "What does a company need for an H-1B petition?",
    "a": "The business must support a genuine job offer and demonstrate the operations, work, and resources behind the proposed role. We help organize business plans, formation records, and financial documentation so immigration counsel can assess the company and petition."
  },
  {
    "q": "Can I transfer an H-1B sponsored by my own company to another employer?",
    "a": "Yes, if the applicable H-1B transfer requirements are met. A new employer must follow the appropriate petition process. We can help coordinate the company and payroll records your attorney needs."
  },
  {
    "q": "Does an owner-sponsored H-1B petition use the annual cap?",
    "a": "Owning the petitioning company does not itself make a petition cap-exempt. Cap-subject petitions follow the applicable annual registration and selection process; counsel should assess whether an exemption applies to your case."
  },
  {
    "q": "How should the role relate to my education and business?",
    "a": "The offered position must qualify as a specialty occupation, and your qualifications must fit that position. Your business activities and supporting documents should explain the genuine need for the specialized work. We coordinate role and business documentation for attorney review."
  },
  {
    "q": "Does the company have to hire other employees?",
    "a": "There is no blanket requirement to hire additional employees solely because the H-1B beneficiary owns the company. The business still needs a credible operating plan and the ability to meet its employment and wage obligations. Your specific structure should be reviewed with counsel."
  },
  {
    "q": "What if USCIS sends a request for evidence (RFE)?",
    "a": "An RFE asks for additional information and is not a denial. Questions may concern status history, business operations, or the need for the position. We help organize company records and coordinate with your attorney on the response."
  },
  {
    "q": "Do I need an existing business idea to join the plan?",
    "a": "You do not need a fully developed business plan before the first assessment. We help explore a viable direction based on your background and goals. The plan requires a genuine business and a role that meets the relevant requirements."
  },
  {
    "q": "What happens if I am not selected in the first registration cycle?",
    "a": "Your company may prepare for a later registration cycle if it and you remain eligible. Maintaining lawful status and work authorization is a separate requirement; registration or company ownership does not extend either. We help you review the next steps with immigration counsel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="h1b-faq" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="H-1B Self-Employment FAQ"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-keystone-mist"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink">{item.q}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-primary transition-transform",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Have more questions? Get answers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
