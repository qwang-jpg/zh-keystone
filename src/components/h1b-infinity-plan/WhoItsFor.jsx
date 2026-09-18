import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "Graduating and Planning Your Next Step",
    description:
      "Graduating soon and facing both employment and immigration pressure, but determined to stay and build a future in the U.S.",
  },
  {
    number: "02",
    title: "OPT / STEM OPT Holders Laid Off or Without a Sponsor",
    description:
      "For those laid off during OPT/STEM OPT or unable to secure H-1B sponsorship, looking for a compliant solution to maintain status.",
  },
  {
    number: "03",
    title: "H-1B Holders Facing a Layoff",
    description:
      "For H-1B holders who have been laid off and are entering their grace period, needing a fast, legal pathway to maintain status and prepare for the next step.",
  },
  {
    number: "04",
    title: "Day-1 CPT Holders Who Lost or Can’t Secure a Sponsor",
    description:
      "For individuals in the Day-1 CPT stage who lost their sponsor or can’t secure one, and need a sustainable legal solution to avoid status risks.",
  },
  {
    number: "05",
    title: "Founders Ready to Build a Business",
    description:
      "For those ready to launch a startup but struggling with maintaining legal status, seeking a compliant structure to stay and grow their business in the U.S.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Who It’s Designed For" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-border bg-keystone-mist p-7"
            >
              <span className="text-3xl font-bold text-primary/30">{a.number}</span>
              <h3 className="mt-3 text-base font-bold leading-snug text-keystone-ink">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl bg-keystone-ink px-8 py-12 text-center">
          <h3 className="max-w-xl text-2xl font-bold leading-snug text-white md:text-3xl">
            Turn Your Business Idea
            <br />
            Into a Path Forward.
          </h3>
          <Button
            asChild
            size="lg"
            className="h-auto whitespace-normal bg-white py-3 text-center text-keystone-ink hover:bg-white/90"
          >
            <Link to="/contact">
              Learn About the H-1B Infinity Plan
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
