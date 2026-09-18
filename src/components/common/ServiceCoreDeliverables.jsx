import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// Shared "what's included" icon-card grid reused across service pages.
// `columns` sets the grid breakpoints, `compact` shrinks the card heading
// for icon-only cards with no sub-list, and `showCta` adds a "Talk to an
// Expert" link to every card for pages that want one.
export default function ServiceCoreDeliverables({
  title = "服务内容",
  description,
  items,
  columns = "md:grid-cols-2",
  compact = false,
  showCta = false,
}) {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={title} description={description} />

        <div className={cn("mt-14 grid grid-cols-1 gap-8", columns)}>
          {items.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="flex flex-col rounded-2xl border border-border bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className={cn("mt-5 font-bold text-keystone-ink", compact ? "text-base" : "text-lg")}>
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                {d.items && (
                  <ul className="mt-4 space-y-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {showCta && (
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    立即咨询专家
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
