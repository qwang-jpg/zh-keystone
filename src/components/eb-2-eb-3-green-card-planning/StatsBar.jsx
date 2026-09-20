import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "100%", label: "I-140获批率" },
  { value: "100%", label: "PERM劳工证通过率" },
  { value: "10+", label: "年美国经验" },
  { value: "5+", label: "年行业经验" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
