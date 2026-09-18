import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "设计并上线一个网站通常需要多长时间？",
    answer:
      "具体时间取决于项目范围，以及内容与反馈的往返速度，但在品牌方向确定后，一个基础的公司官网通常在几周内即可从启动完成到上线。",
  },
  {
    question: "如果我已经有喜欢的标志或品牌方向怎么办？",
    answer:
      "我们很乐意在您现有的标志或品牌方向基础上搭建。标志设计与修改轮次的服务，适用于从零开始设计或希望进行品牌焕新的客户。",
  },
  {
    question: "网站内容是由你们撰写，还是需要我自己提供？",
    answer:
      "我们会与您深入沟通业务、服务与背景信息后，负责网站与公司简介的完整内容规划与撰写制作，您无需自己动笔。",
  },
  {
    question: "这个网站能否经得起移民申请审查？",
    answer:
      "我们搭建的网站会清晰、准确地反映公司真实的业务范围与运营情况，这正是网站作为辅助证明材料在审查中能够经得起考验的关键。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="网站与品牌建设 — 常见问题" faqs={faqs} />;
}
