import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="雇佣资格与雇主注册"
      subtitle="注册STEM OPT雇佣所必需的雇主账户"
      description={
        <>
          在公司雇佣STEM OPT学生之前，E-Verify注册是硬性要求，也是其他合作伙伴与客户经常提出的需求。
          我们端到端负责整个注册流程，让您的公司ID顺利签发并可随时使用。
        </>
      }
      ctaLabel="为我的公司注册E-Verify"
    />
  );
}
