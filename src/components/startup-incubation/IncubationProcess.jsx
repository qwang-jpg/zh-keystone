import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    title: "Entity Strategy Consultation",
    description:
      "We review your goals, industry, and ownership plans to recommend the right entity type and registration state before anything is filed.",
    items: [
      "Entity type and registration state recommendation",
      "\"Company Registration Info & Business Scope\" document",
      "Company name conflict search and availability confirmation",
    ],
  },
  {
    title: "State Filing & Approval",
    description:
      "We prepare and submit your formation filing with the state and track it through to approval.",
    items: [
      "Formation application preparation and submission",
      "Ongoing tracking of state review status",
      "Filing confirmation once your entity is officially formed",
    ],
  },
  {
    title: "Governance Documentation",
    description:
      "We draft the documents that establish how your company is owned, managed, and operated.",
    items: [
      "Articles of Organization / Incorporation",
      "Operating Agreement, Bylaws, or Shareholder Agreement",
      "Ownership and management structure documented in writing",
    ],
  },
  {
    title: "EIN & Company Records",
    description:
      "We secure your federal tax ID and consolidate your formation records into one reference file.",
    items: [
      "Federal EIN application and approval",
      "Company information file assembled for future use",
      "Ready-to-hand-off records for your bank, accountant, or attorney",
    ],
  },
];

export default function IncubationProcess() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="Company Formation Process"
          description="From choosing the right structure to a fully documented, EIN-ready company, here's how each engagement moves forward."
          align="left"
          className="max-w-2xl"
        />

        <div className="relative mt-14">
          <div className="absolute left-5 top-1 bottom-1 w-px bg-border" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-keystone-ink text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-border bg-white px-6 py-5">
                <h3 className="text-base font-bold leading-snug text-keystone-ink md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-3">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-snug text-keystone-ink/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
