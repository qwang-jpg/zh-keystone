import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const items = [
  {
    number: "01",
    title: "2,000+ Real OPT Job Openings, Covering Over 95% of Fields of Study",
    body:
      "Keystone helps students quickly resolve status issues during the unemployment countdown — matching you with 2,000+ real job openings through a network of 500 partner companies, spanning technology, consulting, data analysis, project management, and more. We ensure your career path closely matches your academic background, with formal offers available in as fast as 48 hours. Every position comes from a genuinely operating company with real hiring needs, ensuring your employment record stays fully lawful and compliant.",
    cta: "Get Job Placement Resources",
    sourceFile: "radission-us-_XeQ8XEWb4Q-unsplash.jpg",
  },
  {
    number: "02",
    title: "Build a Genuine Work History and Unlock Full-Time Opportunities",
    body:
      "Through our partner company network, Keystone connects you with lawful positions backed by real hiring needs, so you can maintain lawful status while gaining hands-on work experience, building your skills, and strengthening your resume. This work history holds up under future background checks, adds real career value, and can lead to full-time opportunities — creating long-term career growth potential for you.",
    cta: "Get the Complete OPT Application Guide",
    sourceFile: "sigmund-Fa9b57hffnM-unsplash.jpg",
  },
  {
    number: "03",
    title: "Access to STEM OPT and H‑1B Sponsor Employer Resources",
    body:
      "Once your compliant OPT status is secured, Keystone draws on our partner company network to connect you with positions at companies that have genuine hiring needs and a willingness to sponsor — helping you lawfully pursue STEM OPT and, later, H‑1B. We are committed to eliminating any form of illegal fee-for-sponsorship arrangement; every position is genuine and career-oriented. For clients with long-term plans to stay in the U.S., we also offer consulting on immigration pathways such as EB‑2/EB‑3, helping you advance your career while moving steadily toward long-term lawful U.S. residency.",
    cta: "Get the Sponsor Employer List",
    sourceFile: "william-bout-TbTgtx7kmes-unsplash.jpg",
  },
];

export default function WhatYoullAchieve() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={<>Choose the OPT Job Placement Assurance Plan<br />What You'll Get</>} />

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
