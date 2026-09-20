import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="入职是一套体系，而不只是文书工作"
      highlight="可复用的招聘流程，而不是每次新员工入职都要重新摸索。"
      paragraphs={[
        "每一位新员工的入职，都会触发联邦与州层面的雇佣义务，理应享有同样规范一致的流程。我们搭建招聘流程，确保文件在入职首日之前就完整无误，而不是等到审计或签证申请时才发现漏洞。",
        "这意味着一份撰写规范的offer信，一份按照联邦法律实际要求完成并留存的I-9表格，一份确保从第一笔薪资起就正确代扣代缴的W-4表格，以及一套基础合规框架，避免招聘决策在日后埋下法律隐患。",
      ]}
    />
  );
}
