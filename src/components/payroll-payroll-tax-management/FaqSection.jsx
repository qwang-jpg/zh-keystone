import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "员工工作所在的每一个州，我都需要单独的薪资账户吗？",
    answer:
      "不需要单独的银行账户，但通常确实需要为员工实际工作所在的每一个州（包括远程办公员工）分别注册州薪资税与失业保险账户。我们会为您精准识别适用的州。",
  },
  {
    question: "系统搭建完成后，我可以自己运行薪资发放吗，还是需要你们持续管理？",
    answer:
      "我们负责搭建并配置好系统与流程，此后您或您的记账人员即可自行运行发薪周期。许多客户也会选择让我们持续提供审核支持，尤其是在报税截止日期与W-2季节前后。",
  },
  {
    question: "这对STEM OPT或H-1B合规为什么重要？",
    answer:
      "STEM OPT与H-1B的规定要求存在真实、可证明的雇主雇员关系，包括对等的薪资水平与合理的薪酬发放。规范合规的薪资记录，正是USCIS与国际学生顾问（DSO）在确认这一关系真实性时最主要的参考证据。",
  },
  {
    question: "公司注册后，应该多快搭建薪资体系？",
    answer:
      "只要您心中有了大致的招聘时间，就应尽快启动。薪资系统开通与州注册可能需要几周时间才能完全生效，因此我们建议在第一位员工入职日期之前提前启动。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="薪资与薪资税务 — 常见问题" faqs={faqs} />;
}
