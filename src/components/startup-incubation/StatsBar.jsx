import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "4", label: "从头到尾的公司注册阶段" },
  { value: "50", label: "覆盖全美50个州的注册与登记" },
  { value: "1", label: "统一整合的公司档案文件" },
  { value: "100%", label: "联邦EIN申请全包含" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
