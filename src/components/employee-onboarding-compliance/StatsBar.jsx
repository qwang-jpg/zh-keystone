import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "2", label: "正确完成的联邦表格：I-9表格与W-4表格" },
  { value: "5", label: "从聘用信到合规指南的全套交付内容" },
  { value: "100%", label: "每一次招聘都可复用的入职流程" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
