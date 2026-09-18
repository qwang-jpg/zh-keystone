import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";

const plans = [
  {
    title: "Form I-983 Training Plan & Application Support",
    description:
      "Full support preparing and filing your STEM OPT extension application itself, from the I-983 training plan through I-765 filing and final evaluation.",
    cta: "Explore I-983 Training Plan & Application Support",
    href: "/stem-opt-ready-plan",
    sourceFile: "josh-connor-1hTtmzyufyM-unsplash.jpg",
  },
  {
    title: "Employment Visa Position & Petition Planning",
    description:
      "When it's time to move from STEM OPT toward H-1B or another employment-based visa, we design the position and petition strategy that carries you forward.",
    cta: "Explore Employment Visa Position & Petition Planning",
    href: "/employment-visa-position-petition-planning",
    sourceFile: "nicolas-jehly-VwIF0Ls7LVo-unsplash.jpg",
  },
  {
    title: "Company Formation & Corporate Structure",
    description:
      "If your STEM OPT position runs through your own company, we handle entity formation and governance so the employer side of the relationship is built correctly from the start.",
    cta: "Explore Company Formation & Corporate Structure",
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
          title="Related Services"
          description="STEM OPT compliance rarely stands alone, here's what most clients pair it with."
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
