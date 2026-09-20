import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "$500", label: "典型新账户现金奖励金额" },
  { value: "1", label: "次咨询即可准备好全部材料" },
  { value: "100%", label: "支持远程开户" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
