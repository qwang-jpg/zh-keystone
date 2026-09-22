import PlanAbout from "@/components/common/PlanAbout";

export default function StemAbout() {
  return (
    <PlanAbout
      heading="STEM OPT身份的稳固程度，取决于其背后的雇主。"
      highlight="STEM OPT Ready Plan 在申请前及后续过程中，协助您完善雇主基础。"
      paragraphs={[
        "仅仅递交I-983表格，并不能构成一套合规的STEM OPT架构。",
        "雇主需要完成E-Verify注册，具备符合条件的职位、正式的培训计划，以及能够在整个STEM OPT延期期间支撑雇佣关系的监督与合规实践。当其中任何一个环节缺失或不一致时，即使申请本身符合资格，身份合规仍可能存在风险。",
      ]}
    />
  );
}
