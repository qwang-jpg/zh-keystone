import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="企业银行账户开设支持"
      subtitle="远程开设美国企业银行账户"
      description={
        <>
          Keystone帮助符合条件的创始人在美国主要银行开设企业账户，无需SSN，也无需亲自前往银行网点。
          从材料准备、银行经理对接，到账户开通与银行卡寄送，我们全程为您管理整个流程。
          <span className="mt-3 block font-semibold text-white/85">
            最快24小时即可锁定银行开户预约，账户开通后实体卡通常在一周内送达。
          </span>
        </>
      }
      ctaLabel="预约银行开户咨询"
    />
  );
}
