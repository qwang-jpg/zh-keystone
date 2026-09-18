import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

// All four figures are the real, resolved values from the source page copy
// (unlike the homepage StatsBar, no counter targets were lost here).
const stats = [
  { value: "500+", label: "Partner Companies" },
  { value: "2000+", label: "Real Job Openings" },
  { value: "48h", label: "Fastest Offer Turnaround" },
  { value: "100%", label: "OPT Application Approval Rate" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} />;
}
