import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

// All four figures are the real, resolved values from the source page copy
// (unlike the homepage StatsBar, no counter targets were lost here).
const stats = [
  { value: "500+", label: "合作企业数量" },
  { value: "2000+", label: "真实岗位数量" },
  { value: "48h", label: "最快获得offer时间" },
  { value: "100%", label: "OPT申请获批率" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} />;
}
