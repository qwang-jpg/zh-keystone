import { FileSignature, Building2, Users, BadgeCheck, ClipboardList } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const steps = [
  {
    icon: FileSignature,
    title: "谅解备忘录审核与注册",
    description: "我们一次性准确地准备并提交贵公司的E-Verify谅解备忘录。",
  },
  {
    icon: Building2,
    title: "公司档案与雇佣地点搭建",
    description: "根据公司实际的实体架构与地理位置，配置公司档案与雇佣地点信息。",
  },
  {
    icon: Users,
    title: "用户角色与培训引导",
    description: "指导您完成项目管理员与普通用户角色的分配，并完成必要的培训引导。",
  },
  {
    icon: BadgeCheck,
    title: "公司ID签发",
    description: "作为贵公司的E-Verify标识符交付，可直接用于I-983表格、聘用信及各类申请材料。",
  },
  {
    icon: ClipboardList,
    title: "州新员工申报注册",
    description: "这是独立于E-Verify与I-9之外的另一项义务：大多数州要求在新员工入职后的规定时限内，向州申报系统报备信息。我们会核实您所在州的具体要求，并搭建好申报流程。",
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="除了E-Verify注册本身，还涵盖每一次招聘都伴随的州新员工申报义务。"
      items={steps}
      columns="sm:grid-cols-2 lg:grid-cols-4"
      compact
    />
  );
}
