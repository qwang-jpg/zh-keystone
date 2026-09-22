import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="注册完成后，还需要一套运营体系"
      highlight="治理与运营准备容易被新公司忽视，往往等到问题出现才开始补做。"
      paragraphs={[
        "公司注册只是第一步。持续运营需要保持公司记录的最新有效、企业信息的一致准确，以及支撑公司实际运作的实用体系。",
        "我们为公司搭建运营基础：整理好治理文件、跟踪州申报截止日期、建立专业的企业对外形象并梳理运营地址、保持政府记录的最新状态，并提供开箱即用的核心运营文档模板，而无需从零起草。",
      ]}
    />
  );
}
