import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const services = [
  {
    title: "STEM OPT雇主合规",
    description:
      "申请递交后，我们帮您确保雇主一方、岗位描述、监督安排与持续身份维护，在整个延期期间都真正保持合规。",
    cta: "了解STEM OPT雇主合规",
    href: "/stem-opt-employer-compliance-training",
    sourceFile: "thomas-habr-wprOCzLIEYI-unsplash.jpg",
  },
  {
    title: "职业签证岗位与申请规划",
    description:
      "当您准备规划STEM OPT之后的下一步时，我们帮您搭建面向H-1B及其他职业类签证的职位与申请策略。",
    cta: "了解职业签证岗位与申请规划",
    href: "/employment-visa-position-petition-planning",
    sourceFile: "sam-jotham-sutharson-pjjVerDno5Q-unsplash.jpg",
  },
  {
    title: "H-1B身份保障计划",
    description:
      "我们的旗舰端到端方案，助您稳获H-1B身份，让职业发展不再依赖雇主担保。",
    cta: "了解H-1B身份保障计划",
    href: "/h1b-infinity-plan",
    sourceFile: null,
  },
];

export default function OtherServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="其他STEM OPT与H-1B服务"
          description="申请支持只是整体方案的一部分，以下是大多数客户在递交前后会一并选择的服务。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-12px_rgba(16,36,31,.14)]"
            >
              {s.sourceFile ? (
                <ImagePlaceholder sourceFile={s.sourceFile} aspect="aspect-[16/9]" className="rounded-none" />
              ) : (
                <div className="aspect-[16/9] w-full bg-keystone-gradient" />
              )}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold text-keystone-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  {s.cta}
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
