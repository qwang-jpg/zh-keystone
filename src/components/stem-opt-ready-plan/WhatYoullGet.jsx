import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const tabs = [
  {
    title: "雇主搭建与资格",
    intro: "搭建支撑STEM OPT雇佣所需的雇主基础。",
    items: [
      "公司与雇主架构",
      "EIN与雇主注册支持",
      "E-Verify注册支持",
      "企业基础设施搭建",
      "雇主合规框架",
      "运营就绪指导",
    ],
    resultLabel: "目标",
    result:
      "不仅仅是创建一个实体，而是搭建能够支撑合法雇佣关系的雇主架构。",
  },
  {
    title: "雇佣与监督架构",
    intro: "把雇主打造成一个真正运作的STEM OPT雇佣环境。",
    items: [
      "学位与职位对应",
      "职位与职责设计",
      "主管架构",
      "雇佣文件",
      "入职框架",
      "薪资与雇佣流程指导",
      "培训与绩效管理框架",
    ],
    resultLabel: "目标",
    result: "每一个环节都应真实反映员工将如何实际工作、成长与接受监督。",
  },
  {
    title: "STEM OPT申请支持",
    intro: "把雇佣架构转化为一份清晰、一致的STEM OPT申请。",
    items: [
      "I-983培训计划支持",
      "学位与职位对应",
      "培训目标与目的",
      "监督与评估框架",
      "申请文件清单",
      "I-765表格准备指导",
      "学校与DSO流程指导",
      "递交前一致性审核",
    ],
    resultLabel: "目标",
    result: "申请材料是背后架构的书面记录——而不是用来替代这套架构的东西。",
  },
  {
    title: "持续身份与雇主合规",
    intro: "在STEM OPT开始后，持续保护这套架构。",
    items: [
      "雇主申报指导",
      "重大变更指导",
      "I-983评估支持",
      "雇佣文件指导",
      "薪资与运营合规指导",
      "更换雇主支持",
      "持续身份规划",
      "未来移民策略",
    ],
    resultLabel: "目标",
    result: "因为STEM OPT合规不会在申请递交后就结束。",
  },
];

export default function WhatYoullGet() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="一套计划，一整套完整的STEM OPT支持体系"
          description="Keystone统筹雇主、雇佣、申请与合规各个环节，搭建可持续的STEM OPT解决方案。"
        />

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-border">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={cn(
                "-mb-px border-b-2 py-3 text-sm font-semibold transition-colors",
                i === active
                  ? "border-primary text-keystone-ink"
                  : "border-transparent text-muted-foreground hover:text-keystone-ink"
              )}
            >
              {t.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-keystone-ink md:text-2xl">{tab.title}</h3>
              <p className="mt-2 text-sm font-semibold text-primary">{tab.intro}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tab.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-keystone-green" strokeWidth={2.25} />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.12)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{tab.resultLabel}</h4>
                <p className="mt-2 text-sm leading-relaxed text-keystone-ink/70">{tab.result}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
