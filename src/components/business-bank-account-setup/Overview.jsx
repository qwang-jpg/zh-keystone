import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="企业银行账户为何刻不容缓"
      highlight="无需 SSN、无需前往网点，也可开设并启用企业账户。"
      paragraphs={[
        "美国公司需要一个专属的企业账户来接收付款、支付费用、保持清晰的公司记录，并实现与股东个人财务的独立运营。对于国际创始人而言，如果没有SSN、无法前往美国银行网点，或不清楚哪些银行能够支持公司的股权架构，企业银行开户往往会变得更加复杂。",
        "Keystone帮助您扫清这些障碍，为您匹配美国主要银行的开户方案，而非仅限金融科技公司账户，并在所需公司信息备齐后，最快可在24小时内为符合条件的客户安排银行经理面谈。",
      ]}
    />
  );
}
