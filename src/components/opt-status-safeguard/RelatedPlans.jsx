import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";

const plans = [
  {
    title: "STEM OPT就绪计划",
    description:
      "STEM OPT就绪计划是一套一站式合规方案，帮助专业人士通过自雇合法延长STEM OPT身份，同时放心参与H-1B抽签。",
    cta: "了解STEM OPT就绪计划",
    href: "/stem-opt-ready-plan",
    sourceFile: "josh-connor-1hTtmzyufyM-unsplash.jpg",
  },
  {
    title: "STEM OPT身份保障计划",
    description:
      "通过我们成熟的雇主网络及上百家孵化企业的资源，Keystone Strategies为处于STEM OPT期间的国际学生提供真实合规的岗位与端到端的身份过渡支持。",
    cta: "了解STEM OPT身份保障计划",
    href: "/stem-opt-employer-compliance-training",
    sourceFile: "sam-jotham-sutharson-pjjVerDno5Q-unsplash.jpg",
  },
  {
    title: "H-1B无限续航计划",
    description:
      "H-1B无限续航计划为在美人才提供从公司注册到身份合规的一站式解决方案——帮助您合法创业、无限次参与H-1B抽签，摆脱对雇主担保的依赖与身份焦虑。",
    cta: "了解H-1B无限续航计划",
    href: "/h-1b-status-protection-program",
    sourceFile: "nicolas-jehly-VwIF0Ls7LVo-unsplash.jpg",
  },
];

export default function RelatedPlans() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="其他OPT / STEM OPT / H-1B相关服务"
          description="覆盖OPT、STEM OPT、H-1B及长期规划的一站式合规方案——在每一步为您的身份与职业发展保驾护航。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-border">
              <ImagePlaceholder sourceFile={p.sourceFile} aspect="aspect-[16/10]" className="rounded-none" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-keystone-ink">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <Link
                  to={p.href}
                  className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary"
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
