import { GraduationCap, Briefcase, ShieldCheck } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { icon: GraduationCap, value: "10+", label: "Years U.S. Education & Career Experience" },
  { icon: Briefcase, value: "5+", label: "Years Industry Experience" },
  { icon: ShieldCheck, value: "End-to-End", label: "STEM OPT Status & Employer Compliance Support" },
];

export default function StemStats() {
  return <AnimatedStatsBar stats={stats} />;
}
