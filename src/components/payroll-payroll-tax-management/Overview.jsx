import ServiceOverview from "@/components/common/ServiceOverview";

const stats = [
  { value: "50", label: "我们均可为您注册的州薪资税体系数量" },
  { value: "100%", label: "符合W-2标准的薪资体系搭建" },
  { value: "1", label: "覆盖薪酬、税务与记录的一体化系统搭建" },
];

const checklist = [
  "真正可申报、可通过W-2核验的薪资收入，而非非正式或账外发放",
  "根据员工实际工作所在地，注册正确的州薪资税与失业保险账户",
  "可复用的流程，用于计算、发放并记录每一次发薪",
  "经得起E-Verify、STEM OPT或移民申请审查的工资单与W-2",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="为什么薪资体系必须一次搭建到位"
      description="薪资绝不仅仅是一项会计职能。它是证明真实雇佣关系存在的书面记录——无论是对IRS、州劳工部门，还是对USCIS而言，都是如此。"
      checklist={checklist}
      stats={stats}
    />
  );
}
