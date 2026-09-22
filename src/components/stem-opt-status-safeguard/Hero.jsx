import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="STEM OPT 雇主合规培训"
      subtitle="为STEM OPT学生提供真实合规的雇主岗位"
      description={
        <>
          STEM OPT延期能否成功，关键在于雇主一方是否真正合规——与学位挂钩的真实岗位职责、
          真实的主管，以及持续的身份维护。我们指导雇主（包括创始人自有公司）正确搭建这套架构，
          并帮助其持续保持合规。
        </>
      }
      ctaLabel="预约评估咨询"
    />
  );
}
