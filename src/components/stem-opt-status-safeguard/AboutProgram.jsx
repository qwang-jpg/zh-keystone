import { motion } from "framer-motion";
import { FileText, Users2, ShieldCheck, ClipboardList } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const features = [
  {
    icon: FileText,
    title: "STEM-Aligned Job Description Design",
    description:
      "We design job duties and titles that genuinely align with the employee's STEM field of study, the single most scrutinized element of a STEM OPT extension.",
  },
  {
    icon: Users2,
    title: "Genuine Employer-Employee Relationship",
    description:
      "We help you organize a real, verifiable employment relationship with a qualified supervisor, not a nominal arrangement that can't withstand review.",
  },
  {
    icon: ClipboardList,
    title: "Supervision & Management Structure",
    description:
      "We design a clear management and supervision structure so the training and oversight the I-983 describes actually happens in practice.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Status Maintenance",
    description:
      "Beyond the initial filing, we provide regular check-ins and Q&A support to keep the employment relationship compliant for the life of the STEM OPT extension.",
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
              About STEM OPT Employer Compliance Training
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              <strong className="text-keystone-ink">STEM OPT Employer Compliance Training</strong> helps the
              employer side of a STEM OPT extension get built correctly, whether that employer is an existing
              company or one a founder has formed to sponsor their own compliant position. We focus on the exact
              elements USCIS and DSOs scrutinize most: whether the job duties genuinely relate to the employee's
              STEM degree, whether a real supervisor oversees the work, and whether the employment relationship
              holds up as authentic rather than a nominal arrangement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ImagePlaceholder sourceFile="zoshua-colah-xWsjT0m_mRs-unsplash.jpg" aspect="aspect-[4/3]" />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
