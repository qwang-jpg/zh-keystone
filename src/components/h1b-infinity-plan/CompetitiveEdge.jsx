import { Landmark, ClipboardCheck, UserCheck, LifeBuoy } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const edges = [
  {
    icon: Landmark,
    title: "远程企业银行服务",
    description: "我们的银行合作关系帮助简化国际创始人的开户流程，为没有SSN的合格客户提供远程开户选项。我们全程指导您准备所需文件与材料；账户审批结果与优惠活动以银行的具体条款为准。",
  },
  {
    icon: ClipboardCheck,
    title: "覆盖企业全生命周期的支持",
    description: "公司注册、企业银行开户、网站建设、员工入职、财务管理与税务协调，整合为一套服务方案，让您无需独自应付繁琐的行政事务。",
  },
  {
    icon: UserCheck,
    title: "经验丰富的团队全程陪伴",
    description: "我们的团队将企业运营经验与移民规划及税务资源相结合。我们统筹各项细节，及早发现潜在问题，帮助您的公司与职业规划持续向前推进。",
  },
  {
    icon: LifeBuoy,
    title: "创业后持续的专业资源支持",
    description: "在H-1B中签之后，您还可继续获得移民律师、注册会计师与保险提供商网络的支持，覆盖申请材料准备、文件审核、税务申报及持续的业务需求。",
  },
];

export default function CompetitiveEdge() {
  return <TabbedFeatureList title="H-1B无限续航计划的竞争优势" items={edges} />;
}
