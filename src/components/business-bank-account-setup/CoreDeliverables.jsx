import { ClipboardList, Video, Gift } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: ClipboardList,
    title: "开户前材料与信息准备",
    description:
      "在您与银行接触之前，我们会收集齐银行会要求的所有公司及个人信息，让开户通话快速高效，而不是临时东拼西凑。",
    items: [
      "1次专属银行开户咨询",
      "共同完成《企业银行信息表》",
      "整理并备齐公司注册文件、EIN确认信及股权信息",
    ],
  },
  {
    icon: Video,
    title: "全程指导开户",
    description:
      "我们直接与银行客户经理对接，全程指导您（或您指定的代理人）远程或线下完成整个开户流程。",
    items: [
      "预约银行经理的线上开户会议",
      "实时指导完成银行的申请与核验步骤",
      "企业银行账户完全开通并确认",
    ],
  },
  {
    icon: Gift,
    title: "把握新账户奖励",
    description:
      "美国各大银行经常为新开企业账户提供现金奖励。我们确保您符合条件并真正拿到奖励，而不会因为条款细则而错失机会。",
    items: [
      "提前锁定符合奖励条件的账户与优惠方案",
      "清楚说明达标所需的活动要求",
      "典型奖励金额区间：400-500美元",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="以下每一项服务，都覆盖从材料准备到账户成功注资运营的全过程——而不只是为您引荐一位银行经理。"
      items={deliverables}
      columns="lg:grid-cols-3"
    />
  );
}
