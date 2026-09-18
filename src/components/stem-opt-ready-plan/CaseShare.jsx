import SectionHeading from "@/components/common/SectionHeading";

const support = [
  "雇主架构",
  "EIN",
  "E-Verify",
  "学位对应",
  "监督框架",
  "I-983表格",
  "学校文件",
  "申请准备",
];

export default function CaseShare() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="时间有限时，架构才是关键" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="rounded-2xl bg-white p-9 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.1)]">
            <h3 className="text-lg font-bold leading-snug text-keystone-ink md:text-xl">
              从突如其来的裁员，到结构化的STEM OPT路径
            </h3>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">面临的情况</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              一位STEM毕业生在临近重要的STEM OPT时间节点时，突然遭遇裁员。失去原有的雇佣安排后，
              多个环节都需要迅速重建——而不仅仅是申请本身。
            </p>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">面临的挑战</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              客户需要合适的雇主架构、E-Verify参与、与学位相关的职位、监督与培训框架、I-983文件、
              学校协调，以及STEM OPT申请准备。所有这些环节都需要在有限的时间内协调一致。
            </p>

            <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
              这正是"完成单项任务"与"统筹整套STEM OPT解决方案"之间的区别。
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-keystone-ink p-7">
              <span className="block text-4xl font-bold leading-none text-white">10天</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/55">
                从最初接洽到搭建出结构化的STEM OPT申请路径。
              </span>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.1)]">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Keystone提供的支持</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {support.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-keystone-ink/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
