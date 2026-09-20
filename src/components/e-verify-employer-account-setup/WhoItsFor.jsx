import { GraduationCap, Building2, AlertTriangle, ClipboardList } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: GraduationCap,
    title: "您希望雇佣一名STEM OPT学生",
    description:
      "除非贵公司已完成E-Verify注册并保持良好状态，否则USCIS不会认可STEM OPT延期申请——这正是您与这次招聘之间的门槛。",
  },
  {
    icon: Building2,
    title: "您即将迎来第一位新员工",
    description: "贵公司此前从未注册过E-Verify或州新员工申报，而这两项都必须在员工入职前完成。",
  },
  {
    icon: AlertTriangle,
    title: "合作伙伴或客户询问您是否已注册",
    description: "E-Verify注册是人力资源合作伙伴与客户常见的询问事项，您需要有一个公司ID随时应答。",
  },
  {
    icon: ClipboardList,
    title: "您不确定所在州有哪些要求",
    description: "新员工申报规则因州而异，在忙于招聘新员工的过程中很容易被忽略。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="为需要提前备好公司ID的雇主而设计"
      items={audiences}
      ctaLabel="为我的公司注册E-Verify"
    />
  );
}
