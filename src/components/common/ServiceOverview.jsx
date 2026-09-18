import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";
import SectionHeading from "@/components/common/SectionHeading";

// Shared "why this matters" section: a heading plus a checklist grid, with
// an optional stats bar underneath for pages that have numbers to show.
export default function ServiceOverview({ title, description, checklist, stats }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={title} description={description} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-keystone-mist p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-keystone-ink">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {stats && (
        <div className="mt-16">
          <AnimatedStatsBar stats={stats} />
        </div>
      )}
    </section>
  );
}
