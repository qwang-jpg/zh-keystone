import { FileText, IdCard, Receipt, ShieldCheck, ListChecks } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: ListChecks,
    title: "标准化招聘与入职流程",
    description: "每一次招聘都遵循可复用的流程，避免每次新员工入职时都要重新摸索（或遗漏某个环节）。",
    items: [
      "从offer审批到入职日的结构化招聘流程",
      "新员工入职清单与第一周日程模板",
      "设备、账户与系统权限配置清单",
    ],
  },
  {
    icon: FileText,
    title: "Offer信准备",
    description: "指导撰写清晰记录岗位、薪酬与入职日期的offer信。",
    items: ["《聘用信与雇佣核实》指导文档"],
  },
  {
    icon: IdCard,
    title: "I-9表格办理与留存",
    description: "指导完成第一部分与第二部分的填写、证件核验，以及雇主必须遵守的留存时限。",
    items: ["I-9表格填写完成并存档", "留存时限指导"],
  },
  {
    icon: Receipt,
    title: "W-4表格办理",
    description: "在首次发薪前收集正确的代扣选择，避免日后代价高昂的更正。",
    items: ["W-4表格填写完成并存档"],
  },
  {
    icon: ShieldCheck,
    title: "基础雇佣合规指导",
    description: "为每一位新雇主提供合法招聘与雇佣实践的实用基础知识。",
    items: ["《美国基础雇佣合规指南》文档", "持续答疑支持"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="从可复用的招聘流程，到每一位新员工入职首日所需的文书工作与合规指导。"
      items={deliverables}
      columns="sm:grid-cols-2"
    />
  );
}
