import PlanAbout from "@/components/common/PlanAbout";

export default function ServiceOverview() {
  return (
    <PlanAbout
      heading="申请的成败取决于职位本身，而不仅仅是文书工作"
      highlight="这份职位必须是这家公司真正需要这个人来担任的。"
      paragraphs={[
        "USCIS审查职业类签证申请时，核心始终围绕一个问题：这份工作是否真的需要这个人，在这家公司？当公司由创始人主导时，这个问题会被审视得更加严格，因为雇主与受益人可能是同一个人。",
        "我们会在递交申请之前，就把企业、职位与雇佣关系搭建到位，从根本上回答这个问题，随后直接与您的移民律师协调完成递交。",
      ]}
    />
  );
}
