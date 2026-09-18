import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { value: "3+", label: "Dedicated Consultations Per Job Description Buildout" },
  { value: "100%", label: "USCIS Employer Account Registrations Completed" },
  { value: "2", label: "Visa Pathways Planned On Average Per Client" },
];

export default function StatsBar() {
  return <AnimatedStatsBar stats={stats} />;
}
