import { ListChecks, RefreshCcw, ShieldCheck, FileText } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: ListChecks,
    title: "您正在招聘第一位员工",
    description:
      "您还没有一套入职流程，也不希望在截止日期压力下从零搭建offer信、I-9与W-4的办理流程。",
  },
  {
    icon: RefreshCcw,
    title: "每一次招聘的流程都不一样",
    description:
      "每次有新员工加入，入职流程都要重新摸索，或是遗漏某个环节，而不是遵循同一套可复用流程。",
  },
  {
    icon: ShieldCheck,
    title: "您担心审计或签证申请出问题",
    description:
      "一份缺失的I-9、一封未签署的offer信，或是一份过期的W-4，都可能悄悄毁掉数月的周密规划。",
  },
  {
    icon: FileText,
    title: "您不确定自己的offer信是否站得住脚",
    description:
      "您需要一封清晰记录岗位、薪酬与入职日期的offer信，并真正能作为岗位真实聘用的有力证明。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="为希望第一次就把入职做对的雇主而设计"
      items={audiences}
      ctaLabel="预约入职体系咨询"
    />
  );
}
