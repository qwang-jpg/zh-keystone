import { FileSearch, Users2, Repeat, Landmark } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: FileSearch,
    title: "正在为H-1B抽签注册的创始人",
    description: "您即将进入抽签注册或转移流程，希望一次性把USCIS雇主账户、职位与递交基础工作搭建正确。",
  },
  {
    icon: Users2,
    title: "自雇型、创始人主导的公司",
    description: "您拥有或控制担保公司，需要搭建能够经受住创始人主导申请所面临的额外审查的雇主雇员关系。",
  },
  {
    icon: Repeat,
    title: "正将现有H-1B转移至自己公司的持有者",
    description: "您正把有效的H-1B转移到自己创办的公司，需要让职位与薪酬与您真实的背景及业务范围相匹配。",
  },
  {
    icon: Landmark,
    title: "计划超越现有签证做长远打算的客户",
    description: "您希望了解EB-2/EB-3职业类绿卡路径如何衔接您现有的H-1B时间线，并在规划变得紧迫之前提前布局。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="为需要让雇主与申请齐头并进的创始人量身打造"
      items={audiences}
      ctaLabel="预约申请规划咨询"
      bottomText="涉及担保雇主所有权或控制权的案件，需要由移民律师进行个案化的法律审查。"
    />
  );
}
