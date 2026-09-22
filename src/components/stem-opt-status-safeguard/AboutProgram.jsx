import PlanAbout from "@/components/common/PlanAbout";

export default function AboutProgram() {
  return (
    <PlanAbout
      heading="STEM OPT合规成败，取决于USCIS真正审查的那些细节。"
      highlight="不只完成一次申请，更要让雇佣关系在整个延期期间持续合规。"
      paragraphs={[
        "STEM OPT雇主合规培训帮助正确搭建STEM OPT延期中雇主一方的架构，无论该雇主是现有企业，还是创始人为担保自己的合规职位而创办的公司。我们专注于USCIS与DSO最关注的核心要素：岗位职责是否真正与员工的STEM学位相关、是否有真实的主管监督工作，以及雇佣关系是否经得起真实性考验，而非名义安排。",
        "岗位搭建完成后，我们的支持并未结束。我们会通过定期跟进与持续答疑保持全程参与，确保雇佣关系在整个STEM OPT延期期间都经得起考验。",
      ]}
    />
  );
}
