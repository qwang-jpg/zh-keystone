import { Building2, Globe, ClipboardList, Gift } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Building2,
    title: "您刚注册公司，需要立即投入运营",
    description:
      "EIN与公司注册文件都已备齐，但如果没有已注资的银行账户，您就无法发放薪资、签订租约或接收第一笔款项。",
  },
  {
    icon: Globe,
    title: "您是非居民创始人",
    description:
      "并非所有银行都能为没有美国地址或SSN的创始人提供远程开户服务——您需要的是真正能做到这一点的银行。",
  },
  {
    icon: ClipboardList,
    title: "您仍在混用个人与公司资金",
    description:
      "资金混用是引发IRS审查的常见诱因，还可能让您面临\"揭开公司面纱\"的责任风险。一个专属账户，才能真正将两者分开。",
  },
  {
    icon: Gift,
    title: "您不想错过账户奖励",
    description:
      "美国各大银行都为新开账户提供现金奖励，但前提是您需要满足条款细则中的达标要求——您更希望有人替您跟踪这些细节。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="为需要一次做对银行开户的创始人而设计"
      items={audiences}
      ctaLabel="预约银行开户咨询"
    />
  );
}
