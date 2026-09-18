import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Role & Background Review",
    description:
      "We review the employee's STEM degree and the company's actual business so any job duties we design are genuinely, not superficially, connected.",
  },
  {
    number: "02",
    title: "Job Description Design",
    description:
      "We draft the job title and duties, then finalize a \"Job Description\" document that supports the I-983 training plan and any future immigration filing.",
  },
  {
    number: "03",
    title: "Supervision Structure Setup",
    description:
      "We designate a qualified supervisor and define the management structure needed to show real, ongoing oversight of the employee's work.",
  },
  {
    number: "04",
    title: "Ongoing Status Maintenance",
    description:
      "Once the position is live, we provide periodic compliance check-ins and day-to-day Q&A support for the length of the STEM OPT extension.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="STEM OPT Employer Compliance Training Service Process" />

        <div className="mt-14 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl bg-keystone-mist p-7 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="text-3xl font-bold text-primary/25 sm:text-4xl">{s.number}</span>
              <div>
                <h3 className="text-base font-bold leading-snug text-keystone-ink md:text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
