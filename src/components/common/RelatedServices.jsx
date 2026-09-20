import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { serviceGroups } from "@/data/services";

// Shared "other services" link-card section reused across service pages
// (standard slot 9). Looks up the current page's category in the shared
// service catalog and shows sibling services as cards, so visitors can
// browse sideways within the same category instead of dead-ending.
export default function RelatedServices({ currentHref, title, description }) {
  const group = serviceGroups.find((g) => g.items.some((item) => item.href === currentHref));
  if (!group) return null;
  const items = group.items.filter((item) => item.href !== currentHref);
  if (items.length === 0) return null;

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title={title ?? `更多${group.heading}服务`}
          description={description ?? group.summary}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-colors hover:bg-white/60"
            >
              <h3 className="text-lg font-bold leading-snug text-keystone-ink">{s.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary">
                了解该服务
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
