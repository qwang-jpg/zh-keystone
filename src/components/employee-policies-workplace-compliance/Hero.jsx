import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="员工制度与职场合规"
      subtitle="真正保护公司的职场制度，而不只是新员工档案里的一份文件"
      description={
        <>
          入职文书只是让一位员工开始工作。而职场制度，才是此后规范每一位员工的核心：
          员工手册、反骚扰与EEO制度、法定必须张贴的劳工法公示，以及每一位员工用工分类的清晰界定。
        </>
      }
      ctaLabel="预约职场合规咨询"
    />
  );
}
