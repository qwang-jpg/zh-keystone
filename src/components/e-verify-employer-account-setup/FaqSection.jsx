import ServiceFaqSection from "@/components/common/ServiceFaqSection";

export const faqs = [
  {
    question: "所有雇主都必须注册E-Verify吗？",
    answer:
      "联邦法律仅要求特定的联邦承包商及少数几个州的雇主注册。但对于任何想要雇佣STEM OPT延期学生的雇主来说，无论规模或行业，这都是硬性要求。",
  },
  {
    question: "注册需要多长时间？",
    answer:
      "公司信息准备就绪后，注册与培训引导通常在几天内即可完成。我们建议在STEM OPT学生预计入职日期之前尽早启动，以免在申请截止日期前手忙脚乱。",
  },
  {
    question: "E-Verify注册需要付费吗？",
    answer:
      "通过联邦E-Verify项目本身的注册是免费的。我们收取的费用，涵盖准确准备提交材料、配置您的账户，以及确保公司ID一次性顺利签发、无需反复修改。",
  },
  {
    question: "注册完成后，是否每一位新员工都必须通过E-Verify核验？",
    answer:
      "已注册的雇主通常被要求对此后所有新员工持续使用E-Verify核验，而不是选择性使用。账户激活后，我们会为您详细说明这对日常招聘流程意味着什么。",
  },
  {
    question: "州新员工申报和E-Verify是同一回事吗？",
    answer:
      "不是，二者是相互独立的系统。E-Verify用于确认工作授权；新员工申报则是将每位新员工的基本信息报送至州申报系统，主要用于子女抚养费执行等用途，几乎所有州都要求申报，无论您是否使用E-Verify。我们会将两项内容一并纳入本服务为您搭建。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="E-Verify注册 — 常见问题" faqs={faqs} />;
}
