import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="一旦您想雇佣STEM OPT学生，E-Verify注册就不再是可选项"
      highlight="除非雇主已完成E-Verify注册并保持良好状态，否则USCIS不会认可STEM OPT延期申请。"
      paragraphs={[
        "E-Verify是雇主用来确认新员工是否具备在美国合法工作资格的联邦系统。对大多数公司而言，这项注册是可选的，但一旦您想雇佣STEM OPT学生，它就成为强制要求。",
        "注册是公司层面的一次性流程：签署E-Verify谅解备忘录、搭建公司档案与雇佣地点信息、分配用户角色，并完成必要的项目培训引导。我们全流程负责整个流程，确保您的公司在需要之前，就已拥有有效的E-Verify账户与公司ID。",
      ]}
    />
  );
}
