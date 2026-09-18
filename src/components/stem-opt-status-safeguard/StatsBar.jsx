import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "3", label: "Dedicated STEM OPT Compliance Consultations" },
  { value: "100%", label: "I-983-Aligned Job Description Design" },
  { value: "100%", label: "E-Verify-Registered Employer Setup" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} />;
}
