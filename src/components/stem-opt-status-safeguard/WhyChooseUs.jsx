import { FileText, Users2, ShieldCheck, Award } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const advantages = [
  {
    icon: FileText,
    title: "经得起审查的岗位描述设计",
    description:
      "我们撰写的岗位职责与职称，真正与员工的STEM学位及公司实际业务相关联——这正是每一次I-983与STEM OPT审查都会回归的核心基础。",
  },
  {
    icon: Users2,
    title: "真实的监督架构，而非纸面安排",
    description:
      "我们帮您指定合格的主管，并搭建能够真实反映日常监督工作的管理架构——这正是区分合规雇佣关系与名义安排的关键。",
  },
  {
    icon: ShieldCheck,
    title: "持续合规，而非一次性递交",
    description:
      "我们在整个STEM OPT延期期间提供持续答疑支持与定期跟进，确保雇主架构在情况变化时依然保持合规。",
  },
  {
    icon: Award,
    title: "背靠完整的移民与企业顾问团队",
    description:
      "岗位描述设计、监督架构搭建与身份维护指导，均与我们更广泛的公司注册、薪资与移民申请团队协同配合，确保万无一失。",
  },
];

export default function WhyChooseUs() {
  return (
    <TabbedFeatureList
      title="STEM OPT雇主合规培训的核心优势"
      items={advantages}
    />
  );
}
