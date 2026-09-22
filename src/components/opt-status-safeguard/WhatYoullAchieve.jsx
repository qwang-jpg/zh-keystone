import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "工作机会匹配",
    description: "通过Keystone的企业网络获取工作机会。我们会根据您的学位、经验、职业方向与OPT时间线，在自有的雇主生态中为您匹配合适的岗位。",
    deliverables: ["500+家合作企业资源", "2,000+个真实工作机会", "最快48小时获得offer"],
    why: "合适的网络比单纯的数量更重要——能否接触到真实、对口的岗位，才是真正缩短失业计时的关键。",
  },
  {
    title: "OPT申请支持",
    description: "按申请时间安排，为 OPT 申请准备提供支持。",
    deliverables: [
      "OPT时间线规划",
      "DSO与I-20流程指导",
      "I-765表格填写指导",
      "申请材料清单",
      "递交前材料审核",
      "EAD办理流程指导",
    ],
    why: "准确、及时地准备申请，有助于减少审理延误或补件通知（RFE）对 OPT 时间安排的影响。",
  },
  {
    title: "就业与合规支持",
    description: "确保您的OPT雇佣关系被妥善记录。",
    deliverables: [
      "专业与岗位对口性核查",
      "岗位职责审核",
      "雇佣文件准备指导",
      "入职支持",
      "雇主信息报备指导",
      "雇佣记录维护",
      "更换雇主指导",
    ],
    why: "只有妥善记录的雇佣关系，才能在SEVIS记录或雇主信息被审查时，切实保护您的身份。",
  },
  {
    title: "职业发展与身份延续",
    description: "着眼于第一份OPT工作之后的规划。对于正在准备下一阶段的客户，Keystone可以帮助评估：",
    deliverables: [
      "STEM OPT 申请准备情况",
      "未来的E-Verify雇主要求",
      "STEM OPT工作机会",
      "H-1B担保雇主机会",
      "职业发展路径选项",
      "职业类移民规划",
    ],
    why: "您的第一份OPT工作只是一块跳板——提前规划下一阶段，能让您的选择始终保持开放，而不是日后从零开始。",
  },
];

export default function WhatYoullAchieve() {
  return (
    <PlanBuildLayers
      title="覆盖 OPT 就业、合规与后续规划"
      intro="从为您匹配与专业相关的工作机会，到妥善记录雇佣关系、规划身份的下一步——这一整套项目覆盖您OPT全程的每一个环节。"
      layers={layers}
      tabsLabel="OPT项目模块"
    />
  );
}
