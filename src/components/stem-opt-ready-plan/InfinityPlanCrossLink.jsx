import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { label: "OPT", current: false },
  { label: "STEM OPT", current: true },
  { label: "H-1B", current: false },
  { label: "绿卡", current: false },
];

export default function InfinityPlanCrossLink() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="rounded-3xl bg-keystone-mist px-8 py-16 text-center md:px-14">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-keystone-ink md:text-3xl">
            STEM OPT是下一步——而非终点
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            对许多国际专业人才而言，STEM OPT创造了一样极其宝贵的资源：{" "}
            <strong className="font-bold text-keystone-ink">时间。</strong>
            用这段时间积累美国工作经验、提升个人履历、打造更可持续的雇佣架构，
            并为移民策略的下一阶段做好准备。
          </p>

          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="absolute left-5 right-5 top-[9px] h-px bg-keystone-ink/10" aria-hidden="true" />
            <div className="relative flex items-start justify-between">
              {steps.map((s) => (
                <div key={s.label} className="flex w-[110px] flex-col items-center gap-3">
                  {s.current && (
                    <span className="-mt-6 rounded-full bg-primary/10 px-2.5 py-1 text-2xs font-bold uppercase tracking-wider text-primary">
                      您在这里
                    </span>
                  )}
                  <span
                    className={
                      s.current
                        ? "h-[22px] w-[22px] rounded-full bg-keystone-gradient shadow-[0_0_0_3px_rgba(22,152,152,.25)] ring-4 ring-keystone-mist"
                        : "h-[18px] w-[18px] rounded-full bg-keystone-ink/15 ring-4 ring-keystone-mist"
                    }
                  />
                  <span
                    className={
                      s.current
                        ? "text-sm font-bold text-keystone-ink"
                        : "text-sm font-semibold text-muted-foreground"
                    }
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            您的STEM OPT方案应在解决当下身份问题的同时，不忘着眼于下一步。对于希望规划
            STEM OPT之后路径的客户，我们也提供专门的H-1B与职业类绿卡规划支持。
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/h1b-infinity-plan">
              了解 H-1B Infinity Plan
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
