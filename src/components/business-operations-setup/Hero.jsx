import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="公司治理与持续合规"
      subtitle="让您的治理文件与运营体系始终保持合规有效"
      description={
        <>
          一家纸面上的公司，和一家能够真正运营的公司并不相同。我们负责维护您的公司章程或运营协议、
          注册代理人与年度申报的合规有效，并处理实际的身份与运营层面事务——域名、邮箱、电话、
          注册地址、政府备案，以及您真正会用到的合同模板，让企业从第一天起就拥有真实的运营基础设施
          与清晰的治理记录。
        </>
      }
      ctaLabel="预约运营搭建咨询"
    />
  );
}
