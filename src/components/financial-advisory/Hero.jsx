import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="企业财税体系搭建"
      description={
        <>
          Keystone Strategies 为新公司搭建所需的基础记账与财务管理框架，并规划好年度报税与公司
          续期日历，确保注册后的每一个环节都不遗漏。
          <br />
          我们把合规从焦虑的来源，转变为一套您真正可以依赖的体系。
        </>
      }
      ctaLabel="预约财务评估咨询"
    />
  );
}
