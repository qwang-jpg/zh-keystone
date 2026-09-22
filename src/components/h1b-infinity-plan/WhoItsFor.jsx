import { GraduationCap, ArrowLeftRight, Building2, Rocket } from "lucide-react";
import PlanAudienceGrid from "@/components/common/PlanAudienceGrid";

const audiences = [
  {
    icon: GraduationCap,
    title: "提前规划的OPT / STEM OPT专业人士",
    description: "您目前处于OPT或STEM OPT期间，希望在H-1B时间线变得紧迫之前，就着手搭建真实的企业与雇主基础。",
  },
  {
    icon: ArrowLeftRight,
    title: "面临担保不确定性的H-1B专业人士",
    description: "您目前持有H-1B身份，但由于裁员、更换雇主、长期担保受限或其他雇佣情况，现有雇主能否继续提供担保变得不确定。",
  },
  {
    icon: Building2,
    title: "现有的创始人或企业主",
    description: "您已经拥有或经营一家美国企业，希望评估该公司是否能够发展为合规的雇主架构，以支撑您的H-1B策略。",
  },
  {
    icon: Rocket,
    title: "已准备好创办真实美国企业的专业人士",
    description: "您具备专业能力、可行的商业构想或明确的市场机会，并准备好建立并运营一家真实的美国企业——而不仅仅是为了移民目的注册一家公司。",
  },
];

export default function WhoItsFor() {
  return (
    <PlanAudienceGrid
      title="适合希望主动规划 H-1B 的专业人士"
      items={audiences}
      ctaLabel="获取初步评估"
      bottomText="资格取决于个人情况、企业本身、拟定职位、雇佣架构与移民策略等因素。"
    />
  );
}
