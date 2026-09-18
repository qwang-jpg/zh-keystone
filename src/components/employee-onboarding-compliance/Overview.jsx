import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "可复用的招聘流程，确保每一次招聘都遵循相同步骤，而不是每次都从头摸索",
  "一份撰写规范的offer信，足以作为真实岗位聘用的有力证明",
  "按照联邦法律实际要求，完成并留存I-9表格",
  "收集W-4表格，确保从第一笔薪资起就正确代扣代缴",
  "基础合规框架，避免招聘决策在日后埋下法律隐患",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="入职是一套体系，而不只是文书工作"
      description="每一位新员工的入职，都会触发联邦与州层面的雇佣义务，理应享有同样规范一致的流程。我们搭建招聘流程，确保文件在入职首日之前就完整无误，而不是等到审计或签证申请时才发现漏洞。"
      checklist={checklist}
    />
  );
}
