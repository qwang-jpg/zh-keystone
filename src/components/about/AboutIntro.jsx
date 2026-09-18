import { motion } from "framer-motion";
import { Layers, MapPin, Repeat, Users } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const highlights = [
  {
    icon: MapPin,
    title: "Dallas HQ, New York office",
    description: "On the ground where our clients register, hire, and operate.",
  },
  {
    icon: Layers,
    title: "Three practices, one team",
    description: "Immigration advisory, business infrastructure, workforce compliance.",
  },
  {
    icon: Users,
    title: "100+ specialist network",
    description: "Attorneys, CPAs, and consultants who plug into a single plan.",
  },
  {
    icon: Repeat,
    title: "Project-based collaboration",
    description: "Engagements that continue past the first filing.",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading title="About Keystone Strategies" align="left" className="max-w-none" />

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="leading-relaxed text-muted-foreground"
          >
            Keystone Strategies, headquartered in Dallas with offices in New York, is dedicated to
            building a strategic framework that connects individual growth, business expansion,
            and global mobility. With a consulting-driven approach, we design immigration
            pathways, build compliant corporate structures, incubate entrepreneurial ventures, and
            optimize organizational employment strategies, bridging policy, market, and talent for
            long-term value creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="leading-relaxed text-muted-foreground">
              We don&apos;t just deliver solutions, we help reshape our clients&apos;
              decision-making frameworks. In an increasingly complex and unpredictable global
              landscape, Keystone enables clients to identify critical variables, build actionable
              operational structures, and secure long-term, stable pathways.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our clients span international talents, startups, educational institutions,
              technology companies, investment organizations, and regional industry platforms.
              Through project-based collaboration, we drive the shared growth of individuals and
              organizations.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="rounded-2xl border border-border bg-keystone-mist p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:p-6"
              >
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.9} />
                <p className="mt-3.5 text-sm font-bold leading-snug text-keystone-ink">{h.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{h.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
