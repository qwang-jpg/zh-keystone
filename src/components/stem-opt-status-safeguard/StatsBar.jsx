import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "3", label: "次专属STEM OPT合规咨询" },
  { value: "100%", label: "符合I-983要求的岗位描述设计" },
  { value: "100%", label: "完成E-Verify注册的雇主搭建" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
