import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "标准化招聘与入职流程",
    description: "每一次招聘都遵循可复用的流程，避免每次有新员工加入时都要重新摸索（或遗漏某个环节）。",
    deliverables: [
      "从offer审批到入职日的结构化招聘流程",
      "新员工入职清单与第一周日程模板",
      "设备、账户与系统权限配置清单",
    ],
    why: "无论是招聘第二位员工还是第二十位员工，可复用的流程正是保持入职体验一致的关键。",
  },
  {
    title: "Offer信准备",
    description: "指导撰写清晰记录岗位、薪酬与入职日期的offer信。",
    deliverables: ["《聘用信与雇佣核实》指导文档"],
    why: "如果岗位、入职日期或薪酬曾出现争议，一封撰写清晰的offer信往往是第一份被审查的文件。",
  },
  {
    title: "I-9表格办理与留存",
    description: "指导完成第一部分与第二部分的填写、证件核验，以及雇主必须遵守的留存时限。",
    deliverables: ["I-9表格填写完成并存档", "留存时限指导"],
    why: "I-9错误是小型雇主最常见、也最容易被处罚的合规漏洞之一。",
  },
  {
    title: "W-4表格办理",
    description: "在首次发薪前收集正确的代扣选择，避免日后代价高昂的更正。",
    deliverables: ["W-4表格填写完成并存档"],
    why: "从第一笔薪资起就正确代扣代缴，可以避免事后再做更正带来的更大麻烦。",
  },
  {
    title: "基础雇佣合规指导",
    description: "为每一位新雇主提供合法招聘与雇佣实践的实用基础知识。",
    deliverables: ["《美国基础雇佣合规指南》文档", "持续答疑支持"],
    why: "扎实掌握合法招聘实践，能帮助您在问题演变为法律风险之前就做出正确决策。",
  },
];

export default function CoreDeliverables() {
  return (
    <PlanBuildLayers
      title="从Offer信到入职首日合规"
      intro="每一位新员工都理应享有同样规范一致的流程。这五项交付内容搭建起从入职首日到日后多年都经得起检验的流程与文件体系。"
      layers={layers}
      tabsLabel="入职搭建顺序"
    />
  );
}
