import { ShieldCheck, Building2, Briefcase, Award } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const advantages = [
  {
    icon: ShieldCheck,
    title: "一站式解决身份与合规就业",
    description:
      "Keystone提供注重长期跟进的OPT求职支持，通过合作雇主网络为客户对接真实合规的岗位。在此基础上，我们进一步帮助客户获得优质的STEM OPT/H-1B担保机会，拒绝任何形式的非法安置，真正做到就业与身份问题一并解决，提供\"身份+职业+长期发展\"的一体化服务。",
  },
  {
    icon: Building2,
    title: "500多家合作雇主与孵化企业网络",
    description:
      "Keystone通过创业孵化与咨询支持，搭建起一个由500家合作企业组成的网络，共同提供2,000多个真实岗位，涵盖科技、咨询、数据分析、项目管理等众多领域。这让客户能够在真实企业中从事合规工作，在保护身份的同时，积累提升长期职业竞争力所需的经验与技能。",
  },
  {
    icon: Briefcase,
    title: "无缝衔接身份延续的自雇支持",
    description:
      "凭借在创业咨询与企业服务领域的顶尖专业能力，Keystone帮助希望创业的客户合法注册公司并搭建合规架构，确保真实的业务运营同时满足身份要求。我们不仅帮助客户通过创业路径安全延续身份，还会纳入职业类移民规划，为未来的职业发展与身份过渡打下坚实基础。",
  },
  {
    icon: Award,
    title: "精英顾问团队全程监督每一步",
    description:
      "Keystone与顶尖移民律师及资深顾问团队紧密合作，从公司注册到身份文件审核，严格监督每一个环节，确保全程合法合规，并保持接近100%的获批率。我们不仅降低客户的身份风险，更提供系统化、专业化的支持，保障客户在美国的长期稳定与发展。",
  },
];

export default function WhyChooseUs() {
  return (
    <TabbedFeatureList
      title={<>OPT求职保障计划<br />核心优势</>}
      items={advantages}
    />
  );
}
