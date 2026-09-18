import ServiceHero from "@/components/common/ServiceHero";

export default function StemHero() {
  return (
    <ServiceHero
      title={
        <>
          稳获STEM OPT身份。
          <br />
          合规、有保障。
        </>
      }
      subtitle="STEM OPT身份保障计划"
      description={
        <>
          STEM OPT不仅仅是一份延期申请。它需要正确的雇主、正确的雇佣架构，以及正确的合规框架
          协同运作。Keystone Strategies帮助国际STEM毕业生搭建推进STEM OPT所需的雇主、雇佣、培训、
          文件与持续合规架构——将雇主资格、E-Verify、雇佣架构、I-983表格、STEM OPT申请与持续合规，
          整合为一套协同的解决方案。
        </>
      }
      ctaLabel="获取我的STEM OPT评估"
    />
  );
}
