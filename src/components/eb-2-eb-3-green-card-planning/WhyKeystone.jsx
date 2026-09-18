import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import ServiceWhyKeystone from "@/components/common/ServiceWhyKeystone";

const pillars = [
  {
    icon: Globe2,
    title: "深耕30多个行业的丰富经验",
    description:
      "我们在科技、金融、媒体、艺术、教育、制造业等众多领域拥有深厚的实战经验。团队深刻理解各行业监管框架与商业结构之间的差异，将政策与运营的复杂性转化为清晰、可执行的路径。",
  },
  {
    icon: GraduationCap,
    title: "顶尖美国教育背景的顾问团队",
    description:
      "我们60多位专家组成的顾问团队，均来自美国排名前30的院校，在移民、企业战略、税务与合规领域拥有超过十年的实战经验。我们是帮助客户把长期计划真正落地的战略引路人。",
  },
  {
    icon: TrendingUp,
    title: "84.8%的长期合作续约率",
    description:
      "超过84.8%的客户在首次合作后，选择继续与Keystone携手前行。绿卡之路是以年为单位、而非以月为单位的旅程，我们搭建的正是能够支撑这段旅程的持久合作关系。",
  },
  {
    icon: Layers,
    title: "端到端资源整合，交付真实成果",
    description:
      "我们汇聚顶尖移民律师、注册会计师与商业顾问，为客户打造无缝衔接的服务生态，从公司与职位架构搭建，到PERM、I-140乃至后续阶段，全程护航。",
  },
];

export default function WhyKeystone() {
  return (
    <ServiceWhyKeystone
      description="在Keystone，我们设计的是路径，而不仅仅是完成一笔交易。我们的优势来自四大支柱：专业能力、信任、洞察力与资源。"
      pillars={pillars}
    />
  );
}
