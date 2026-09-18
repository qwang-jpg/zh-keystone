import { motion } from "framer-motion";
import { Target, LifeBuoy, UserCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Outcome-Driven Protection",
    description:
      "Our service is structured around your overall STEM OPT outcome rather than disconnected administrative tasks, with commitments documented in the service agreement.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Status Support",
    description:
      "STEM OPT is an ongoing status, not a single event. Support extends from employer readiness through application preparation, reporting, and employer changes.",
  },
  {
    icon: UserCheck,
    title: "Proven Experience",
    description:
      "Long-term U.S. education and career experience combined with practical experience supporting international, employer-based immigration strategies.",
  },
];

export default function CoreAdvantages() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-44 -right-32 h-[34rem] w-[34rem] rounded-full bg-keystone-teal/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container relative">
        <SectionHeading
          align="left"
          light
          title="Built to Secure and Sustain Your STEM OPT Status"
          className="max-w-2xl mx-0"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-keystone-forest p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-keystone-gradient">
                <p.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
