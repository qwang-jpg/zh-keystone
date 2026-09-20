import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "4", label: "四大核心模块：治理、身份、地址与文档" },
  { value: "1", label: "年公司域名注册已包含在内" },
  { value: "3", label: "套可直接调整使用的业务文档模板" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} className="bg-keystone-mist" />;
}
