import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const stages = [
  { number: "1", title: "H-1B评估", description: "评估您的移民身份、专业背景、商业构想、时间安排及潜在的H-1B策略。" },
  { number: "2", title: "企业与雇主架构设计", description: "确定公司架构、商业模式、拟定的专业职位及雇主框架。" },
  { number: "3", title: "基础设施搭建", description: "建立公司的业务、人力资源、薪资、合规、品牌及运营基础设施。" },
  { number: "4", title: "H-1B就绪与法律协调", description: "整理雇主方文件，并与合格移民律师协调移民申请流程。" },
  { number: "5", title: "持续雇主支持", description: "根据委托协议约定，在申请递交后及（如适用）获批后，持续为运营与合规基础设施提供支持。" },
];

export default function ServiceProcess() {
  return (
    <section id="service-process" className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="H-1B无限续航计划如何运作" />

        <div className="relative mt-14 pl-[60px]">
          <div className="absolute bottom-8 left-5 top-2 w-px bg-border" aria-hidden="true" />

          {stages.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={i < stages.length - 1 ? "relative pb-11" : "relative"}
            >
              <div className="absolute -left-[60px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-keystone-gradient text-sm font-bold text-white shadow-[0_4px_10px_rgba(22,152,152,.3)]">
                {s.number}
              </div>
              <h3 className="pt-1.5 text-base font-bold leading-snug text-keystone-ink md:text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
