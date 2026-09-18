import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, ArrowLeftRight, Clock, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const situations = [
  {
    icon: Building2,
    title: "Your Current Employer Cannot Support STEM OPT",
    description:
      "May not participate in E-Verify, be unfamiliar with STEM OPT, or lack the compliance structure needed.",
  },
  {
    icon: ArrowLeftRight,
    title: "You Were Laid Off or Need to Change Employers",
    description:
      "Unemployment days, reporting requirements, and application timing all need addressing at once.",
  },
  {
    icon: Clock,
    title: "Your STEM OPT Deadline Is Approaching",
    description:
      "You may qualify but still lack an employment arrangement capable of supporting the application in time.",
  },
  {
    icon: ShieldCheck,
    title: "You Need a More Sustainable Employment Structure",
    description: "A compliant structure that gives greater stability for your longer-term U.S. career.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Your STEM OPT Deadline Doesn't Wait for the Perfect Employer"
          description="STEM OPT challenges often begin before the application itself. Whatever the situation, the real challenge is rarely just one form — it is making sure your employer, position, training structure, documentation, and timeline all work together."
          className="max-w-3xl mx-0"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-white p-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/10">
                <s.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-keystone-ink">{s.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Get Free Consultation
                <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-semibold leading-relaxed text-keystone-ink">
          The goal isn&rsquo;t simply to complete a STEM OPT application.
          <br className="hidden sm:block" />{" "}
          <span className="font-medium text-muted-foreground">
            The goal is to build a structure that can support your status.
          </span>
        </p>
      </div>
    </section>
  );
}
