import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="您的品牌与网站，决定了外界如何理解您的企业"
      highlight="不是一个孤立的标志或占位网站，而是围绕企业本身搭建的统一形象。"
      paragraphs={[
        "专业的品牌与线上形象，能让客户、合作伙伴、金融机构及其他第三方，清晰了解公司的定位、业务和对外形象。",
        "我们为您搭建统一的视觉形象、一致的品牌规范，以及一个内容清晰、用户动线明确的完整企业官网，并从上线之初就配备响应式设计与SEO基础。",
      ]}
    />
  );
}
