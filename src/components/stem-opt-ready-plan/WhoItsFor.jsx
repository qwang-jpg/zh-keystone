import { Building2, ArrowLeftRight, Clock, ShieldCheck } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const situations = [
  {
    icon: Building2,
    title: "现任雇主无法支持STEM OPT",
    description:
      "可能未参与E-Verify、对STEM OPT不熟悉，或缺乏所需的合规架构。",
  },
  {
    icon: ArrowLeftRight,
    title: "您被裁员或需要更换雇主",
    description:
      "失业天数、申报要求与申请时机，都需要同时兼顾处理。",
  },
  {
    icon: Clock,
    title: "STEM OPT截止日期临近",
    description:
      "您可能符合资格，但仍缺乏能够及时支撑申请的雇佣安排。",
  },
  {
    icon: ShieldCheck,
    title: "您需要更可持续的雇佣架构",
    description: "一套合规架构，为您更长远的美国职业发展提供更稳固的保障。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="STEM OPT截止日期不会等待理想雇主的出现"
      items={situations}
      ctaLabel="获取免费咨询"
      bottomText="资格取决于雇主、职位、培训计划、文件与时间线——而不仅仅是申请本身。"
    />
  );
}
