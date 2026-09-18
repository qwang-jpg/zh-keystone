import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="品牌与线上形象建设"
      subtitle="支撑企业成长的专业网站与品牌形象"
      description={
        <>
          一家真实的企业需要真实的线上形象——无论是面对客户、银行还是移民审查官。我们为您设计
          品牌标志，端到端搭建官网，并配备好SEO基础与内容，确保网站顺利上线。
        </>
      }
      ctaLabel="预约网站与品牌咨询"
    />
  );
}
