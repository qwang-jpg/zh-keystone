import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    title: "实体架构咨询",
    description:
      "我们审视您的目标、行业与股权规划，在递交任何申请之前，为您推荐合适的实体类型与注册州。",
    items: [
      "实体类型与注册州建议",
      "《公司注册信息与业务范围》文档",
      "公司名称冲突检索与可用性确认",
    ],
  },
  {
    title: "州注册递交与批准",
    description:
      "我们负责准备并向州政府递交注册申请，并全程跟踪至批准完成。",
    items: [
      "准备并递交注册申请",
      "持续跟踪州审批状态",
      "公司正式成立后确认递交结果",
    ],
  },
  {
    title: "治理文件起草",
    description:
      "我们起草确立公司股权、管理与运营方式的相关文件。",
    items: [
      "公司注册证书/组织章程",
      "运营协议、公司章程或股东协议",
      "以书面形式记录股权与管理架构",
    ],
  },
  {
    title: "EIN与公司档案",
    description:
      "我们为您申请联邦税号，并将注册档案整理成一份统一的参考文件。",
    items: [
      "联邦EIN申请与批准",
      "整理好日后可用的公司信息档案",
      "可直接交付银行、会计师或律师的完整档案",
    ],
  },
];

export default function IncubationProcess() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="公司注册流程"
          description="从选择正确的架构，到一家文件齐备、EIN就绪的公司，以下是每次合作推进的具体步骤。"
          align="left"
          className="max-w-2xl"
        />

        <div className="relative mt-14">
          <div className="absolute left-5 top-1 bottom-1 w-px bg-border" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-keystone-ink text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-border bg-white px-6 py-5">
                <h3 className="text-base font-bold leading-snug text-keystone-ink md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-3">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-snug text-keystone-ink/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
