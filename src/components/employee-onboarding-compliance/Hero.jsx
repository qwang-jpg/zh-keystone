import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="招聘与入职体系"
      subtitle="标准化的招聘体系，而非每次临时应付"
      description={
        <>
          一份缺失的I-9、一封未签署的聘用信，或是一份过期的W-4，都可能影响数月的周密准备。
          我们搭建可复用的招聘流程与入职清单，以及每一位新员工从聘用信到联邦雇佣表格所需的
          文件与基础合规实践。
        </>
      }
      ctaLabel="预约入职体系咨询"
    />
  );
}
