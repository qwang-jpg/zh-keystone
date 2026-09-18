import { motion } from "framer-motion";
import { Search, Handshake, Route } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const features = [
  {
    icon: Search,
    title: "Genuine OPT Job Placement Resources",
    description:
      "Backed by a network of 500+ incubated and partner companies offering 2,000+ genuine positions, we get you into compliant roles quickly, with verifiable work experience that keeps your OPT status legally intact.",
  },
  {
    icon: Handshake,
    title: "Quality Sponsorship Opportunities",
    description:
      "We refuse any form of illegal placement. Through a network of genuine companies both qualified and willing to sponsor STEM OPT/H‑1B, we connect clients with real positions that support long-term career growth.",
  },
  {
    icon: Route,
    title: "Diverse Pathways to Stay in the U.S.",
    description:
      "We offer legal self-employment and entrepreneurship advisory, career advancement support, investment-based immigration assessment, and employment-based immigration planning, tailoring a compliant strategy that gives clients diverse, sustainable pathways to remain in the U.S.",
  },
];

export default function AboutProgram() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">
              About the OPT Job Search Safeguard Plan
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              <strong className="text-keystone-ink">The OPT Job Search Safeguard Plan</strong> is a systematic
              service built by Keystone Strategies for international students on OPT, drawing on our established
              employer partner network and hundreds of incubated companies. We provide genuine, compliant job
              placement support, end-to-end compliant status transition services, and ongoing connections to
              H‑1B sponsors and multiple immigration pathways, helping clients maintain uninterrupted status while
              fully elevating their careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ImagePlaceholder sourceFile="thomas-habr-wprOCzLIEYI-unsplash.jpg" aspect="aspect-[4/3]" />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-keystone-mist p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-keystone-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
