import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "About to Start or Already on OPT Without a Job in Your Field",
    description:
      "Your first year of OPT is about to begin or already underway, and you urgently need a genuine job that meets OPT standards — with reasonable duties closely matched to your field of study — to avoid an unemployment-period crisis.",
    cta: "Book a Job Placement Consultation",
  },
  {
    number: "02",
    title: "Laid Off or Had Your Contract Ended During OPT — Racing the Unemployment Clock",
    description: "You've been laid off or dismissed during OPT and urgently need a new position or interim solution to keep your cumulative unemployment time within the policy limit and maintain lawful status.",
    cta: "Book an Unemployment Deadline Rescue",
  },
  {
    number: "03",
    title: "Planning a STEM OPT Application, But Your Current Employer Isn't Compliant",
    description: "You're planning to apply for a STEM OPT extension, but your OPT employer doesn't meet the requirements — putting your future extension application at risk of running into obstacles and jeopardizing your status.",
    cta: "Book a New Employer Consultation",
  },
  {
    number: "04",
    title: "Planning to Stay in the U.S. Long Term and Need Expert Guidance",
    description: "You're looking for a systematic plan that covers status continuity, H-1B sponsor eligibility, and immigration pathway planning — ensuring key deadlines line up smoothly with policy windows.",
    cta: "Book a Long-Term Planning Consultation",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Who Is the OPT Job Placement Assurance Plan For?" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-white p-8"
            >
              <span className="text-sm font-bold text-primary/50">{a.number}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-keystone-ink">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <Button asChild variant="outline" className="mt-6 w-fit">
                <Link to="/contact">{a.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
