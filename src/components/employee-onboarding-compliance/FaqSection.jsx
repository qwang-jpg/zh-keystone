import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "雇佣新员工后，多久需要完成I-9表格？",
    answer:
      "第一部分必须最迟在员工入职当天完成，第二部分则必须由雇主在入职日期后三个工作日内完成。我们会帮您搭建一套流程，帮助您按时完成这些步骤。",
  },
  {
    question: "STEM OPT或H-1B员工的入职要求是否有所不同？",
    answer:
      "核心的联邦表格（I-9、W-4）对每位员工都是一样的，但STEM OPT与H-1B员工还需要额外的文件支持，例如与签证申请材料相符的真实聘用信与职位描述。我们会根据这些要求定制入职流程。",
  },
  {
    question: "如果我们的I-9表格没有妥善留存会怎样？",
    answer:
      "I-9表格缺失或不完整，是国土安全部审计中最常见的问题之一，且可能面临按违规次数计算的罚款。我们会为您搭建一套留存流程，让您无需额外费心就能保持有序。",
  },
  {
    question: "员工已经入职后，你们还能协助处理入职事宜吗？",
    answer:
      "可以。我们经常帮助企业为在职员工（而不仅仅是新员工）清理并更正入职文件。",
  },
  {
    question: "招聘流程除了文书工作，实际还包括什么？",
    answer:
      "从offer审批到有记录可查的第一周日程安排，形成一套结构化流程：谁来签署offer、入职首日前需要配置好哪些内容（设备、账户、系统权限），以及一份不依赖任何人凭记忆执行的清单。这套流程只需搭建一次，即可在每一次招聘中重复使用。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="招聘与入职 — 常见问题" faqs={faqs} />;
}
