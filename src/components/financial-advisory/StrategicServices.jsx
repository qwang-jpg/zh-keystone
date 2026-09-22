import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "初创企业记账与会计体系搭建",
    description: "从清晰、准确的账目和统一的业务记录流程开始。",
    deliverables: [
      "记账平台、科目表与银行账户连接",
      "交易分类与每月对账",
      "整理好、可供会计师或CPA审阅的记录",
    ],
    why: "从第一天起就保持一致的记账流程，会让此后的每一次申报与财务决策都更加高效。",
  },
  {
    title: "年度报税与公司续期规划",
    description: "通过一份清晰的年度日程，明确知道该申报什么、何时申报。",
    deliverables: [
      "联邦与州税务申报日历",
      "年度报告、公司续期及适用的特许经营税",
      "文件清单与临近截止日期的提醒",
    ],
    why: "错过续期或申报，问题往往不在文件本身，而在于没有提前知道日期即将到来。",
  },
  {
    title: "联邦与州税务申报协调",
    description: "整理税务专业人士所需的记录，协调推进申报流程。",
    deliverables: [
      "账目审核与配套文件准备",
      "CPA协调与后续信息补充请求",
      "申报进度与截止日期跟踪",
    ],
    why: "申报延误通常来自记录缺失，而非申报表本身——我们会在问题变得紧迫之前先补上这个缺口。",
  },
  {
    title: "持续财务顾问与CPA协调",
    description: "随着企业成长，让您的财务记录与专业支持始终保持衔接。",
    deliverables: [
      "定期记录审阅与记账问题处理",
      "与会计师、CPA及薪资服务商的协调对接",
      "为招聘、融资与商业决策准备好相关记录",
    ],
    why: "企业成长过程中，财务流程也需要同步跟上，而不是变成一年一度的临时补救。",
  },
];

export default function StrategicServices() {
  return (
    <PlanBuildLayers
      title="核心服务内容"
      intro="四项相互衔接的服务，帮助您有序管理账目、申报与财务协调。"
      layers={layers}
      note="具体支持内容会根据贵公司的实际情况调整。正式的税务立场、CPA意见及持牌专业人士的判定，仍由相应的合格专业人士负责作出。"
      tabsLabel="财务管理搭建顺序"
    />
  );
}
