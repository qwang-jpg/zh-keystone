import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "4", label: "环环相扣的财务支持模块" },
  { value: "12", label: "个月申报截止日期的提前规划" },
  { value: "1", label: "统一协调记账、申报与CPA的对接窗口" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
