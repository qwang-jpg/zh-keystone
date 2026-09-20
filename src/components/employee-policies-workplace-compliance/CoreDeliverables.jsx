import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "员工手册制定",
    description: "涵盖每位雇主必备制度的书面手册，针对您实际用工所在州量身定制。",
    deliverables: [
      "自由雇佣关系与行为准则条款",
      "按所在州要求撰写的带薪休假、病假与请假制度",
      "薪资、工时与发薪周期制度",
    ],
    why: "按您所在州量身定制的手册，才真正经得起考验，而不是一份从网上下载的通用模板。",
  },
  {
    title: "反骚扰与EEO制度",
    description: "配有真实投诉处理流程的反歧视与反骚扰制度，而非千篇一律的套话段落。",
    deliverables: [
      "反骚扰与平等就业机会制度",
      "投诉与调查处理流程",
      "为管理者提供处理举报问题的指导",
    ],
    why: "背后有真实投诉处理流程支撑的制度，才能在问题一旦被举报时真正保护您。",
  },
  {
    title: "法定职场公示",
    description: "根据您所在的具体州，确定必须张贴的联邦与州劳工法公示内容。",
    deliverables: [
      "联邦劳工法公示清单",
      "各州具体的公示要求",
      "针对实体办公场所与远程办公场景的公示指导",
    ],
    why: "遗漏一项法定公示，是成长中的雇主最容易出现、也最本可避免的合规漏洞之一。",
  },
  {
    title: "员工分类审核",
    description: "用工分类错误，是初创阶段雇主最常见、也是代价最高昂的错误之一。",
    deliverables: [
      "豁免与非豁免员工分类审核",
      "员工与独立承包商分类审核",
      "针对分类错误岗位提供更正指导",
    ],
    why: "尽早纠正分类错误，远比在收到投诉或接受审计后再去辩护要划算得多。",
  },
];

export default function CoreDeliverables() {
  return (
    <PlanBuildLayers
      title="四大模块，护航招聘之间的每一天"
      intro="入职只是让一位员工开始工作。这四大模块搭建起此后规范每一位员工的制度、公示与分类审核。"
      layers={layers}
      tabsLabel="职场合规搭建流程"
    />
  );
}
