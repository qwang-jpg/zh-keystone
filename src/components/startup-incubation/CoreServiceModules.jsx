import { motion } from "framer-motion";
import { Building2, FileCheck2, ScrollText, Landmark, Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const modules = [
  {
    icon: Building2,
    step: "01",
    title: "Entity Selection & Registration Strategy",
    description:
      "We help you determine the right entity type, registration state, and other key structuring decisions before anything gets filed.",
    items: [
      "1–2 consultations to confirm entity type and registration state",
      "\"Company Registration Info & Business Scope\" document",
      "Company name conflict search and availability confirmation",
    ],
  },
  {
    icon: FileCheck2,
    step: "02",
    title: "State Filing & Formation",
    description:
      "We prepare and submit your formation filing, track it through state approval, and confirm your company is officially formed.",
    items: [
      "State registration application preparation and filing",
      "Progress tracking through state approval",
      "Filing confirmation and approval documentation",
    ],
  },
  {
    icon: ScrollText,
    step: "03",
    title: "Formation & Governance Documents",
    description:
      "We prepare the legal documents that establish your company and govern how it's owned and run.",
    items: [
      "Articles of Organization / Articles of Incorporation",
      "Operating Agreement, Bylaws, or Shareholder Agreement",
      "Governance template matched to your entity type",
    ],
  },
  {
    icon: Landmark,
    step: "04",
    title: "Federal EIN & Company Records",
    description:
      "We file for your federal tax ID and organize your company's key information into one reference record.",
    items: [
      "Federal EIN application",
      "IRS EIN approval / confirmation document",
      "Consolidated company information file",
    ],
  },
];

export default function CoreServiceModules() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="Core Service Modules"
          description="Every module below covers a stage of forming your company, from choosing the right structure through the documents and records you'll rely on going forward."
          align="left"
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-7"
              >
                <span className="pointer-events-none absolute -right-3 -top-6 text-7xl font-bold text-keystone-ink/[0.04]">
                  {m.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-keystone-ink">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                <ul className="mt-4 space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
