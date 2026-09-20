import PlanBuildLayers from "@/components/common/PlanBuildLayers";

const layers = [
  {
    title: "实体选择与注册策略",
    description: "我们会根据您计划运营业务的方式，帮您确定合适的实体类型、注册州及股权架构。",
    deliverables: [
      "LLC或公司架构选择",
      "注册州建议",
      "公司名称初步查册与可用性确认",
    ],
    why: "您选择的实体类型与注册州，将在此后多年影响公司的招聘、融资与合规方式。",
  },
  {
    title: "州注册递交与成立",
    description: "我们负责准备并递交所需的州注册申请，并全程跟踪至批准完成。",
    deliverables: [
      "准备并递交州注册申请",
      "跟踪公司成立进度",
      "递交确认与已批准的成立文件",
    ],
    why: "干净、准确递交的注册文件，能避免拖慢后续所有环节的延误与更正。",
  },
  {
    title: "成立与治理文件",
    description: "我们准备用于确立公司股权、管理方式及内部治理的基础文件。",
    deliverables: [
      "公司注册证书/组织章程",
      "运营协议、公司章程或股东协议",
      "适用情况下的股权与管理记录",
    ],
    why: "银行、投资人与未来的联合创始人，都会在公司实际规模化运营前要求查看这些文件。",
  },
  {
    title: "联邦EIN与公司档案",
    description: "我们完成联邦EIN申请流程，并将公司核心成立档案整理归档，以备日后使用。",
    deliverables: [
      "联邦EIN申请",
      "IRS EIN确认文件",
      "整合后的公司信息与成立档案",
    ],
    why: "一份整理有序的成立档案，能在日后与银行、会计师或律师对接时，为您节省大量时间。",
  },
];

export default function CoreServiceModules() {
  return (
    <PlanBuildLayers
      title="核心服务模块"
      intro="以下每个模块，都覆盖公司注册的一个关键阶段——从选择正确的架构，到完成您此后业务运营将持续依赖的文件与档案。"
      layers={layers}
      note="实体架构 → 州注册递交 → 治理文件 → EIN与档案"
      tabsLabel="公司注册搭建流程"
    />
  );
}
