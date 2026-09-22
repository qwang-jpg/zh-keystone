import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const stages = [
  {
    number: "1",
    title: "评估您的OPT情况",
    description: "我们会全面了解您的专业背景、EAD日期、雇佣历史、剩余失业天数、职业背景以及长期目标。",
  },
  {
    number: "2",
    title: "明确您的求职方向",
    description: "我们会结合您的学术背景、工作经验与OPT时间线，锁定与之匹配的岗位方向。",
  },
  {
    number: "3",
    title: "匹配对口的工作机会",
    description: "我们利用Keystone的企业与岗位网络，为您匹配合适的工作机会。对于时间紧迫且符合条件的客户，最快可在 48 小时内获得 offer。",
  },
  {
    number: "4",
    title: "入职并记录您的雇佣关系",
    description: "工作机会确定后，我们会协助您顺利过渡到新的岗位，并确保您的职责与雇佣记录被妥善记录。",
  },
  {
    number: "5",
    title: "规划下一阶段",
    description: "在您的OPT就业稳定后，我们会帮助您为STEM OPT、H-1B担保或其他长期就业与移民选项做好准备。",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="从OPT失业风险，到与专业相关的真实工作。" />

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
