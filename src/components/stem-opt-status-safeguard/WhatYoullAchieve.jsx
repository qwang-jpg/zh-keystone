import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "岗位与职责描述设计",
    description:
      "我们审核员工的STEM学位与公司的实际业务，设计出真正契合两者、而非表面挂钩的岗位职责与职称。",
    deliverables: [
      "员工学位与公司业务审核",
      "起草契合STEM要求的职称与岗位职责",
      "完成支持I-983培训计划的《岗位描述》文档",
    ],
    why: "岗位描述若不能真正与学位挂钩，是STEM OPT延期中最受审查关注的一环。",
  },
  {
    title: "真实的雇佣关系",
    description:
      "我们帮您指定合格的主管，并搭建能够体现真实日常监督的管理架构，而非仅停留在纸面的名义安排。",
    deliverables: [
      "指定合格的主管",
      "确定管理与监督架构",
      "整理雇佣关系相关文件记录",
    ],
    why: "真实、可核验的雇佣关系，是区分合规架构与经不起审查的架构的关键所在。",
  },
  {
    title: "持续的STEM OPT身份维护",
    description:
      "岗位正式生效后，我们持续保持全程参与，确保雇主架构在整个延期期间都经得起审查。",
    deliverables: [
      "定期合规跟进",
      "延期期间的日常答疑支持",
      "随情况变化审阅相关文件",
    ],
    why: "我们的支持不会在岗位搭建完成后就结束——雇佣关系需要随情况变化持续保持合规。",
  },
];

export default function WhatYoullAchieve() {
  return (
    <PlanBuildLayers
      title="STEM OPT雇主合规培训涵盖的内容"
      intro="从岗位描述到持续的身份维护，以下每一层都聚焦于USCIS与DSO真正审查的雇佣关系环节。"
      layers={layers}
      tabsLabel="STEM OPT合规模块"
    />
  );
}
