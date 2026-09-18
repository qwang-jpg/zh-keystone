import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="公司注册与架构设计"
      subtitle="一次到位、合规且可扩展的公司实体架构"
      description={
        <>
          从选择合适的实体类型与注册州，到向州政府递交注册申请、起草治理文件、申请联邦EIN，
          我们负责您美国公司注册的每一个环节，并整理好日后开户、招聘及移民申请所需的各类档案。
        </>
      }
      ctaLabel="预约免费注册咨询"
    />
  );
}
