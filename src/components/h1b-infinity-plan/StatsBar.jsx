import { Building2, CheckCircle2, Ticket, ShieldCheck } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { icon: Building2, value: "300+", label: "Companies Formed & Operated" },
  { icon: CheckCircle2, value: "120+", label: "Successful Cases" },
  { icon: Ticket, value: "45%", label: "H-1B Lottery Selection Rate" },
  { icon: ShieldCheck, value: "100%", label: "H-1B Petition Approval Rate" },
];

export default function StatsBar() {
  return (
    <div>
      <AnimatedStatsBar stats={stats} />
      <p className="bg-keystone-mist px-6 py-3 text-center text-xs text-muted-foreground">
        Figures reported on our H-1B Infinity Plan page. Historical results do not guarantee future selection or approval.
      </p>
    </div>
  );
}
