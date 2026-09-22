import { Scale, Globe, MapPinned, FileStack } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Scale,
    title: "您的治理记录散落在各个邮箱与云盘中",
    description:
      "公司章程、决议与会议记录散落在各自最后保存的地方，而不是集中整理成一套银行、会计师或未来投资人真正能够查阅的记录。",
  },
  {
    icon: Globe,
    title: "您的公司还没有专属域名与企业邮箱",
    description: "您仍在用个人邮箱运营公司，没有专属域名，这会影响银行、客户与合作伙伴对公司的专业印象。",
  },
  {
    icon: MapPinned,
    title: "您的注册地址与实际运营方式不符",
    description: "注册代理人地址、邮寄地址与运营地址已经混淆，而您的政府记录也未同步更新。",
  },
  {
    icon: FileStack,
    title: "您每次都要从零起草客户协议",
    description: "客户协议、发票与公司记录每次都是临时搭建，而不是在现成模板的基础上调整完成。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="专为已完成注册但尚未搭建运营体系的创始人而设计"
      items={audiences}
      ctaLabel="预约运营搭建咨询"
    />
  );
}
