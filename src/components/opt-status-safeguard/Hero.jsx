import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="OPT身份保障计划"
      subtitle="以真实工作，守护您的OPT身份"
      description={
        <>
          Keystone Strategies通过真实的、与专业相关的工作机会及系统化的身份支持，帮助国际毕业生管理OPT失业风险，
          让您在积累真实工作经验的同时，始终保持合规。
        </>
      }
      ctaLabel="获取我的OPT评估"
    />
  );
}
