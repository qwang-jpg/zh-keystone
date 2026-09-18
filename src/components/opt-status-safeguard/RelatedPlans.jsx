import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";

const plans = [
  {
    title: "STEM OPT Ready Plan",
    description:
      "The STEM OPT Ready Plan is a one-stop compliance solution for professionals who want to legally extend their STEM OPT status through self-employment while confidently entering the H-1B lottery.",
    cta: "Explore the STEM OPT Ready Plan",
    href: "/stem-opt-ready-plan",
    sourceFile: "josh-connor-1hTtmzyufyM-unsplash.jpg",
  },
  {
    title: "STEM OPT Status Safeguard Plan",
    description:
      "Through our established employer network and resources from over a hundred incubated companies, Keystone Strategies provides international students in STEM OPT with genuine, compliant positions and end-to-end status transition support.",
    cta: "Explore the STEM OPT Status Safeguard Plan",
    href: "/stem-opt-employer-compliance-training",
    sourceFile: "sam-jotham-sutharson-pjjVerDno5Q-unsplash.jpg",
  },
  {
    title: "H-1B Infinity Plan",
    description:
      "The H-1B Infinity Plan gives talented professionals in the U.S. a one-stop solution spanning everything from company formation to status compliance — helping you legally start a business, enter the H-1B lottery an unlimited number of times, and break free from Sponsor dependency and status anxiety.",
    cta: "Explore the H-1B Infinity Plan",
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
          title="Other OPT / STEM OPT / H-1B Services"
          description="One-stop compliance solutions spanning OPT, STEM OPT, H-1B, and long-term planning — safeguarding your status and career in the U.S. every step of the way."
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
