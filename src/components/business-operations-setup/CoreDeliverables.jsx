import { Globe, MapPinned, FileStack, ShieldCheck, Scale } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: Scale,
    title: "治理文件与合规日历",
    description: "确保公司的官方治理记录持续有效，随时可供银行、投资人或移民审查官索取。",
    items: [
      "股权或管理层变更时，审核并更新运营协议/公司章程",
      "在公司注册州提供注册代理人服务",
      "跟踪年度报告与特许经营税续期，并提供申报提醒",
      "为公司重大决策提供决议与会议记录模板",
    ],
  },
  {
    icon: Globe,
    title: "数字与通信身份",
    description: "每家企业都需要具备的基础设施，让公司看起来、沟通起来都像一家真实企业。",
    items: [
      "首年公司域名注册（1个）及账户搭建",
      "在您自己的域名下搭建企业邮箱账户",
      "指导申请企业电话号码",
    ],
  },
  {
    icon: MapPinned,
    title: "运营地址与政府记录",
    description: "在公司成长或搬迁过程中，确保注册地址与政府备案信息保持准确。",
    items: [
      "运营地址搭建/变更指导",
      "同步更新州及联邦政府系统中的公司信息",
      "提供《公司与状态合规维护指南》文档",
    ],
  },
  {
    icon: FileStack,
    title: "核心业务文档模板",
    description: "您在向客户开票、签署协议、记录团队工时时真正会用到的文档。",
    items: [
      "标准客户服务协议模板",
      "标准公司发票模板",
      "员工工时记录模板",
    ],
  },
  {
    icon: ShieldCheck,
    title: "工伤赔偿保险",
    description: "在问题出现之前，指导您完成法律要求的保险覆盖。",
    items: ["推荐合适的工伤赔偿保险承保商与渠道", "提供办理流程指导及持续答疑"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="五大模块覆盖企业保持合规、日常运营所需的治理记录、基础设施、文档与保险保障。"
      items={modules}
      showCta
    />
  );
}
