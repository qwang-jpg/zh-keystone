import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "雇主搭建与资格",
    description: "搭建支撑STEM OPT雇佣所需的雇主基础。",
    deliverables: [
      "公司与雇主架构",
      "EIN与雇主注册支持",
      "E-Verify注册支持",
      "企业运营基础搭建",
      "雇主合规框架",
      "运营准备指导",
    ],
    why: "不仅仅是创建一个实体，而是搭建能够支撑合法雇佣关系的雇主架构。",
  },
  {
    title: "雇佣与监督架构",
    description: "为 STEM OPT 员工建立实际运作的雇佣与监督安排。",
    deliverables: [
      "学位与职位对应",
      "职位与职责设计",
      "主管与汇报关系",
      "雇佣文件",
      "入职框架",
      "薪资与雇佣流程指导",
      "培训与绩效管理框架",
    ],
    why: "每一个环节都应真实反映员工将如何实际工作、成长与接受监督。",
  },
  {
    title: "STEM OPT申请支持",
    description: "把雇佣架构转化为一份清晰、一致的STEM OPT申请。",
    deliverables: [
      "I-983表格培训计划支持",
      "学位与职位对应",
      "培训目标与目的",
      "监督与评估框架",
      "申请文件清单",
      "I-765表格准备指导",
      "学校与DSO流程指导",
      "递交前一致性审核",
    ],
    why: "申请材料是背后架构的书面记录——而不是用来替代这套架构的东西。",
  },
  {
    title: "持续身份与雇主合规",
    description: "在 STEM OPT 开始后，持续支持雇主与雇佣体系的合规运作。",
    deliverables: [
      "雇主申报指导",
      "重大变更指导",
      "I-983表格评估支持",
      "雇佣文件指导",
      "薪资与运营合规指导",
      "更换雇主支持",
      "持续身份规划",
      "未来移民策略",
    ],
    why: "因为STEM OPT合规不会在申请递交后就结束。",
  },
];

export default function WhatYoullGet() {
  return (
    <PlanBuildLayers
      title="我们与您共同搭建的内容"
      intro="本计划从雇主、雇佣、申请与持续合规四个方面，搭建获得并维持 STEM OPT 身份所需的体系。"
      layers={layers}
      note="服务范围与持续支持以合作协议为准。STEM OPT申请材料的递交将与您学校的DSO协调，并在适用情况下与专业移民律师协作。"
      tabsLabel="STEM OPT搭建流程"
    />
  );
}
