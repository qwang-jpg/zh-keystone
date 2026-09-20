import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "1", label: "一次性完成的公司层面E-Verify注册" },
  { value: "5", label: "从谅解备忘录到公司ID签发的步骤" },
  { value: "100%", label: "符合STEM OPT雇主要求" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
