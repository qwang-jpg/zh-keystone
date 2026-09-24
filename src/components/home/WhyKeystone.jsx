import { Award, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import PillarShowcase from "@/components/common/PillarShowcase";

const pillars = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "合同保障的长期身份保护",
    meta: "成果 · 保障 · 长期承诺",
    panelTitle: "超越一次性服务的长期保障",
    description:
      "我们以结果为导向，而非一次性交付。在适用情况下，我们的服务承诺与保障机制会在服务协议中明确列明，让客户在雇佣与身份需求不断变化的过程中，持续获得初次合作之外的支持。",
    facts: [
      { value: "6–36 个月", label: "长期保障周期" },
      { value: "合同保障", label: "保障条款书面明确" },
      { value: "84.8%", label: "客户续约率" },
    ],
  },
  {
    icon: Building2,
    num: "02",
    title: "开创性的雇主架构模式",
    meta: "雇主搭建 · 运营 · 雇佣 · 身份就绪",
    panelTitle: "搭建支撑移民需求的雇主架构",
    description:
      "Keystone率先打造了融合公司注册、企业运营、薪资管理、劳工合规与移民就绪的一体化模式。我们不将移民与雇佣视为两个独立问题，而是从根基出发，搭建能够同时支撑二者的雇主架构。",
    facts: [
      { value: "1套模式", label: "一体化雇主架构" },
      { value: "4重架构", label: "商业 · 运营 · 雇佣 · 身份" },
      { value: "全流程覆盖", label: "从公司注册到雇主就绪" },
    ],
  },
  {
    icon: Award,
    num: "03",
    title: "经过验证的H-1B与STEM OPT履历",
    meta: "执行力 · H-1B · STEM OPT · OPT",
    panelTitle: "以真实客户成果验证实力",
    description:
      "我们的H-1B与OPT/STEM OPT解决方案，均建立在已被真实客户案例反复验证的路径之上。从雇主就绪、雇佣架构设计到持续的合规支持，我们的方法始终围绕实际执行，而非纸上谈兵。",
    facts: [
      { value: "100%", label: "截至目前已递交案例的H-1B与STEM OPT获批率" },
      { value: "200+", label: "已支持H-1B客户案例数" },
      { value: "2", label: "核心职业类身份路径" },
    ],
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "经验丰富的美国本土顾问团队",
    meta: "10年以上美国生活经验 · 5年以上行业经验",
    panelTitle: "同时理解客户与雇主视角的顾问团队",
    description:
      "我们的顾问团队拥有超过十年的美国本土生活经验，以及至少五年的行业从业经验。这让我们能够同时理解国际专业人才面临的移民挑战，以及美国雇主必须应对的运营现实。",
    facts: [
      { value: "双重视角", label: "客户需求 + 雇主现实" },
      { value: "30+", label: "覆盖行业数量" },
    ],
  },
];

export default function WhyKeystone() {
  return (
    <PillarShowcase
      id="why"
      title="为什么选择Keystone Strategies"
      description="在Keystone，我们专注于结果，而非一次性交易。我们的模式融合了合同保障、成熟的执行经验、开创性的雇主架构体系，以及经验丰富的顾问团队，为客户在复杂的移民与雇佣需求中提供长期支持。"
      items={pillars}
    />
  );
}
