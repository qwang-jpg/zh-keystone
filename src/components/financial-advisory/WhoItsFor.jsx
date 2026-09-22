import { BookOpen, CalendarClock, Layers, Users2 } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: BookOpen,
    title: "刚成立、尚未建立记账体系的公司",
    description: "您已经完成公司注册，但还没有建立一套稳定的流程来记录交易、归类支出或核对账目。",
  },
  {
    icon: CalendarClock,
    title: "不确定该申报什么、何时申报的公司",
    description: "在联邦、州与公司层面的多重要求之间，很难判断哪些申报义务真正适用于您的企业，以及各自的截止日期。",
  },
  {
    icon: Layers,
    title: "缺少统一追踪机制、疲于应付截止日期的企业",
    description: "报税、申报与公司续期的日期分散在不同的提醒事项里，而不是汇总在一份有序的日程表中。",
  },
  {
    icon: Users2,
    title: "已有 CPA，但仍需要协调支持的公司",
    description: "您已经聘请了会计师或CPA，但记账、申报材料准备与专业沟通之间还没有连成一套统一的工作流程。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="适合需要系统管理财务的企业"
      items={audiences}
      ctaLabel="预约财务评估咨询"
    />
  );
}
