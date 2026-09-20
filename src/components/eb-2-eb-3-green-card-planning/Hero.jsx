import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="EB路径规划项目"
      subtitle="您的绿卡之路，不该只押注在一位雇主的时间表上。"
      description={
        <>
          EB路径规划项目帮助国际专业人才搭建推进EB-2/EB-3职业类绿卡路径所需的雇主架构、职位体系、运营记录与长期支持体系。从公司注册、雇主搭建，到市场工资认定（PWD）与PERM协调、I-140雇主就绪，再到持续运营，我们帮助您把每一个阶段串联进一条完整的路径。
        </>
      }
      ctaLabel="预约免费EB路径评估"
    />
  );
}
