import ServiceHero from "@/components/common/ServiceHero";

export default function Hero() {
  return (
    <ServiceHero
      title="自雇型H-1B规划"
      subtitle="为创始人主导的H-1B路径搭建雇主架构与职位规划"
      description={
        <>
          一份有力的申请，早在律师递交之前就已经开始：真正契合岗位的职位描述、合规的雇佣关系，
          以及正确完成的注册基础工作。当担保公司正是您自己创办时，这一点同样成立，甚至会受到
          更严格的审视。我们负责搭建企业、职位与雇佣关系，确保自雇型申请经得起考验，
          随后直接与移民律师协调完成递交。
        </>
      }
      ctaLabel="预约申请规划咨询"
    />
  );
}
