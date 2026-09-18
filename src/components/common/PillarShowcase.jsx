import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// Interactive pillar carousel shared across pages: a numbered list of
// icon+title+meta rows (click or arrow through) and a right detail panel
// with the active pillar's full description and supporting facts. `items`
// is [{ icon, num, title, meta, panelTitle?, description, facts: [{ value,
// label }] }]. `panelTitle` lets the detail panel show a different heading
// than the list row; it falls back to `title` when omitted.
export default function PillarShowcase({ id, title, description, items, className }) {
  const [active, setActive] = useState(0);
  const pillar = items[active];
  const Icon = pillar.icon;

  const go = (dir) => setActive((i) => (i + dir + items.length) % items.length);

  return (
    <section id={id} className={cn("relative overflow-hidden bg-keystone-ink py-20 md:py-28", className)}>
      <div
        className="absolute -top-56 -right-36 h-[34rem] w-[34rem] rounded-full bg-keystone-teal/30 blur-[90px]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <SectionHeading
            title={title}
            description={description}
            align="left"
            light
            className="max-w-4xl"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="上一项"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="下一项"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col border-t border-white/10">
            {items.map((p, i) => {
              const PIcon = p.icon;
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-start gap-5 border-b border-white/10 px-5 py-5 text-left transition-colors",
                    isActive ? "bg-white/5" : "bg-transparent"
                  )}
                >
                  <span className={cn("pt-1 text-sm font-bold tracking-wide", isActive ? "text-keystone-green" : "text-white/40")}>
                    {p.num}
                  </span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        "block text-lg font-bold leading-snug tracking-tight",
                        isActive ? "text-white" : "text-white/70"
                      )}
                    >
                      {p.title}
                    </span>
                    {p.meta && (
                      <span className={cn("mt-1.5 block text-xs font-medium", isActive ? "text-white/70" : "text-white/60")}>
                        {p.meta}
                      </span>
                    )}
                    <span className="mt-3.5 block h-0.5 bg-white/10">
                      <span
                        className="block h-0.5 bg-keystone-gradient transition-[width] duration-300"
                        style={{ width: isActive ? "100%" : "0%" }}
                      />
                    </span>
                  </span>
                  <PIcon className={cn("mt-1 h-5 w-5 shrink-0", isActive ? "text-keystone-green" : "text-white/40")} />
                </button>
              );
            })}
          </div>

          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-keystone-gradient">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
              </div>
              <span className="text-5xl font-bold tracking-tight text-white/10">{pillar.num}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-white">
              {pillar.panelTitle ?? pillar.title}
            </h3>
            <p className="mt-3.5 leading-relaxed text-white/70">{pillar.description}</p>
            {pillar.facts && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {pillar.facts.map((f) => (
                  <div key={f.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-lg font-bold leading-snug tracking-tight text-keystone-green">
                      {f.value}
                    </div>
                    <div className="mt-1.5 text-xs leading-relaxed text-white/60">{f.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
