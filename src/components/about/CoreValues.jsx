import { useState } from "react";
import { ChevronDown, Handshake, ShieldCheck, Target } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Handshake,
    title: "以客户为中心，共创式设计",
    description:
      "我们把客户的最终目标置于每一项策略的核心。不依赖模板或权宜之计，而是构建量身定制、结构清晰、真正行之有效的路径。",
    chips: ["目标优先规划", "拒绝模板化", "与您共同搭建"],
  },
  {
    icon: ShieldCheck,
    title: "注重细节，以责任为导向",
    description:
      "我们相信真正有效的解决方案藏在细节之中。每一项决策与交付成果，都建立在专业能力、责任担当以及经得起审查的标准之上。",
    chips: ["决策有据可查", "随时可供审计", "对交付结果负责"],
  },
  {
    icon: Target,
    title: "系统规划，着眼长远",
    description:
      "我们的视野超越眼前问题，致力于设计可持续、面向未来的战略。通过结构化思维与跨领域整合，帮助客户规划清晰的长期战略路径。",
    chips: ["跨领域整合", "面向未来", "着眼长远"],
  },
];

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="我们的核心价值观"
          description="在这个充满复杂性的世界里，我们带领客户前行的方式，不是口号或捷径，而是经得起审视、能带来真实成果的战略。我们相信，以客户为中心的设计、专业的严谨态度与结构化思维，能够带来清晰的方向，把不确定性转化为机遇。"
          align="left"
          className="max-w-none"
        />

        <div className="mt-10 flex flex-col gap-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={v.title}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors",
                  isOpen ? "border-primary/45 shadow-lg shadow-keystone-ink/5" : "border-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-7"
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                      isOpen ? "bg-keystone-gradient text-white" : "bg-keystone-mist text-primary"
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wide text-primary">
                      价值观 {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block text-lg font-bold leading-snug text-keystone-ink md:text-xl">
                      {v.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[5.75rem] md:px-7 md:pl-[5.75rem]">
                      <p className="max-w-3xl leading-relaxed text-muted-foreground">{v.description}</p>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {v.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-border bg-keystone-mist px-2.5 py-1 text-xs font-medium text-keystone-ink/70"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
