import { Building2, Clock, AlertTriangle, Hourglass, Rocket } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Building2,
    title: "您目前的雇主不担保EB-2/EB-3",
    description: "您有长期留美规划，但目前的雇主并不提供职业类绿卡担保。",
  },
  {
    icon: Clock,
    title: "雇主一再推迟担保时间",
    description: "您被告知还需再等一年、达到某个职级，或在公司多待一段时间才能启动担保，希望了解还有哪些长期可行的选择。",
  },
  {
    icon: AlertTriangle,
    title: "现有的EB流程被打断",
    description: "裁员、换雇主、公司重组、经营问题或其他变化影响了您原本的路径，您希望评估新的策略。",
  },
  {
    icon: Hourglass,
    title: "希望在身份期限临近前开始规划",
    description: "您目前持有F-1、OPT、STEM OPT、H-1B或其他身份，希望提早了解自己的长期绿卡路径。",
  },
  {
    icon: Rocket,
    title: "您正在打造一家真正的美国企业",
    description: "您有真实的创业或商业计划，希望了解公司、未来的用人需求、雇主架构与移民策略将如何随时间相互影响。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="适合希望主动规划长期留美安排的专业人士"
      items={audiences}
      ctaLabel="预约免费EB路径评估"
      bottomText="涉及拥有或控制潜在担保雇主的案件，需要移民律师进行个案法律审查。"
    />
  );
}
