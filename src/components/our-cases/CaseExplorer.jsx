import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CASES, GOALS, filterCases } from "@/components/our-cases/caseData";
import { Button } from "@/components/ui/button";
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

function CaseCard({ c, onOpen }) {
  const durationLabel = c.outcome.includes("中签") ? "签约 → 中签" : "签约 → 获批";

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-bold text-primary/25 md:text-3xl">{c.num}</span>
          <h3 className="text-lg font-bold text-keystone-ink md:text-xl">{c.name}</h3>
        </div>
        <span className="inline-flex shrink-0 items-center rounded-full bg-keystone-green/15 px-3 py-1 text-xs font-bold text-keystone-forest">
          {c.outcome}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold leading-snug text-keystone-ink md:text-base">{c.summary}</p>

      <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">抽签结果</div>
          <div className="mt-0.5 break-words text-sm font-bold text-keystone-ink">{c.attemptShort}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">{durationLabel}</div>
          <div className="mt-0.5 break-words text-sm font-bold text-keystone-ink">{c.duration}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">财年</div>
          <div className="mt-0.5 break-words text-sm font-bold text-keystone-ink">{c.season}</div>
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

      <Button type="button" onClick={onOpen} size="sm" className="mt-5 w-fit gap-1.5">
        查看完整案例
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </article>
  );
}

function CaseDrawer({ caseData, onClose }) {
  // Tracks which case has its full story expanded, so opening a different
  // case always starts collapsed (the drawer itself stays mounted).
  const [fullFor, setFullFor] = useState(null);
  const full = caseData !== null && fullFor === caseData.num;
  const closeRef = useRef(null);

  // Modal behavior while open: Escape closes, the page behind doesn't
  // scroll, and focus moves into the drawer.
  useEffect(() => {
    if (!caseData) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [caseData, onClose]);

  return (
    <AnimatePresence>
      {caseData && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <motion.button
            type="button"
            aria-label="关闭案例"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-keystone-ink/50"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-drawer-title"
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
                    案例{caseData.num} · {caseData.season}
                  </p>
                  <h3 id="case-drawer-title" className="mt-1.5 text-2xl font-bold text-white">
                    {caseData.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/65">{caseData.meta}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="关闭案例"
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
                <p className="text-xs font-bold uppercase tracking-wide text-destructive">面临的问题</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caseData.problem}</p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-keystone-mist p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">我们的方案</p>
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
                <p className="text-xs font-bold uppercase tracking-wide text-keystone-forest">最终结果</p>
                <p className="mt-2 text-sm leading-relaxed text-keystone-ink">{caseData.result}</p>
              </div>

              {/* Not every case has a long-form write-up (e.g. Client A). */}
              {caseData.paragraphs?.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => setFullFor(full ? null : caseData.num)}
                    className="w-fit rounded-lg border border-border px-4 py-2 text-xs font-semibold text-keystone-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {full ? "收起完整故事" : "查看完整故事"}
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
                </>
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
  const closeDrawer = useCallback(() => setOpenIdx(null), []);

  const list = filterCases(goal);
  const openCase = openIdx === null ? null : CASES[openIdx];

  return (
    <>
      <section className="border-b border-border bg-keystone-mist py-10 md:py-12">
        <div className="container">
          <h2 className="text-xl font-bold text-keystone-ink md:text-2xl">查找与您目标最相近的案例</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            选择您的目标，我们将为您展示有相同经历的客户案例。
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

      <CaseDrawer caseData={openCase} onClose={closeDrawer} />
    </>
  );
}
