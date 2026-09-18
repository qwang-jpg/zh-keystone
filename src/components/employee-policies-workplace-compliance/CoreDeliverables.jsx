import { BookOpenCheck, ShieldAlert, ClipboardList, UserCheck } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: BookOpenCheck,
    title: "员工手册制定",
    description: "涵盖每位雇主必备制度的书面手册，针对您实际用工所在州量身定制。",
    items: [
      "自由雇佣关系与行为准则条款",
      "按所在州要求撰写的带薪休假、病假与请假制度",
      "薪资、工时与发薪周期制度",
    ],
  },
  {
    icon: ShieldAlert,
    title: "反骚扰与EEO制度",
    description: "配有真实投诉处理流程的反歧视与反骚扰制度，而非千篇一律的套话段落。",
    items: [
      "反骚扰与平等就业机会制度",
      "投诉与调查处理流程",
      "为管理者提供处理举报问题的指导",
    ],
  },
  {
    icon: ClipboardList,
    title: "法定职场公示",
    description: "根据您所在的具体州，确定必须张贴的联邦与州劳工法公示内容。",
    items: [
      "联邦劳工法公示清单",
      "各州具体的公示要求",
      "针对实体办公场所与远程办公场景的公示指导",
    ],
  },
  {
    icon: UserCheck,
    title: "员工分类审核",
    description: "用工分类错误，是初创阶段雇主最常见、也是代价最高昂的错误之一。",
    items: [
      "豁免与非豁免员工分类审核",
      "员工与独立承包商分类审核",
      "针对分类错误岗位提供更正指导",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="四大模块涵盖每位雇主都必须具备的员工手册、制度、公示与分类审核。"
      items={modules}
    />
  );
}
