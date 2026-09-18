import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const items = [
  {
    number: "01",
    title: "A Job Description That Genuinely Fits the Degree",
    body:
      "We design STEM-related job duties and a job title that authentically match the employee's field of study and the company's actual business, delivered as a finished \"Job Description\" document ready to support the I-983 and any future petition.",
    cta: "Get Your Job Description Designed",
    sourceFile: "radission-us-_XeQ8XEWb4Q-unsplash.jpg",
  },
  {
    number: "02",
    title: "A Genuine Employment Relationship, Clearly Structured",
    body:
      "We help you organize a real employer-employee relationship that meets STEM OPT requirements, complete with a designated supervisor and a management structure that shows real oversight, not a nominal arrangement built only on paper.",
    cta: "Structure Your Employment Relationship",
    sourceFile: "Screenshot-2025-07-16-at-16.30.51.png",
  },
  {
    number: "03",
    title: "Ongoing STEM OPT Status Maintenance",
    body:
      "Once the position is in place, we provide regular STEM OPT compliance check-ins and day-to-day Q&A support, so the employer structure stays defensible for the full length of the extension.",
    cta: "Get Ongoing Compliance Support",
    sourceFile: "william-bout-TbTgtx7kmes-unsplash.jpg",
  },
];

export default function WhatYoullAchieve() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={<>STEM OPT Employer Compliance Training<br />Here's What You'll Get</>} />

        <div className="mt-14 space-y-16">
          {items.map((it, i) => (
            <motion.div
              key={it.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImagePlaceholder sourceFile={it.sourceFile} aspect="aspect-[4/3]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary/50">{it.number}</span>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-keystone-ink">{it.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                <Button asChild className="mt-6">
                  <Link to="/contact">{it.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
