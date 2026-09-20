import { Settings2, MapPinned, FileStack, ClipboardCheck } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Settings2,
    title: "您即将进行第一次薪资发放",
    description:
      "您需要从第一天起就正确激活薪资系统，并设置好发薪周期与员工分类，而不是等出问题后再补救。",
  },
  {
    icon: MapPinned,
    title: "您的员工分布在不止一个州",
    description:
      "员工实际工作所在的每一个州，都有各自的薪资税与失业保险账户要求，多州及远程办公员工同样适用。",
  },
  {
    icon: FileStack,
    title: "您需要工资单或W-2用于签证申请",
    description:
      "签证申请、租房申请或贷款所需的工资单或W-2，必须准确且随时可用，而不能临时拼凑。",
  },
  {
    icon: ClipboardCheck,
    title: "您目前仍在账外发放薪酬",
    description:
      "非正式或账外发放的薪酬，无法作为证明真实雇佣关系的有效凭证，无论是对IRS、州政府部门，还是对USCIS而言都是如此。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="专为需要薪资体系经得起审查的雇主而设计"
      items={audiences}
      ctaLabel="预约薪资体系咨询"
    />
  );
}
