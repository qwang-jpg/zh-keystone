import { Link2, ShieldAlert, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Link2,
    title: "雇主、雇佣与培训——环环相扣",
    description:
      "我们将雇主资格、E-Verify、职位设计、I-983表格与持续合规，串联为一条结构化的路径。",
  },
  {
    icon: ShieldAlert,
    title: "围绕您的实际情况搭建",
    description:
      "我们不会把每项要求当作孤立的任务处理，而是围绕您真实的雇主与职业状况设计每一个环节。",
  },
  {
    icon: AlertTriangle,
    title: "一个薄弱环节足以影响全局",
    description:
      "我们的目标是确保各个环节能够协同运作，让您的身份在整个过程中始终受到保障。",
  },
];

export default function StemAbout() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            align="left"
            title="关于STEM OPT身份保障计划"
            description="Keystone Strategies帮助国际STEM毕业生搭建推进STEM OPT所需的雇主、雇佣、培训、文件与持续合规架构——而不仅仅是完成延期申请本身。"
            className="mx-0 max-w-none"
          />

          <div className="flex flex-col">
            {principles.map((p, i) => (
              <div key={p.title}>
                <div className={cn("flex gap-5", i > 0 && "pt-6")}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-primary/10">
                    <p.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-keystone-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </div>
                {i < principles.length - 1 && <div className="mt-6 h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
