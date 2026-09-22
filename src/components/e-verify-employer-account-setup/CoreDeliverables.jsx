import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "谅解备忘录审核与注册",
    description: "我们一次性准确地准备并提交贵公司的E-Verify谅解备忘录。",
    deliverables: ["准备E-Verify谅解备忘录", "提交前对申请材料进行准确性审核", "代表贵公司提交谅解备忘录"],
    why: "若谅解备忘录中的实体信息或授权签署人有误，可能导致注册延误数周。",
  },
  {
    title: "公司档案与雇佣地点搭建",
    description: "根据公司实际的实体架构与地理位置，配置公司档案与雇佣地点信息。",
    deliverables: ["在E-Verify中配置公司档案", "搭建与实际所在地相匹配的雇佣地点", "系统中准确反映公司的实体架构"],
    why: "若雇佣地点与实际用工地点不符，可能在后续合规审查中造成信息不一致。",
  },
  {
    title: "用户角色与培训引导",
    description: "指导您完成项目管理员与普通用户角色的分配，并完成必要的培训引导。",
    deliverables: ["分配项目管理员与普通用户角色", "完成E-Verify要求的培训引导", "明确后续账户管理的内部流程"],
    why: "注册完成后，公司内部必须有人长期负责该账户——我们确保这一事项在事前就已明确，而不是等到第一起案例出现后才决定。",
  },
  {
    title: "公司ID签发",
    description: "取得公司专属的 E-Verify Company ID，供 I-983 表格、聘用信及申请材料引用。",
    deliverables: ["取得已签发的有效 Company ID", "可用于I-983表格与聘用信", "可用于移民申请材料"],
    why: "公司ID是后续每一份表格与申请材料都会用到的编号——必须在需要之前就已就绪。",
  },
  {
    title: "州新员工申报注册",
    description:
      "这是独立于E-Verify与I-9之外的另一项义务：大多数州要求在新员工入职后的规定时限内，向州申报系统报备信息。我们会核实您所在州的具体要求，并搭建好申报流程。",
    deliverables: ["核实州新员工申报要求", "为您所在州搭建申报流程", "标明申报时限与截止日期"],
    why: "由于新员工申报独立于E-Verify与I-9之外，很容易被忽略——错过申报时限可能引发州级罚款。",
  },
];

export default function CoreDeliverables() {
  return (
    <PlanBuildLayers
      title="从 MOU 准备到取得 Company ID"
      intro="E-Verify注册是公司层面的一次性流程，但每个阶段都有各自的要求。我们会陪伴贵公司完成每一步，并同步处理第一位新员工入职所伴随的独立州新员工申报义务。"
      layers={layers}
      tabsLabel="E-Verify注册流程顺序"
    />
  );
}
