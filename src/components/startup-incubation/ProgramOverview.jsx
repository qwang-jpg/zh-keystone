import PlanAbout from "@/components/common/PlanAbout";

export default function ProgramOverview() {
  return (
    <PlanAbout
      heading="为什么公司类型和架构需要一开始就选对？"
      highlight="从商业计划出发，围绕它搭建公司架构。"
      paragraphs={[
        "注册公司远不止是向州政府递交一份申请。您选择的实体类型、注册州、股权架构与管理设置，都会影响公司此后的运营方式、引入新股东、招聘员工、开立账户、融资，以及应对未来合规要求的能力。",
        "Keystone会先了解您真实的业务计划，再据此为公司搭建合适的架构。",
      ]}
    />
  );
}
