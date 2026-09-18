import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="EB-2 / EB-3 绿卡规划"
      subtitle="为长期绿卡路径进行雇主与职位规划"
      description={
        <>
          一份EB-2或EB-3申请的成败，早在PERM或I-140递交之前，就已经取决于背后的雇主与职位架构。
          无论担保方是一家成熟企业，还是您自己创办的公司，我们都会搭建担保职位、为雇主一方做好
          PERM劳工证的准备工作，并在整个递交过程中与移民律师直接协调。
        </>
      }
      ctaLabel="预约绿卡规划咨询"
    />
  );
}
