import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="为什么薪资体系必须一次搭建到位"
      highlight="薪资不仅仅是会计工作——它是证明真实雇佣关系存在的书面记录。"
      paragraphs={[
        "IRS、州劳工部门与 USCIS 都可能通过薪资记录核查实际的雇佣关系。",
        "我们搭建薪资系统，支持可申报、可通过 W-2 核验的工资发放；根据员工实际工作所在地，注册正确的州薪资税与失业保险账户；并建立可复用的流程，用于计算、发放并记录每一次发薪，让您的工资单与W-2经得起E-Verify、STEM OPT或移民申请审查。",
      ]}
    />
  );
}
