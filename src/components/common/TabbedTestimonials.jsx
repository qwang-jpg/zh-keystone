import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const initials = (name) => name.split(" ").map((w) => w[0]).join("");

// Interactive tabbed testimonials shared across pages: a row of avatar/name
// tabs (click or arrow through) above a detail panel with the active
// story's headline, quote, and body. `stories` is
// [{ name, role, headline, quote?, body }]. An optional `renderSide({ index,
// total })` adds a side panel next to the detail card (e.g. a story counter
// or a related-content link) without affecting callers that omit it.
export default function TabbedTestimonials({ title, description, stories, renderSide, className }) {
  const [index, setIndex] = useState(0);
  const active = stories[index];

  const go = (dir) => setIndex((i) => (i + dir + stories.length) % stories.length);

  return (
    <section className={cn("bg-white py-20 md:py-28", className)}>
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <SectionHeading title={title} description={description} align="left" className="max-w-2xl" />
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="上一条客户评价"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="下一条客户评价"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stories.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.name}
                onClick={() => setIndex(i)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  isActive ? "border-keystone-ink bg-keystone-ink" : "border-border bg-white"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-keystone-green text-keystone-ink" : "bg-keystone-mist text-primary"
                    )}
                  >
                    {initials(s.name)}
                  </span>
                  <span className="min-w-0">
                    <span className={cn("block truncate text-sm font-bold", isActive ? "text-white" : "text-keystone-ink")}>
                      {s.name}
                    </span>
                    <span className={cn("block truncate text-xs", isActive ? "text-white/60" : "text-muted-foreground")}>
                      {s.role}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={cn("mt-5 grid grid-cols-1 gap-5", renderSide && "lg:grid-cols-[1fr_320px]")}>
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-border bg-keystone-mist p-8 md:p-10"
          >
            <Quote className="h-7 w-7 text-primary/35" />
            <h3 className="mt-4 text-xl font-bold leading-snug text-keystone-ink md:text-2xl">{active.headline}</h3>
            {active.quote && (
              <p className="mt-4 text-lg font-medium italic text-primary">&ldquo;{active.quote}&rdquo;</p>
            )}
            <p className="mt-4 leading-relaxed text-muted-foreground">{active.body}</p>
            <p className="mt-6 text-sm font-bold text-keystone-ink">{active.name}</p>
            <p className="text-xs text-muted-foreground">{active.role}</p>
          </motion.div>
          {renderSide && (
            <div className="flex flex-col gap-3">{renderSide({ index, total: stories.length })}</div>
          )}
        </div>
      </div>
    </section>
  );
}
