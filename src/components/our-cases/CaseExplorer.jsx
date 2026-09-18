import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CASES, GOALS, filterCases } from "@/components/our-cases/caseData";
import { cn } from "@/lib/utils";

function FilterPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-white text-keystone-ink hover:border-primary/50"
      )}
    >
      {label}
    </button>
  );
}

export function CaseCard({ c, onOpen }) {
  const durationLabel = c.outcome.startsWith("Selected") ? "Start → selection" : "Start → approval";

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-bold text-primary/25 md:text-3xl">{c.num}</span>
          <h3 className="text-lg font-bold text-keystone-ink md:text-xl">{c.name}</h3>
        </div>
        <span className="inline-flex shrink-0 items-center rounded-full bg-keystone-green/15 px-3 py-1 text-xs font-bold text-keystone-forest">
          {c.outcome}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold leading-snug text-keystone-ink md:text-base">{c.summary}</p>

      <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-border">
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">Lottery</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.attemptShort}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">{durationLabel}</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.duration}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">Fiscal year</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.season}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {c.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-border bg-keystone-mist px-2.5 py-1 text-xs font-medium text-keystone-ink/70"
          >
            {chip}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-keystone-ink"
      >
        Open full case
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </article>
  );
}

export function CaseDrawer({ caseData, onClose }) {
  const [full, setFull] = useState(false);

  return (
    <AnimatePresence>
      {caseData && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <motion.button
            type="button"
            aria-label="Close case"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-keystone-ink/50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 bg-keystone-ink px-6 py-6 md:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-keystone-green">
                    Case {caseData.num} · {caseData.season}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold text-white">{caseData.name}</h3>
                  <p className="mt-1 text-sm text-white/65">{caseData.meta}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseData.pathway.map((node) => (
                  <span
                    key={node}
                    className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="rounded-2xl border border-destructive/25 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-destructive">The problem</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caseData.problem}</p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-keystone-mist p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">Our plan</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caseData.plan}</p>
                <div className="mt-4 flex flex-col gap-2">
                  {caseData.timeline.map((t) => (
                    <div key={`${t.when}-${t.what}`} className="flex gap-3 text-sm leading-relaxed">
                      <span className="w-24 shrink-0 font-bold text-primary">{t.when}</span>
                      <span className="text-keystone-ink">{t.what}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-keystone-green/35 bg-keystone-green/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-keystone-forest">The result</p>
                <p className="mt-2 text-sm leading-relaxed text-keystone-ink">{caseData.result}</p>
              </div>

              <button
                type="button"
                onClick={() => setFull((f) => !f)}
                className="w-fit rounded-lg border border-border px-4 py-2 text-xs font-semibold text-keystone-ink transition-colors hover:border-primary hover:text-primary"
              >
                {full ? "Hide the full story" : "Read the full story"}
              </button>

              {full && (
                <div className="flex flex-col gap-3.5 border-t border-border pt-4">
                  {caseData.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function CaseExplorer() {
  const [goal, setGoal] = useState(null);
  const [openIdx, setOpenIdx] = useState(null);

  const list = filterCases(goal);
  const openCase = openIdx === null ? null : CASES[openIdx];

  return (
    <>
      <section className="border-b border-border bg-keystone-mist py-10 md:py-12">
        <div className="container">
          <h2 className="text-xl font-bold text-keystone-ink md:text-2xl">Find the case closest to your goal</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Pick your goal and we'll surface the clients who shared it.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {GOALS.map((l) => (
              <FilterPill
                key={l}
                label={l}
                active={goal === l}
                onClick={() => {
                  setGoal(goal === l ? null : l);
                  setOpenIdx(null);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((c) => (
              <CaseCard key={c.name} c={c} onOpen={() => setOpenIdx(CASES.indexOf(c))} />
            ))}
          </div>
        </div>
      </section>

      <CaseDrawer caseData={openCase} onClose={() => setOpenIdx(null)} />
    </>
  );
}
