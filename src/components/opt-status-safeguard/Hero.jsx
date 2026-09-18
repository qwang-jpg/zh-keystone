import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title={
        <>
          Keystone Strategies
          <br />
          OPT就业保障计划
        </>
      }
      subtitle="一站式解决OPT失业计时压力"
      description={
        <>
          合规化解OPT失业困境——Keystone Strategies专注于为处于OPT失业期的毕业生提供合法合规的解决方案，
          涵盖真实工作安置、端到端的OPT申请指导、递交支持，以及长期身份规划咨询——确保身份平稳过渡，
          并为未来的STEM OPT、H-1B及移民申请打下稳固基础。
        </>
      }
      ctaLabel="立即预约一对一评估"
    />
  );
}
