import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const services = [
  {
    title: "STEM OPT Employer Compliance Training",
    description:
      "Once your application is filed, we help make sure the employer side, job description, supervision, and ongoing status maintenance, stays genuinely compliant for the life of your extension.",
    cta: "Explore STEM OPT Employer Compliance Training",
    href: "/stem-opt-employer-compliance-training",
    sourceFile: "thomas-habr-wprOCzLIEYI-unsplash.jpg",
  },
  {
    title: "Employment Visa Position & Petition Planning",
    description:
      "When you're ready to plan your next step after STEM OPT, we help structure the position and petition strategy for H-1B and other employment-based visas.",
    cta: "Explore Employment Visa Position & Petition Planning",
    href: "/employment-visa-position-petition-planning",
    sourceFile: "sam-jotham-sutharson-pjjVerDno5Q-unsplash.jpg",
  },
  {
    title: "H-1B Status Protection Program",
    description:
      "Our flagship end-to-end plan to secure H-1B status and keep your career moving without Sponsor dependency.",
    cta: "Explore the H-1B Status Protection Program",
    href: "/h-1b-status-protection-program",
    sourceFile: null,
  },
];

export default function OtherServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Other STEM OPT & H-1B Services"
          description="Application support is one part of the picture, here's what most clients pair it with before and after filing."
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
