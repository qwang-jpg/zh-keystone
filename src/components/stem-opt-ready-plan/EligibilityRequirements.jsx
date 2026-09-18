import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const requirements = [
  {
    number: "01",
    title: "Employer Eligibility",
    description:
      "Your employer needs the appropriate structure, business operations, and resources to support a real STEM OPT employment relationship.",
  },
  {
    number: "02",
    title: "E-Verify Participation",
    description: "The employer must meet the applicable E-Verify and STEM OPT participation requirements.",
  },
  {
    number: "03",
    title: "Degree-to-Role Alignment",
    description:
      "The position needs a clear relationship to the qualifying STEM degree and should reflect how your academic background will be applied and developed through the role.",
  },
  {
    number: "04",
    title: "Supervision & Training Structure",
    description:
      "STEM OPT is structured practical training. The employment arrangement should support genuine supervision, professional development, training, feedback, and evaluation throughout the STEM OPT period.",
  },
  {
    number: "05",
    title: "Application & Ongoing Compliance",
    description:
      "Form I-983, employer information, school reporting, STEM OPT application materials, and ongoing employment records should all reflect one consistent and supportable employment structure.",
  },
];

export default function EligibilityRequirements() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="STEM OPT Requires More Than an Offer Letter"
          align="left"
          className="mx-0"
        />

        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          A viable STEM OPT strategy depends on multiple pieces working together &mdash; employer,
          position, supervision, training, and ongoing practice.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            {requirements.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className={i > 0 ? "flex gap-5 pt-6" : "flex gap-5"}>
                  <span className="w-6 shrink-0 pt-px text-sm font-bold text-primary/35">
                    {r.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-snug text-keystone-ink">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
                {i < requirements.length - 1 && <div className="ml-[44px] mt-6 h-px bg-border" />}
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <ImagePlaceholder
              sourceFile="matt-hanns-schroeter-YsC0W2km9I-unsplash.jpg"
              aspect="aspect-[4/3]"
            />
            <div className="mt-4 rounded-2xl bg-keystone-ink p-6">
              <p className="text-sm font-semibold leading-relaxed text-white">
                One weak link can affect the entire STEM OPT strategy.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Keystone helps make sure the pieces are built to work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
