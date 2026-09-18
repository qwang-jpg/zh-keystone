import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    title: "STEM OPT Ready Plan",
    description:
      "The STEM OPT Ready Plan is a one-stop compliance solution for professionals who want to legally extend their STEM OPT status through self-employment while confidently entering the H-1B lottery.",
    cta: "Explore the STEM OPT Ready Plan",
    href: "/stem-opt-ready-plan",
  },
  {
    title: "STEM OPT Status Safeguard Plan",
    description:
      "Through our established employer network and resources from over a hundred incubated companies, Keystone Strategies provides international students in STEM OPT with genuine, compliant positions and end-to-end status transition support.",
    cta: "Explore the STEM OPT Status Safeguard Plan",
    href: "/stem-opt-employer-compliance-training",
  },
  {
    title: "OPT Status Safeguard Plan",
    description:
      "Through our established employer partner network and resources from over a hundred incubated companies, Keystone Strategies provides international students in OPT with genuine, compliant positions and end-to-end status transition support.",
    cta: "Explore the OPT Status Safeguard Plan",
    href: "/opt-status-safeguard",
  },
];

export default function OtherServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Other OPT / STEM OPT / H-1B Services"
          description="One-stop compliance solutions spanning OPT, STEM OPT, H-1B, and long-term planning — safeguarding your status and career in the U.S. every step of the way."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div className="p-7">
                <h3 className="text-lg font-bold text-keystone-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
