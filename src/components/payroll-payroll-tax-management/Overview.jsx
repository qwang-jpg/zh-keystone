import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="为什么薪资体系必须一次搭建到位"
      highlight="薪资不仅仅是会计工作——它是证明真实雇佣关系存在的书面记录。"
      paragraphs={[
        "薪资绝不仅仅是一项会计职能。它是证明真实雇佣关系存在的书面记录——无论是对IRS、州劳工部门，还是对USCIS而言，都是如此。",
        "我们搭建的系统，产出真正可申报、可通过W-2核验的薪资收入；根据员工实际工作所在地，注册正确的州薪资税与失业保险账户；并建立可复用的流程，用于计算、发放并记录每一次发薪，让您的工资单与W-2经得起E-Verify、STEM OPT或移民申请审查。",
      ]}
    />
  );
}
