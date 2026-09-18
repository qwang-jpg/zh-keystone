import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import ServiceWhyKeystone from "@/components/common/ServiceWhyKeystone";

const pillars = [
  {
    icon: Globe2,
    title: "深耕30多个行业的丰富经验",
    description:
      "我们在科技、金融、媒体、艺术、教育、制造业等众多领域拥有深厚的实战经验，确保我们起草的制度真正契合您所在行业的实际运营方式，而非套用通用模板。",
  },
  {
    icon: GraduationCap,
    title: "顶尖美国教育背景的顾问团队",
    description:
      "我们60多位专家组成的顾问团队，均来自美国排名前30的院校，在企业战略、税务及州与联邦雇佣法合规领域拥有超过十年的实战经验。",
  },
  {
    icon: TrendingUp,
    title: "84.8%的长期合作续约率",
    description:
      "超过84.8%的客户在首次合作后，选择继续与Keystone携手前行，包括在团队规模与业务范围扩大时，持续更新维护相关制度。",
  },
  {
    icon: Layers,
    title: "端到端资源整合，交付真实成果",
    description:
      "我们汇聚商业顾问与法律合作伙伴，打造无缝衔接的合规生态，从员工入职到此后每天规范团队运作的各项制度与公示，全程覆盖。",
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
