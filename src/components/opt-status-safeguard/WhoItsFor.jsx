import { Search, AlertTriangle, Route, Zap } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Search,
    title: "OPT已经开始，却还没找到与专业相关的工作",
    description:
      "您的EAD已经生效，失业天数正在累积，但您仍需要一份与所学专业方向相符的合规工作。",
  },
  {
    icon: AlertTriangle,
    title: "遭遇裁员，或雇佣关系已经终止",
    description: "意外的雇佣变动，可能让您的 OPT 时间安排变得紧迫。",
  },
  {
    icon: Route,
    title: "现在的职位，无法为您的下一步铺路",
    description: "您可能已经在职，但目前的岗位职业成长空间有限，也无法支撑您未来的STEM OPT或H-1B计划。",
  },
  {
    icon: Zap,
    title: "您需要一条更快的就业路径",
    description: "传统招聘流程可能需要数月时间，而您的OPT时间线未必等得起。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="您的90天失业计时，不会为您等待。"
      items={audiences}
      ctaLabel="获取 OPT 初步评估"
      bottomText="在失业计时成为限制因素之前，尽快锁定与专业相关的工作机会。"
    />
  );
}
