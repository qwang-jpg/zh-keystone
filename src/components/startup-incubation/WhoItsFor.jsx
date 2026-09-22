import { Compass, Globe2, Users, Rocket } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: Compass,
    title: "首次在美创业的创始人",
    description: "您正在注册第一家美国公司，需要在实体类型、注册州、股权架构以及完成注册流程所需的各项步骤上获得专业指导。",
  },
  {
    icon: Globe2,
    title: "国际创始人",
    description: "您正在搭建一家美国企业，需要在州注册、EIN申请、公司档案及基础公司文件方面获得专业支持。",
  },
  {
    icon: Users,
    title: "计划招聘员工的创始人",
    description: "您预计公司将招聘员工、建立薪资体系或搭建雇主基础架构，希望公司架构从一开始就能兼顾这些未来的运营需求。",
  },
  {
    icon: Rocket,
    title: "成长型企业与新业务",
    description: "您正在成立新的实体、拓展美国业务或开辟新的业务线，需要从一开始就建立清晰的公司架构与有序的公司档案。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="适合既要完成注册，也要规划公司架构的创始人"
      items={audiences}
      ctaLabel="预约免费注册咨询"
    />
  );
}
