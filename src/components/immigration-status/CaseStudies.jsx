import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const cases = [
  {
    tag: "Position & Petition Planning",
    title: "H-1B Petition Planning",
    headline: "Helped 300+ Clients Build Petition-Ready Positions",
    tags: ["Job Description Design", "Registration", "Employer Compliance", "Attorney Coordination"],
    paragraphs: [
      "Whether a client is transferring an existing H-1B, registering for the first time, or building a role around a founder-owned company, we start with the same question: does this position genuinely require this person? From there we design the job duties and SOC classification, structure the employer-employee relationship, and prepare the company-side materials counsel needs to file.",
      "To date, we've helped more than 300 clients build positions that held up through registration, RFEs, and final adjudication.",
    ],
    sourceFile: "helen-cramer-ljXkKfbOlXs-unsplash.jpg",
  },
  {
    tag: "Long-Term Pathway Planning",
    title: "Employment-Based Green Card Planning",
    headline: "Mapped EB-2 / EB-3 Pathways Alongside an Active H-1B Case",
    tags: ["EB-2 / EB-3", "Long-Term Planning", "Policy Interpretation"],
    paragraphs: [
      "For clients who want to see past their current visa, we introduce the EB-2 / EB-3 employment-based green card process early, walking through the major stages and how they interact with an existing H-1B timeline. Clients leave with a realistic view of what comes next and when to start planning for it.",
    ],
    sourceFile: "javier-miranda-AlJ9TQqeCV0-unsplash.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Keystone Strategies Success Stories" />

        <div className="mt-16 space-y-16">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImagePlaceholder sourceFile={c.sourceFile} aspect="aspect-[4/3]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">{c.tag}</p>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-keystone-ink">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-keystone-ink/70">{c.headline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-keystone-mist px-3 py-1 text-xs font-medium text-keystone-ink/70 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {c.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
