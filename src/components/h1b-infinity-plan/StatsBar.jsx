import { Building2, CheckCircle2, Ticket, ShieldCheck } from "lucide-react";
import AnimatedStatsBar from "@/components/common/AnimatedStatsBar";

const stats = [
  { icon: Building2, value: "300+", label: "已注册并运营的公司数量" },
  { icon: CheckCircle2, value: "120+", label: "成功案例数量" },
  { icon: Ticket, value: "45%", label: "H-1B抽签中签率" },
  { icon: ShieldCheck, value: "100%", label: "H-1B申请获批率" },
];

export default function StatsBar() {
  return (
    <div>
      <AnimatedStatsBar stats={stats} />
      <p className="bg-keystone-mist px-6 py-3 text-center text-xs text-muted-foreground">
        以上数据来自我们H-1B无限续航计划页面的统计。历史结果不代表未来中签或获批的保证。
      </p>
    </div>
  );
}
