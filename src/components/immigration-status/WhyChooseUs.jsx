import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const pillars = [
  {
    icon: Globe2,
    title: "深耕30多个行业的丰富实战经验",
    description:
      "我们的客户涵盖科技、金融、媒体、艺术、教育、制造业等众多领域。Keystone团队深度参与这些行业客户的职位架构与申请规划工作，让我们对每个行业岗位描述的可信度有着细致入微的理解。",
  },
  {
    icon: GraduationCap,
    title: "60多位顾问，均来自美国排名前30的院校",
    description:
      "Keystone团队拥有60多位资深顾问，具备常春藤及美国前30院校背景，在身份规划、企业服务与合规领域平均拥有超过十年的美国从业经验。我们传递的不只是信息，更是注重实际执行的合作伙伴。",
  },
  {
    icon: TrendingUp,
    title: "84.8%的客户续约率，全程陪伴每一个阶段",
    description:
      "超过84.8%的客户在首个合作阶段结束后选择续约。我们以清晰的阶段性目标推进工作，从注册到申请递交，建立的是长期合作关系，而非一次性交易。",
  },
  {
    icon: Layers,
    title: "与移民律师直接协调对接",
    description:
      "我们负责准备职位、文件与合规框架，随后直接与您的移民律师协调，直至完成递交，让商业架构与法律申请之间的衔接天衣无缝。",
  },
];

export default function WhyChooseUs() {
  return <TabbedFeatureList title="为什么选择Keystone Strategies" items={pillars} />;
}
