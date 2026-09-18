import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Assess Your Status & Timeline",
    description:
      "We review your STEM degree, current OPT status, unemployment timeline, employer situation, filing deadline, and long-term plans. The first objective is to understand what needs to happen — and in what order.",
  },
  {
    number: "2",
    title: "Design the Right Employment Strategy",
    description:
      "We determine the appropriate path based on your situation. That may involve working with an existing employer, strengthening an employer's STEM OPT readiness, changing employers, or establishing a compliant employment structure capable of supporting your STEM OPT needs.",
  },
  {
    number: "3",
    title: "Build & Document the Employment Structure",
    description:
      "We help establish the employer, position, supervision framework, employment documentation, operational processes, and other components needed to support the employment relationship.",
  },
  {
    number: "4",
    title: "Prepare the STEM OPT Application",
    description:
      "Once the structure is in place, we connect it to the application process through Form I-983, degree-to-role alignment, supporting documentation, school coordination, and filing preparation.",
  },
  {
    number: "5",
    title: "Support Your Status After Filing",
    description:
      "Our support does not automatically stop when the application is submitted. We can continue assisting with reporting, evaluations, employer changes, compliance issues, employment documentation, and planning for the next stage of your immigration journey.",
  },
];

export default function ServiceWorkflow() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="From Status Risk to a Sustainable STEM OPT Structure"
          description="Every client begins from a different position. We first understand where you are, identify what is missing, and then build the employment and compliance structure around your actual timeline and goals."
          className="mx-0 max-w-none"
        />

        <div className="relative mt-14 pl-[60px]">
          <div className="absolute bottom-8 left-5 top-2 w-px bg-border" aria-hidden="true" />

          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={i < steps.length - 1 ? "relative pb-11" : "relative"}
            >
              <div className="absolute -left-[60px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-keystone-gradient text-sm font-bold text-white shadow-[0_4px_10px_rgba(22,152,152,.3)]">
                {s.number}
              </div>
              <h3 className="pt-1.5 text-base font-bold leading-snug text-keystone-ink md:text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
