import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "3", label: "标志反馈与修改轮次" },
  { value: "4", label: "四大连接模块：品牌、网站、SEO与上线" },
  { value: "100%", label: "适配桌面端与移动端的响应式搭建" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
