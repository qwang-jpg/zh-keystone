import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "3+", label: "次专属咨询用于搭建每一份职位描述" },
  { value: "100%", label: "完成USCIS雇主账户注册" },
  { value: "2", label: "平均每位客户规划的签证路径数量" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
