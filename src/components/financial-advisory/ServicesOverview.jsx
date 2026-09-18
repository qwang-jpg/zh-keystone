import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const checklist = [
  "A basic bookkeeping and financial management framework built for how startups actually operate",
  "Clarity on which annual tax filings and company renewals actually apply to you",
  "A compliance calendar with deadlines mapped out in advance, not discovered late",
  "Financial recordkeeping habits that hold up if you're ever audited or reviewed",
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Business Tax & Financial Management" />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base font-medium italic text-primary">
            Every Company Needs a Financial Backbone from Day One
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A newly formed company doesn&rsquo;t come with a finance function built in.
            Without one, tax deadlines get missed, records go missing, and company renewals
            lapse quietly until they become a real problem. Keystone Strategies builds the{" "}
            <strong className="text-keystone-ink">basic financial management framework</strong>{" "}
            your company needs from the start, then organizes your annual tax filing and
            company renewal requirements into one clear compliance calendar.
          </p>
          <p className="mt-5 font-semibold text-keystone-ink">
            Our services go beyond a checklist and include:
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-keystone-mist p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-keystone-ink">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
