import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileSearch, Briefcase, Users2, HandshakeIcon, Landmark, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const modules = [
  {
    icon: FileSearch,
    title: "Registration & Filing Readiness",
    description:
      "We walk you through the Cap Registration / Transfer process and policy landscape, then register your USCIS Organizational or Employer Account correctly the first time.",
    items: [
      "Registration process & policy interpretation consultation",
      "Document checklist covering company and personal materials",
      "USCIS Organizational / Employer Account registration",
      "Registration filing guidance and key-step reminders",
    ],
  },
  {
    icon: Briefcase,
    title: "Position & Job Description Design",
    description:
      "We match the role to your professional background and the company's real business, then design a job description built to withstand review.",
    items: [
      "Position matching based on background and business scope",
      "\"Job Duties + SOC Proposal\" document, finalized over two consultations",
      "Company business scope and position relevance analysis",
    ],
  },
  {
    icon: Users2,
    title: "Founder-Led Employer-Employee Relationship Compliance",
    description:
      "We structure the compliance framework that shows a genuine, USCIS-recognized employment relationship, including the added scrutiny that applies when you're both the sponsor and the beneficiary.",
    items: [
      "Employer-employee relationship compliance structuring (2 consultations)",
      "Independent hiring, firing, and pay-setting authority documented for founder-led sponsors",
      "Corporate governance separation guidance (board or officer oversight) where a self-sponsored structure requires it",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Petition Prep & Attorney Coordination",
    description:
      "We prepare the company-side materials and guide communication with your immigration attorney through filing.",
    items: [
      "Petition company-materials preparation (2 consultations)",
      "Guidance communicating with counsel and submitting materials (3 consultations, plus Q&A while pending)",
      "Connection to a professional immigration attorney for petition filing, where applicable",
    ],
  },
  {
    icon: Landmark,
    title: "Long-Term Pathway Planning",
    description:
      "For clients thinking beyond their current visa, we introduce the employment-based green card landscape.",
    items: [
      "EB-2 / EB-3 basic policy interpretation, with ongoing policy updates",
      "Dedicated consultation on the EB-2 / EB-3 process and major stages",
    ],
  },
];

export default function ProgramCards() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="What's Included"
          description="From registration through petition filing and a look ahead to long-term green card planning, every module below is scoped to a specific stage of the process."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex flex-col rounded-2xl border border-border bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-keystone-ink">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                <ul className="mt-4 space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Talk to an Expert Today
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
