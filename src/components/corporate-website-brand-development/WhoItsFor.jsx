import { Palette, PanelsTopLeft, Search, Rocket } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Palette,
    title: "您的品牌形象还不像一家企业",
    description:
      "您的标志、配色与物料是零散拼凑而成，没有品牌规范来确保它们在网站与业务文件中保持一致。",
  },
  {
    icon: PanelsTopLeft,
    title: "您还没有一个真正的网站",
    description:
      "客户、合作伙伴与银行无法在线上清楚了解您公司的业务与实力，或者您目前只有一个占位页面。",
  },
  {
    icon: Search,
    title: "您的网站没有为搜索而搭建",
    description:
      "如果没有从一开始就配置好搜索友好的结构与SEO基础，潜在客户会更难在网上找到您的公司。",
  },
  {
    icon: Rocket,
    title: "您需要赶在下一场重要会面前上线",
    description:
      "融资、合作或银行沟通即将到来，您需要一个能让企业看起来真实可信的网站与公司简介。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="专为业务规模已超出线上形象的创始人打造"
      items={audiences}
      ctaLabel="预约网站与品牌咨询"
    />
  );
}
