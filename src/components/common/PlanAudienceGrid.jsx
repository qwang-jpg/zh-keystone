import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// Shared "who this is for" audience grid used by both the H-1B Infinity Plan
// and STEM OPT Ready Plan pages: a left-aligned heading over a 2-column card
// grid, each card ending in a CTA link, with a closing note below the grid.
// An odd-length `items` list would otherwise leave a lone half-width card
// dangling in the last row, so that last card spans the full row instead
// (laid out horizontally on larger screens) once there's no partner for it.
export default function PlanAudienceGrid({ title, items, ctaLabel, bottomText }) {
  const isOdd = items.length % 2 === 1;

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={title} className="max-w-3xl" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {items.map((a, i) => {
            const isLastOdd = isOdd && i === items.length - 1;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn("flex flex-col bg-white p-7", isLastOdd && "sm:col-span-2 sm:flex-row sm:items-center sm:gap-7")}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/10">
                  <a.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
                </div>
                <div className={cn("mt-4 flex-1", isLastOdd && "sm:mt-0")}>
                  <h3 className="text-base font-bold leading-snug text-keystone-ink">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </div>
                <Link
                  to="/contact"
                  className={cn("mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary", isLastOdd && "sm:mt-0")}
                >
                  {ctaLabel}
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {bottomText && (
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{bottomText}</p>
        )}
      </div>
    </section>
  );
}
