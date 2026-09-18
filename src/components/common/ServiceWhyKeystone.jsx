import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const defaultDescription =
  "在Keystone，我们设计的是路径，而不仅仅是完成一笔交易。我们从客户的目标出发反向推导，搭建真正行之有效的架构。我们的优势来自四大支柱：专业能力、信任、洞察力与资源。";

const defaultPillars = [
  {
    icon: Globe2,
    title: "深耕30多个行业的丰富经验",
    description:
      "我们在科技、金融、媒体、艺术、教育、制造业等众多领域拥有深厚的实战经验。团队深刻理解各行业监管框架与商业结构之间的差异，将政策与运营的复杂性转化为清晰、可执行的路径。正是这份深度，让我们能够真正倾听、理解，并交付切实可行的解决方案。",
  },
  {
    icon: GraduationCap,
    title: "顶尖美国教育背景的顾问团队",
    description:
      "我们60多位专家组成的顾问团队，均来自美国排名前30的院校，在移民、企业战略、税务与合规领域拥有超过十年的实战经验。我们不只是传递信息，更是打通不同体系的桥梁。凭借深厚的架构理解力与精准的执行力，我们是帮助客户把计划真正落地的战略引路人。",
  },
  {
    icon: TrendingUp,
    title: "84.8%的长期合作续约率",
    description:
      "超过84.8%的客户在首次合作后，选择继续与Keystone携手前行。从身份转变到企业架构与业务成长，我们建立的是持久的合作关系，以稳定与信任陪伴客户走过每一个关键阶段，而非提供一次性服务。",
  },
  {
    icon: Layers,
    title: "端到端资源整合，交付真实成果",
    description:
      "我们汇聚顶尖移民律师、注册会计师、商业顾问与法律合作伙伴，为客户打造无缝衔接的服务生态。从公司注册到税务与法律策略，我们精准、高效地整合每一个关键环节，确保方案不止停留在纸面，而是真正落地执行。",
  },
];

// Shared "why Keystone" section: the same four-pillar pitch reused across
// service pages. Pages that want page-tailored wording override
// `description` and/or `pillars`; everyone else just renders the default.
export default function ServiceWhyKeystone({
  title = "为什么选择Keystone Strategies",
  description = defaultDescription,
  pillars = defaultPillars,
}) {
  return <TabbedFeatureList title={title} description={description} items={pillars} />;
}
