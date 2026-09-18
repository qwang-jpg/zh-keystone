import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileSearch, Briefcase, Users2, HandshakeIcon, Landmark, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const modules = [
  {
    icon: FileSearch,
    title: "注册与递交准备",
    description:
      "我们为您详解抽签注册/转移流程与政策环境，并一次性正确完成USCIS机构或雇主账户注册。",
    items: [
      "注册流程与政策解读咨询",
      "涵盖公司与个人材料的文件清单",
      "USCIS机构/雇主账户注册",
      "注册递交指导与关键步骤提醒",
    ],
  },
  {
    icon: Briefcase,
    title: "职位与岗位描述设计",
    description:
      "我们根据您的专业背景与公司真实业务匹配职位，并设计经得起审查的岗位描述。",
    items: [
      "基于背景与业务范围的职位匹配",
      "《岗位职责+SOC分类建议》文档，通过两次咨询定稿",
      "公司业务范围与职位相关性分析",
    ],
  },
  {
    icon: Users2,
    title: "创始人主导的雇佣关系合规",
    description:
      "我们搭建能够证明真实、获USCIS认可的雇佣关系的合规框架，涵盖您既是担保方又是受益人时所面临的额外审查。",
    items: [
      "雇佣关系合规架构搭建（2次咨询）",
      "为创始人担保方记录独立的招聘、解雇与薪资决定权",
      "在自雇架构需要时，提供公司治理分离指导（董事会或高管监督）",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "申请材料准备与律师协调",
    description:
      "我们准备公司端材料，并指导您与移民律师沟通，直至完成递交。",
    items: [
      "申请公司材料准备（2次咨询）",
      "与律师沟通及材料提交指导（3次咨询，加上待审期间的持续答疑）",
      "在适用情况下，为您对接专业移民律师完成申请递交",
    ],
  },
  {
    icon: Landmark,
    title: "长期路径规划",
    description:
      "对于希望超越现有签证做长远打算的客户，我们会介绍职业类绿卡的整体路径。",
    items: [
      "EB-2/EB-3基础政策解读，并持续更新政策动态",
      "针对EB-2/EB-3流程与主要阶段的专属咨询",
    ],
  },
];

export default function ProgramCards() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="服务内容"
          description="从注册到申请递交，再到展望长期绿卡规划，以下每个模块都对应流程中的一个具体阶段。"
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
                  立即咨询专家
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
