import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="薪资与雇佣管理"
      subtitle="为每一位员工、每一个州提供准确合规的薪资服务"
      description={
        <>
          发放合法的W-2薪资，才能让一封offer信真正落地，这也是E-Verify、STEM OPT与H-1B合规的
          共同前提。我们为您搭建薪资系统，注册正确的州税务与失业保险账户，并建立起公司赖以运作的
          薪酬、代扣与记录留存流程。
        </>
      }
      ctaLabel="预约薪资体系咨询"
    />
  );
}
