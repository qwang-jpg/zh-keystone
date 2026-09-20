import { BookOpenCheck, ShieldAlert, ClipboardList, UserCheck } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: BookOpenCheck,
    title: "您还没有一份书面员工手册",
    description:
      "您目前在没有手册的情况下运营，而这份手册本该真实反映您实际用工所在州的法律要求。",
  },
  {
    icon: ShieldAlert,
    title: "您没有真正意义上的反骚扰投诉流程",
    description:
      "您的EEO制度即便存在，也只是一段套话式条款，背后并无真实的投诉或调查处理流程支撑。",
  },
  {
    icon: ClipboardList,
    title: "您不确定自己需要张贴哪些公示",
    description:
      "联邦与州劳工法通知因州而异，而您并不清楚哪些适用于您的实体或远程办公场所。",
  },
  {
    icon: UserCheck,
    title: "您不确定某位员工的用工分类是否正确",
    description:
      "将员工错误归类为豁免身份、或将其错误归类为独立承包商而非员工，是初创阶段雇主最常见、也是代价最高昂的错误之一。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="专为制度尚未跟上团队规模的雇主打造"
      items={audiences}
      ctaLabel="预约职场合规咨询"
    />
  );
}
