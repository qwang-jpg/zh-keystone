import PlanAbout from "@/components/common/PlanAbout";

export default function ServicesOverview() {
  return (
    <PlanAbout
      heading="每家公司从第一天起都需要一套财务基础"
      highlight="现在就搭建记账体系，而不是等到报税季。"
      paragraphs={[
        "新成立的公司无需等到报税季才开始整理财务。从第一笔业务交易起，公司就应该拥有清晰的记账体系、井然有序的财务记录、对即将到来的报税与公司申报要求的清晰把握，以及在需要时与会计师或税务专业人士协作的流程。",
        "Keystone帮助您搭建好这套基础，并在企业成长过程中持续协调好各个环节。",
      ]}
    />
  );
}
