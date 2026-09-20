import { Building2, Rocket, ShieldAlert } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Building2,
    title: "即将雇佣STEM OPT学生的企业",
    description:
      "您有一个真实的岗位空缺，希望在发出offer之前，先正确搭建好岗位描述、监督架构与I-983基础工作。",
  },
  {
    icon: Rocket,
    title: "希望搭建自有公司作为STEM OPT雇主的创始人",
    description:
      "您正在创办或已经运营一家公司，需要让自己STEM OPT延期背后的雇主一方真正合规，而不仅仅是完成递交。",
  },
  {
    icon: ShieldAlert,
    title: "面临审查或核查的现有STEM OPT雇主",
    description:
      "您需要确认现有的岗位职责、监督记录与文件材料，能否经得起DSO或USCIS的审查。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="STEM OPT雇主合规培训适合哪些人？"
      items={audiences}
      ctaLabel="预约合规咨询"
    />
  );
}
