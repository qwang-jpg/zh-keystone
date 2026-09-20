import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="公司注册给了您一个法律实体，而运营体系才能让它真正持续运转。"
      highlight="这是大多数新公司都会忽略的治理与运营层，直到它演变成问题。"
      paragraphs={[
        "公司注册只是第一步。持续运营需要保持公司记录的最新有效、企业信息的一致准确，以及支撑公司实际运作的实用体系。",
        "我们为您的实体搭建背后的基础设施：整理好治理文件、跟踪州申报截止日期、建立专业的企业身份与运营地址、保持政府记录的最新状态，并提供开箱即用的核心运营文档模板，而无需从零起草。",
      ]}
    />
  );
}
