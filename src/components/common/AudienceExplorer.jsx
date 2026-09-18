import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// Interactive audience/status explorer shared across pages: a row of
// icon+label tabs (click through) above a detail panel with one or two
// badges, body copy, an optional grid of "start here" steps, and a CTA
// (with an optional secondary CTA). `items` is [{ label, icon, badgeLabel,
// badgeValue, secondaryBadgeLabel?, secondaryBadgeValue?, heading, body,
// cta, ctaHref?, secondaryCta?, secondaryHref?, steps?: [{ label,
// description, href }] }]. The second badge only renders when both of its
// fields are provided. Steps are omitted entirely when an item has none.
// `stepsLabel` is an optional heading above the steps grid, omitted by
// callers that don't want one.
export default function AudienceExplorer({
  id,
  title,
  description,
  items,
  stepsLabel,
  className,
}) {
  const [active, setActive] = useState(0);
  const item = items[active];
  const hasSteps = item.steps && item.steps.length > 0;

  return (
    <section id={id} className={cn("border-t border-border bg-keystone-mist py-20 md:py-28", className)}>
      <div className="container">
        <SectionHeading
          title={title}
          description={description}
          align="left"
          className="max-w-2xl"
        />

        <div className="mt-7 flex flex-wrap gap-2.5">
          {items.map((it, i) => {
            const Icon = it.icon;
            const isActive = i === active;
            return (
              <button
                key={it.label}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-keystone-ink hover:border-primary/40"
                )}
              >
                <Icon className="h-4 w-4" />
                {it.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-2xl border border-border bg-white p-7 shadow-lg md:p-9"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-snug text-keystone-ink">{item.heading}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border border-border bg-keystone-mist px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.badgeLabel}</p>
                <p className="mt-1.5 text-xl font-bold text-keystone-ink">{item.badgeValue}</p>
              </div>
              {item.secondaryBadgeLabel && item.secondaryBadgeValue && (
                <div className="rounded-2xl border border-border bg-keystone-mist px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.secondaryBadgeLabel}
                  </p>
                  <p className="mt-1.5 text-xl font-bold text-keystone-ink">{item.secondaryBadgeValue}</p>
                </div>
              )}
            </div>
          </div>

          {hasSteps && (
            <>
              {stepsLabel && (
                <p className="mt-7 text-xs font-bold uppercase tracking-wide text-muted-foreground">{stepsLabel}</p>
              )}
              <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-3", stepsLabel ? "mt-3" : "mt-7")}>
                {item.steps.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex flex-col rounded-2xl border border-border bg-keystone-mist p-5 transition-transform hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</span>
                    <p className="mt-2.5 text-sm font-bold leading-snug text-keystone-ink">{step.label}</p>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                    {step.href && (
                      <Link to={step.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Learn more
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={item.ctaHref ?? "/contact"}>
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {item.secondaryCta && (
              <Button asChild size="lg" variant="outline">
                <Link to={item.secondaryHref ?? "/our-cases"}>
                  {item.secondaryCta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
