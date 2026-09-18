import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="企业银行账户开设支持"
      subtitle="让您的企业银行账户顺利开通、完成注资并具备运营条件"
      description={
        <>
          新注册的公司如果没有企业银行账户，就无法发放薪资、签订租约或接收第一笔款项。
          我们提前准备好每一份材料，并全程指导您远程或线下完成美国银行的开户流程，
          让公司从第一天起就具备资金和运营条件。
        </>
      }
      ctaLabel="预约银行开户咨询"
    />
  );
}
