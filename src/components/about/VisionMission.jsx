import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Globe2, Layers, Route, ShieldCheck, Sparkles, TrendingUp, Unlock } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const VM = [
  {
    label: "Vision",
    headline: "Remove the systemic barriers, not just the paperwork",
    body: "Keystone Strategies is committed to empowering international entrepreneurs and professionals to overcome systemic barriers and achieve transformative goals through innovative and personalized strategies.",
    points: [
      { icon: Compass, title: "Personalized strategy", body: "No templates — each pathway is designed around one client's goal." },
      { icon: Unlock, title: "Barriers removed", body: "We work on the structure behind the filing, not only the filing." },
      { icon: Sparkles, title: "Transformative goals", body: "Ambition treated as a plan, with the steps written down." },
      { icon: Globe2, title: "Global talent", body: "Built for professionals and founders moving across borders." },
    ],
  },
  {
    label: "Mission",
    headline: "Stable, long-term trajectories in complex regulatory environments",
    body: "We provide systematic, specialized, and tailored strategic solutions for global talents, businesses, and organizations, bridging critical pathways across immigration, employment, compliance, and growth. Our mission is to help clients build stable, long-term trajectories in complex regulatory environments.",
    points: [
      { icon: Layers, title: "Systematic", body: "Immigration, entity, payroll, and tax handled as one structure." },
      { icon: ShieldCheck, title: "Compliance-first", body: "Every deliverable built to stand up to scrutiny." },
      { icon: Route, title: "Bridged pathways", body: "Status, employment, and growth planned on one timeline." },
      { icon: TrendingUp, title: "Long-term", body: "Engagements that continue past the first approval." },
    ],
  },
];

export default function VisionMission() {
  const [active, setActive] = useState(0);
  const current = VM[active];

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="Our Vision & Mission" align="left" className="max-w-none" />
          <div className="flex gap-2 rounded-xl border border-border bg-white p-1.5">
            {VM.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
                  i === active ? "bg-keystone-ink text-white" : "text-keystone-ink/60 hover:text-keystone-ink"
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative min-h-[260px] overflow-hidden rounded-2xl bg-keystone-ink p-10"
          >
            <div className="absolute inset-0 bg-keystone-gradient opacity-15" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-keystone-green">
                {current.label}
              </span>
              <h3 className="mt-5 text-2xl font-bold leading-snug text-white md:text-[28px]">{current.headline}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{current.body}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 content-start gap-4 sm:grid-cols-2">
            {current.points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/45"
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.9} />
                  <p className="mt-3.5 text-sm font-bold leading-snug text-keystone-ink">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
