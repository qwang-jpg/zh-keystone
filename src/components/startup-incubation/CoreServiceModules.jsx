import { motion } from "framer-motion";
import { Building2, FileCheck2, ScrollText, Landmark, Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const modules = [
  {
    icon: Building2,
    step: "01",
    title: "实体选择与注册策略",
    description:
      "在递交任何申请之前，我们帮您确定正确的实体类型、注册州及其他关键架构决策。",
    items: [
      "1-2次咨询，确认实体类型与注册州",
      "《公司注册信息与业务范围》文档",
      "公司名称冲突检索与可用性确认",
    ],
  },
  {
    icon: FileCheck2,
    step: "02",
    title: "州注册递交与成立",
    description:
      "我们负责准备并递交您的注册申请，全程跟踪州审批进度，并确认公司正式成立。",
    items: [
      "准备并递交州注册申请",
      "跟踪州审批进度",
      "递交确认与批准文件",
    ],
  },
  {
    icon: ScrollText,
    step: "03",
    title: "成立与治理文件",
    description:
      "我们准备用于确立公司、规范股权与管理方式的法律文件。",
    items: [
      "公司注册证书/组织章程",
      "运营协议、公司章程或股东协议",
      "匹配您实体类型的治理文件模板",
    ],
  },
  {
    icon: Landmark,
    step: "04",
    title: "联邦EIN与公司档案",
    description:
      "我们为您申请联邦税号，并将公司关键信息整理成一份统一的参考档案。",
    items: [
      "联邦EIN申请",
      "IRS EIN批准/确认文件",
      "整合后的公司信息档案",
    ],
  },
];

export default function CoreServiceModules() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="核心服务模块"
          description="以下每个模块，都覆盖公司注册的一个阶段——从选择正确的架构，到您此后将持续依赖的文件与档案。"
          align="left"
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-7"
              >
                <span className="pointer-events-none absolute -right-3 -top-6 text-7xl font-bold text-keystone-ink/[0.04]">
                  {m.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-keystone-ink">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                <ul className="mt-4 space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
