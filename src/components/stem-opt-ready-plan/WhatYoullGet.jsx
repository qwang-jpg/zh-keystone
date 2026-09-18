import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const tabs = [
  {
    title: "Employer Setup & Eligibility",
    intro: "Build the employer foundation required to support STEM OPT employment.",
    items: [
      "Company and employer structure",
      "EIN and employer registration support",
      "E-Verify enrollment support",
      "Business infrastructure setup",
      "Employer compliance framework",
      "Operational readiness guidance",
    ],
    resultLabel: "The Objective",
    result:
      "Not simply to create an entity, but to establish an employer structure capable of supporting a legitimate employment relationship.",
  },
  {
    title: "Employment & Supervision Structure",
    intro: "Turn the employer into a functioning STEM OPT employment environment.",
    items: [
      "Degree-to-role alignment",
      "Position and responsibility design",
      "Supervisor structure",
      "Employment documentation",
      "Onboarding framework",
      "Payroll and employment-process guidance",
      "Training and performance-management framework",
    ],
    resultLabel: "The Objective",
    result: "Every component should reflect how the employee will actually work, develop, and be supervised.",
  },
  {
    title: "STEM OPT Application Support",
    intro: "Translate the employment structure into a clear and consistent STEM OPT application.",
    items: [
      "Form I-983 Training Plan support",
      "Degree-to-position alignment",
      "Training goals and objectives",
      "Supervision and evaluation framework",
      "Application document checklist",
      "Form I-765 preparation guidance",
      "School and DSO process guidance",
      "Pre-submission consistency review",
    ],
    resultLabel: "The Objective",
    result: "The application is the documentation of the structure behind it — not a substitute for that structure.",
  },
  {
    title: "Ongoing Status & Employer Compliance",
    intro: "Continue protecting the structure after STEM OPT begins.",
    items: [
      "Employer reporting guidance",
      "Material-change guidance",
      "I-983 evaluation support",
      "Employment documentation guidance",
      "Payroll and operational compliance guidance",
      "Employer-change support",
      "Ongoing status planning",
      "Future immigration strategy",
    ],
    resultLabel: "The Objective",
    result: "Because STEM OPT compliance does not end when the application is filed.",
  },
];

export default function WhatYoullGet() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="One Program. A Complete STEM OPT Support Framework."
          description="Keystone coordinates the employer, employment, application, and compliance components needed to build a sustainable STEM OPT solution."
        />

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-border">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={cn(
                "-mb-px border-b-2 py-3 text-sm font-semibold transition-colors",
                i === active
                  ? "border-primary text-keystone-ink"
                  : "border-transparent text-muted-foreground hover:text-keystone-ink"
              )}
            >
              {t.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-keystone-ink md:text-2xl">{tab.title}</h3>
              <p className="mt-2 text-sm font-semibold text-primary">{tab.intro}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tab.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-keystone-green" strokeWidth={2.25} />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.12)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{tab.resultLabel}</h4>
                <p className="mt-2 text-sm leading-relaxed text-keystone-ink/70">{tab.result}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
