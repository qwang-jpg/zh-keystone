import { FileSearch, ClipboardList, Landmark, HandshakeIcon } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: FileSearch,
    title: "EB-2 / EB-3 类别分析",
    description: "在开始任何职位规划之前，我们会先为您的案件确定正确的申请类别。",
    items: [
      "高等学位/特殊能力（EB-2）与技术工人/专业人员（EB-3）的对比分析",
      "对照类别要求，审核您的资历与职位",
      "类别选择建议咨询",
    ],
  },
  {
    icon: ClipboardList,
    title: "符合PERM要求的职位设计",
    description: "岗位描述与要求必须真正契合PERM招聘流程与劳工部审查的实际预期。",
    items: [
      "岗位职责与最低要求的架构设计需匹配市场工资水平",
      "职位设计经得起PERM招聘流程的审查",
      "协调市场工资认定的时间安排",
    ],
  },
  {
    icon: Landmark,
    title: "雇主架构与支付能力",
    description: "无论担保方是现有企业，还是您为延续这一路径而创办的公司，雇主一方都必须证明其具备真实的招聘能力。",
    items: [
      "审核雇主架构与财务文件",
      "在递交前整理好支付能力证明材料",
      "专门为创始人担保型实体提供指导",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "PERM、I-140与递交协调",
    description: "我们负责准备公司端材料，并在整个时间线中持续跟进，而不仅仅是完成首次递交。",
    items: [
      "准备PERM与I-140所需的公司材料",
      "在整个递交过程中与您的移民律师直接协调",
      "为优先日及后续阶段（I-485/领事馆程序）规划提供指导",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="从选择正确的类别，到PERM、I-140，再到对接下一阶段申请。"
      items={modules}
      showCta
    />
  );
}
