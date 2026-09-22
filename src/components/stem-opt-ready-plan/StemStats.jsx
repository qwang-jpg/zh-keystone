import { GraduationCap, Briefcase, ShieldCheck } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { icon: GraduationCap, value: "10+", label: "年美国教育与职业经验" },
  { icon: Briefcase, value: "5+", label: "年行业从业经验" },
  { icon: ShieldCheck, value: "全流程", label: "STEM OPT身份与雇主合规支持" },
];

export default function StemStats() {
  return <AnimatedStatsBar stats={stats} />;
}
