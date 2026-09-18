import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "开设企业银行账户是否必须人在美国？",
    answer:
      "不一定。多家美国主要银行支持境外创始人完全远程开户，只要您的公司注册文件、EIN与身份核验材料齐全。我们会帮您挑选适合自身情况的银行，并全程指导相应的开户流程。",
  },
  {
    question: "开户通话前需要准备哪些材料？",
    answer:
      "通常需要公司章程/注册证书、EIN确认信、股权与管理层信息，以及每位签字人的政府颁发身份证件。我们会与您选定的银行确认具体清单，并提前协助您备齐所有材料。",
  },
  {
    question: "开户通常需要多长时间？",
    answer:
      "材料准备就绪后，大多数企业账户可以在与银行经理预约的一次通话内完成开户。后续的核验及卡片/支票发放可能还需几个工作日，具体取决于银行。",
  },
  {
    question: "新账户现金奖励是否有保证？",
    answer:
      "奖励优惠及达标条件由银行设定，且会不时变化。我们在为您开户时会核查当前的优惠信息，并确保您理解并满足相应条件，但最终决定权在银行。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="企业银行开户 — 常见问题" faqs={faqs} />;
}
