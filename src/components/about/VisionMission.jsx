import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Globe2, Layers, Route, ShieldCheck, Sparkles, TrendingUp, Unlock } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const VM = [
  {
    label: "愿景",
    headline: "破除的不只是流程障碍，更是系统性壁垒",
    body: "Keystone Strategies 致力于帮助国际创业者与专业人才，通过创新且个性化的策略，克服系统性壁垒，实现具有变革意义的目标。",
    points: [
      { icon: Compass, title: "个性化策略", body: "拒绝模板化——每一条路径都围绕客户的目标量身设计。" },
      { icon: Unlock, title: "破除壁垒", body: "我们关注申请背后的架构，而不只是申请本身。" },
      { icon: Sparkles, title: "变革性目标", body: "把远大志向落地为写清楚每一步的计划。" },
      { icon: Globe2, title: "全球人才", body: "为跨国流动的专业人才与创业者而生。" },
    ],
  },
  {
    label: "使命",
    headline: "在复杂监管环境中，构建稳定的长期发展轨迹",
    body: "我们为全球人才、企业与机构提供系统化、专业化、定制化的战略解决方案，贯通移民、雇佣、合规与成长的关键路径。我们的使命是帮助客户在复杂的监管环境中，建立稳定的长期发展轨迹。",
    points: [
      { icon: Layers, title: "系统化", body: "移民、公司架构、薪资与税务被视为同一套体系统一处理。" },
      { icon: ShieldCheck, title: "合规优先", body: "每一项交付成果都经得起审查。" },
      { icon: Route, title: "路径贯通", body: "身份、雇佣与成长规划在同一条时间线上统筹推进。" },
      { icon: TrendingUp, title: "长期主义", body: "合作不止于首次获批。" },
    ],
  },
];

export default function VisionMission() {
  const [active, setActive] = useState(0);
  const current = VM[active];

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="我们的愿景与使命" align="left" className="max-w-none" />
          <div className="flex gap-2 rounded-xl border border-border bg-white p-1.5">
            {VM.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
                  i === active ? "bg-keystone-ink text-white" : "text-keystone-ink/60 hover:text-keystone-ink"
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative min-h-[260px] overflow-hidden rounded-2xl bg-keystone-ink p-10"
          >
            <div className="absolute inset-0 bg-keystone-gradient opacity-15" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-keystone-green">
                {current.label}
              </span>
              <h3 className="mt-5 text-2xl font-bold leading-snug text-white md:text-[28px]">{current.headline}</h3>
              <p className="mt-4 leading-relaxed text-white/75">{current.body}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 content-start gap-4 sm:grid-cols-2">
            {current.points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/45"
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.9} />
                  <p className="mt-3.5 text-sm font-bold leading-snug text-keystone-ink">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
