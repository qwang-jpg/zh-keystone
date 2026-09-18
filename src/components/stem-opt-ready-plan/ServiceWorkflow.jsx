import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "1",
    title: "评估您的身份与时间线",
    description:
      "我们审视您的STEM学位、当前OPT身份、失业时间线、雇主情况、申请截止日期与长期规划。第一步的目标是弄清楚需要做什么——以及先后顺序。",
  },
  {
    number: "2",
    title: "设计正确的雇佣策略",
    description:
      "我们根据您的实际情况确定合适的路径。这可能包括与现有雇主合作、提升雇主的STEM OPT就绪度、更换雇主，或搭建能够支撑您STEM OPT需求的合规雇佣架构。",
  },
  {
    number: "3",
    title: "搭建并记录雇佣架构",
    description:
      "我们协助建立雇主、职位、监督框架、雇佣文件、运营流程等支撑雇佣关系所需的各项要素。",
  },
  {
    number: "4",
    title: "准备STEM OPT申请",
    description:
      "架构搭建完成后，我们通过I-983表格、学位与职位对应、支持文件、学校协调与递交准备，将其与申请流程衔接起来。",
  },
  {
    number: "5",
    title: "递交后持续支持您的身份",
    description:
      "我们的支持不会在申请提交后自动终止。我们可以持续协助申报、评估、更换雇主、合规问题、雇佣文件，以及为您移民之路的下一阶段做规划。",
  },
];

export default function ServiceWorkflow() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="从身份风险到可持续的STEM OPT架构"
          description="每位客户的起点各不相同。我们首先了解您目前所处的位置，找出缺失的环节，再围绕您实际的时间线与目标，搭建雇佣与合规架构。"
          className="mx-0 max-w-none"
        />

        <div className="relative mt-14 pl-[60px]">
          <div className="absolute bottom-8 left-5 top-2 w-px bg-border" aria-hidden="true" />

          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={i < steps.length - 1 ? "relative pb-11" : "relative"}
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
