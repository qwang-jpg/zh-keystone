import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="公司注册与架构设计"
      subtitle="从公司成立第一步，就把架构搭对"
      description={
        <>
          从实体类型选择、州注册，到EIN登记与治理文件起草，Keystone帮助创始人根据企业实际的
          运营、招聘与发展方式，建立美国公司。
        </>
      }
      ctaLabel="预约免费注册咨询"
    />
  );
}
