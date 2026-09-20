import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "500+", label: "合作企业资源" },
  { value: "2,000+", label: "真实工作机会" },
  { value: "48小时", label: "最快获得offer时间" },
  { value: "可核实", label: "经得起核验的专业工作经历" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} size="lg" className="bg-keystone-mist" />;
}
