import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "4", label: "四大模块：员工手册、EEO制度、公示与分类" },
  { value: "2", label: "两项分类审核：加班规定豁免状态与员工/承包商分类" },
  { value: "100%", label: "员工手册与公示均按州法逐一落实合规" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
