import { Globe2, GraduationCap, Layers, TrendingUp } from "lucide-react";
import PillarShowcase from "@/components/common/PillarShowcase";

const pillars = [
  {
    icon: Globe2,
    num: "01",
    title: "深耕30多个行业的丰富经验",
    meta: "专业能力 · 科技、金融、媒体、艺术、教育、制造业",
    description:
      "我们在科技、金融、媒体、艺术、教育、制造业等众多领域拥有深厚的实战经验。团队深刻理解各行业监管框架与商业结构之间的差异，将政策与运营的复杂性转化为清晰、可执行的路径。正是这份深度，让我们能够真正倾听、理解，并交付切实可行的解决方案。",
    facts: [
      { value: "30+", label: "服务行业数量" },
      { value: "7年", label: "实战经验" },
      { value: "500", label: "成功案例" },
    ],
  },
  {
    icon: GraduationCap,
    num: "02",
    title: "顶尖美国教育背景的顾问团队",
    meta: "信任 · 移民、企业战略、税务、合规",
    description:
      "我们60多位专家组成的顾问团队，均来自美国排名前30的院校，在移民、企业战略、税务与合规领域拥有超过十年的实战经验。我们不仅提供信息，还协调不同领域的专业工作，帮助客户将计划落地。",
    facts: [
      { value: "60+", label: "跨领域顾问" },
      { value: "前30", label: "美国院校背景" },
      { value: "10年+", label: "平均从业经验" },
    ],
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "84.8%的长期客户留存率",
    meta: "洞察力 · 伴随成长的身份转变",
    description:
      "超过84.8%的客户在首次合作后，选择继续与Keystone携手前行。从身份转变到企业架构与业务成长，我们建立的是持久的合作关系，以稳定与信任陪伴客户走过每一个关键阶段，而非提供一次性服务。",
    facts: [
      { value: "84.8%", label: "客户留存率" },
      { value: "1200+", label: "已服务客户数" },
      { value: "80+", label: "已孵化企业数" },
    ],
  },
  {
    icon: Layers,
    num: "04",
    title: "整合专业资源，推动方案落地",
    meta: "资源 · 律师、注册会计师、顾问、法律合作伙伴",
    description:
      "我们汇聚顶尖移民律师、注册会计师、商业顾问与法律合作伙伴，为客户打造无缝衔接的服务生态。从公司注册到税务与法律策略，我们精准、高效地整合每一个关键环节，确保方案不止停留在纸面，而是真正落地执行。",
    facts: [
      { value: "1支团队", label: "律师、会计师、顾问协同" },
      { value: "15项", label: "全流程服务" },
      { value: "100+", label: "专家网络" },
    ],
  },
];

export default function WhyKeystone() {
  return (
    <PillarShowcase
      title="为什么选择 Keystone"
      description="在Keystone，我们设计的是路径，而不仅仅是完成一笔交易。我们从客户的目标出发反向推导，搭建真正行之有效的架构。我们的优势来自四大支柱：专业能力、信任、洞察力与资源。"
      items={pillars}
    />
  );
}
