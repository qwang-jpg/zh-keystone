import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const points = [
  {
    number: "01",
    title: "STEM OPT Is Limited to Qualifying Majors",
    description: (
      <>
        OPT is available to F-1 visa holders in any field of study, and any degree holder can apply for the standard
        12-month OPT period. STEM OPT, however, is limited to students with a
        <a
          href="https://www.ice.gov/sevis/schools#dhs-stem-designated-degree-program-list-and-cip-code-nomination-process"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          Science, Technology, Engineering, or Mathematics (STEM) degree
        </a>
        , who may extend their initial OPT by an additional 24 months.
      </>
    ),
  },
  {
    number: "02",
    title: "Stricter Employer Requirements",
    description: (
      <>
        During OPT, employers are not required to participate in E-Verify, unpaid positions are allowed, and students may work for any lawful company. During STEM OPT, however, the employer must be enrolled in
        <a
          href="https://www.e-verify.gov/"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          E-Verify
        </a>
        , must offer the student <strong className="text-keystone-ink">compensation</strong>
        {" "}and working conditions comparable to those of similarly situated U.S. workers, and must submit an
        <a
          href="https://www.ice.gov/doclib/sevis/pdf/i983.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          I-983
        </a>
        {" "}training plan.
      </>
    ),
  },
  {
    number: "03",
    title: "An Extra 60 Days of Unemployment Allowance",
    description: (
      <>
        During OPT, students are allowed up to <strong className="text-keystone-ink">90</strong> days of unemployment. During the STEM
        OPT extension, an additional <strong className="text-keystone-ink">60</strong>
        {" "}days become available, combined with the 90 days accrued during OPT — so the total unemployment time across the entire OPT and STEM OPT period may not exceed
        <strong className="text-keystone-ink">150</strong> days.
      </>
    ),
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title={
            <>
              STEM OPT vs. OPT
              <br />
              What's the Difference?
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-8"
            >
              <span className="text-sm font-bold text-primary/50">{p.number}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-keystone-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/employment-visa-position-petition-planning">Learn More About the Policies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
