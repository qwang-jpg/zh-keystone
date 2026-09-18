import { motion } from "framer-motion";
import { ShieldCheck, Zap, Infinity as InfinityIcon } from "lucide-react";

const props = [
  {
    icon: ShieldCheck,
    title: "Plan Ahead for Changes in Status",
    description: "Build the company foundation early and prepare for layoffs, unemployment, or an employer's decision not to sponsor. We connect your business plan with your OPT, STEM OPT, or H-1B timeline.",
  },
  {
    icon: Zap,
    title: "One Team, From Setup to Operations",
    description: "Coordinate company registration, EIN applications, remote banking, your website, and a company handbook in one place. Eligible company registrations can be completed in as little as 24 hours; agency and bank processing times vary.",
  },
  {
    icon: InfinityIcon,
    title: "A Foundation for Future Opportunities",
    description: "Reduce reliance on a traditional employer and prepare for future H-1B registration cycles when eligible. We help align ongoing operations with your longer-term immigration goals.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-keystone-mist p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-keystone-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
