import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CASES } from "@/components/our-cases/caseData";
import MarqueeRow from "@/components/our-cases/MarqueeRow";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

function JourneyCard({ c }) {
  const durationLabel = c.outcome.includes("抽签中签") ? "启动 → 中签" : "启动 → 获批";
  return (
    <article className="flex h-72 w-[420px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2.5 whitespace-nowrap">
          <span className="text-2xl font-bold text-primary/25">{c.num}</span>
          <h3 className="text-lg font-bold text-keystone-ink">{c.name}</h3>
        </div>
        <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-keystone-green/15 px-3 py-1 text-xs font-bold text-keystone-forest">
          {c.outcome}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-border">
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">抽签</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.attemptShort}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">{durationLabel}</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.duration}</div>
        </div>
        <div className="bg-keystone-mist px-3 py-2.5">
          <div className="text-2xs font-bold uppercase tracking-wide text-muted-foreground">财年</div>
          <div className="mt-0.5 text-sm font-bold text-keystone-ink">{c.season}</div>
        </div>
      </div>

      <div className="mt-4 flex max-h-14 flex-wrap gap-1.5 overflow-hidden">
        {c.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-border bg-keystone-mist px-2.5 py-1 text-xs font-medium text-keystone-ink/70"
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

// `title`/`description`/`ariaLabel` let this section be reused verbatim on
// other plan pages (e.g. STEM OPT Ready Plan) with page-appropriate copy.
// `filterGoal` narrows the six featured cases to ones tagged with that goal
// (see caseData.js's `goals`) instead of just the first six overall, so a
// page like STEM OPT Ready Plan shows cases actually relevant to STEM OPT.
export default function SuccessStories({
  title = (
    <>
      真实企业。
      <br />
      真实的H-1B历程。
    </>
  ),
  description = "不同的起点，真实运营的企业，围绕客户具体情况搭建的雇主架构。",
  ariaLabel = "真实H-1B历程案例研究",
  filterGoal,
}) {
  const featuredCases = (filterGoal ? CASES.filter((c) => c.goals.includes(filterGoal)) : CASES).slice(0, 6);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={title} description={description} />
      </div>
      <MarqueeRow
        items={featuredCases}
        speed={featuredCases.length * 10}
        ariaLabel={ariaLabel}
        className="mt-12"
        renderItem={(c) => <JourneyCard c={c} />}
      />
      <div className="container mt-12 flex justify-center">
        <Button asChild size="lg">
          <Link to="/our-cases">
            查看全部案例 <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
