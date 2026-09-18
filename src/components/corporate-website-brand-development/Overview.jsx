import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "一套看起来像真实、成熟企业的品牌标志与视觉形象",
  "品牌规范手册与核心物料（如名片、邮件签名），确保品牌形象处处保持一致",
  "一个真正体现运营中企业形象的网站，而非占位页面",
  "清晰说明公司业务的内容与网站结构",
  "上线即具备SEO基础配置的响应式网站",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="您的网站往往是所有人首先查看的地方"
      description="无论是研究您的客户、审核账户申请的银行，还是评估申请材料的USCIS官员，都会在线上搜索您的公司。我们确保他们查到的内容，能够真正佐证您的故事。"
      checklist={checklist}
    />
  );
}
