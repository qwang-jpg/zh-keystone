import { Building2, Briefcase, Award, ShieldCheck } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { icon: Building2, value: "300+", label: "已支持的美国公司数量" },
  { icon: Briefcase, value: "120+", label: "已搭建的雇主架构数量" },
  { icon: Award, value: "500+", label: "成功案例数量" },
  { icon: ShieldCheck, value: "100%", label: "截至目前已递交案例的H-1B / STEM OPT 获批率" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} />;
}
