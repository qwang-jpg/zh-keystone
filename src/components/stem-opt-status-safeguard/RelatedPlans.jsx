import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";

const plans = [
  {
    title: "I-983培训计划与申请支持",
    description:
      "全程支持准备并递交您的STEM OPT延期申请本身，从I-983培训计划到I-765递交及最终评估。",
    cta: "了解I-983培训计划与申请支持",
    href: "/stem-opt-ready-plan",
    sourceFile: "josh-connor-1hTtmzyufyM-unsplash.jpg",
  },
  {
    title: "自雇型H-1B规划",
    description:
      "当您准备从STEM OPT迈向H-1B或其他职业类签证时，我们为您设计能够延续推进的职位与申请策略。",
    cta: "了解自雇型H-1B规划",
    href: "/employment-visa-position-petition-planning",
    sourceFile: "nicolas-jehly-VwIF0Ls7LVo-unsplash.jpg",
  },
  {
    title: "公司注册与架构设计",
    description:
      "如果您的STEM OPT岗位依托自己的公司运作，我们负责实体注册与治理搭建，确保这段雇佣关系背后的雇主一方从一开始就正确搭建。",
    cta: "了解公司注册与架构设计",
    href: "/company-formation-corporate-structure",
    sourceFile: "sam-jotham-sutharson-pjjVerDno5Q-unsplash.jpg",
  },
];

export default function RelatedPlans() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="相关服务"
          description="STEM OPT合规很少是孤立存在的，以下是大多数客户会一并选择的服务。"
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
