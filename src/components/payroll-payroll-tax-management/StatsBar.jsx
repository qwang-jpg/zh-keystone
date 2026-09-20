import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "50", label: "我们均可为您注册的州薪资税体系数量" },
  { value: "100%", label: "符合W-2标准的薪资体系搭建" },
  { value: "1", label: "覆盖薪酬、税务与记录的一体化系统搭建" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
