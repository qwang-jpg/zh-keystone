import { ArrowLeftRight, FileCheck, GraduationCap, Rocket, Stamp } from "lucide-react";
import AudienceExplorer from "@/components/common/AudienceExplorer";

const goals = [
  {
    label: "维持OPT身份",
    icon: GraduationCap,
    badgeLabel: "建议启动时间",
    badgeValue: "提前2个月",
    secondaryBadgeLabel: "团队服务周期",
    secondaryBadgeValue: "2周",
    heading: "让您的OPT持续有效、身份合规",
    body: "我们通过500多家合作与孵化企业组成的网络，帮助OPT持有者找到真实、合规的工作机会，并指导完成所有必要的申报材料，帮助您在失业天数限制内建立合规就业安排。我们建议在需要之前约两个月启动，团队通常需要两周即可帮客户完成全部准备。",
    cta: "预约OPT免费咨询",
  },
  {
    label: "维持STEM OPT身份",
    icon: FileCheck,
    badgeLabel: "建议启动时间",
    badgeValue: "提前2个月",
    secondaryBadgeLabel: "团队服务周期",
    secondaryBadgeValue: "4周",
    heading: "让您的STEM OPT延期合规有效",
    body: "我们协助您与雇主共同设计I-983培训计划，准备I-765延期申请，并跟进可能出现的补件通知（RFE），直至最终评估完成，同时确保真实的雇主合规——包括岗位职责、监督安排与雇佣关系都经得起审查。我们建议在延期窗口开放前约两个月启动，团队通常需要四周完成整个流程。",
    cta: "预约STEM OPT免费咨询",
  },
  {
    label: "首次申请H-1B",
    icon: Stamp,
    badgeLabel: "建议启动时间",
    badgeValue: "提前3个月",
    secondaryBadgeLabel: "团队服务周期",
    secondaryBadgeValue: "6-8周",
    heading: "无需雇主担保，递交您的首份H-1B申请",
    body: "通过 H-1B Infinity Plan，我们负责公司注册、EIN申请、治理文件、E-Verify以及各项运营要求，让您合法创立企业，并获得逐年参与 H-1B 抽签的资格，参与年数不受限，无需雇主担保。我们建议提前约三个月启动，团队通常需要六到八周为客户完成全部准备工作。",
    cta: "预约H-1B申请免费咨询",
  },
  {
    label: "转移H-1B",
    icon: ArrowLeftRight,
    badgeLabel: "建议启动时间",
    badgeValue: "越快越好",
    secondaryBadgeLabel: "团队服务周期",
    secondaryBadgeValue: "6-8周",
    heading: "摆脱对雇主担保的依赖，转移您的H-1B",
    body: "无论您是刚刚被裁员、正处于宽限期，还是只是想摆脱对某个雇主的依赖，我们都能帮您将H-1B转移至合规的自雇型公司架构——享有与传统雇主申请相同的法律身份与权利。我们负责岗位架构设计、雇主端申请材料、薪资体系以及顺利转移所需的E-Verify设置。我们建议尽快启动，尤其是在宽限期内，团队通常需要六到八周完成转移。",
    cta: "预约H-1B转移免费咨询",
  },
  {
    label: "创办企业",
    icon: Rocket,
    badgeLabel: "建议启动时间",
    badgeValue: "随时可以开始",
    secondaryBadgeLabel: "团队服务周期",
    secondaryBadgeValue: "约8周",
    heading: "由我们负责搭建，您专注创业本身",
    body: "如果身份不是您的顾虑，只是不想亲自处理公司类型选择、州注册、EIN申请与治理文件等事务，我们可以为您办理整个公司注册流程，并整理好日后开户、招聘及合规日常运营所需的各类档案。您随时准备好即可开始，整个搭建工作大约需要八周完成。",
    cta: "预约创业免费咨询",
  },
];

export default function WhereAreYouNow() {
  return (
    <AudienceExplorer
      id="path"
      title="您的目标是什么？"
      description="告诉我们您想要实现的目标，我们将为您展示相应的时间线与支持方案。"
      items={goals.map((goal) => ({
        ...goal,
        secondaryCta: "查看客户案例",
        secondaryHref: "/our-cases",
        ctaHref: "/contact",
      }))}
    />
  );
}
