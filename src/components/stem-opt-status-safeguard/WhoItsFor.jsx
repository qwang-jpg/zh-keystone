import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "Companies About to Hire a STEM OPT Student",
    description:
      "You have a genuine role to fill and want the job description, supervision structure, and I-983 groundwork built correctly before you extend an offer.",
    cta: "Book a Compliance Consultation",
  },
  {
    number: "02",
    title: "Founders Structuring Their Own Company as a STEM OPT Employer",
    description:
      "You're forming or already run a company and need the employer side of your own STEM OPT extension to be genuinely compliant, not just filed.",
    cta: "Book a Founder Employer Consultation",
  },
  {
    number: "03",
    title: "Employers with an Existing STEM OPT Employee Facing a Review or Audit",
    description:
      "You need to confirm your current job duties, supervision records, and documentation would hold up under DSO or USCIS scrutiny.",
    cta: "Book a Compliance Review",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Who Is STEM OPT Employer Compliance Training For?" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
