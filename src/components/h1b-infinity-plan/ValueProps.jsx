import { motion } from "framer-motion";
import { Building2, ShieldCheck, FileCheck2 } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "企业基础",
    description: "围绕可行的运营模式搭建真实的美国企业——而非仅存在于纸面上的实体。",
  },
  {
    icon: ShieldCheck,
    title: "雇主基础设施",
    description: "建立一家正常运营的美国雇主所需具备的雇佣关系、薪资、人力资源、合规、文件与运营体系。",
  },
  {
    icon: FileCheck2,
    title: "H-1B案件就绪",
    description: "在与合格律师协调移民流程之前，先理顺公司、专业职位、雇佣架构与支持文件之间的一致性。",
  },
];

export default function ValueProps() {
  return (
    <section className="-mt-10 bg-white pb-20 md:-mt-16 md:pb-28" aria-label="三大关联支柱">
      <div className="container">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-keystone-gradient">
                <p.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-bold text-keystone-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
