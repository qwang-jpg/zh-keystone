import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function NavCard({ article, direction }) {
  const isNext = direction === "next";
  return (
    <Link
      to={`/insights/${article.slug}`}
      className={cn(
        "group flex flex-1 flex-col gap-2 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary",
        isNext ? "text-right items-end" : "text-left items-start"
      )}
    >
      <span className="inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-primary">
        {!isNext && <ArrowLeft className="h-3.5 w-3.5" />}
        {isNext ? "下一篇" : "上一篇"}
        {isNext && <ArrowRight className="h-3.5 w-3.5" />}
      </span>
      <span className="text-base font-bold leading-snug text-keystone-ink group-hover:text-primary">
        {article.title}
      </span>
    </Link>
  );
}

export default function PrevNextNav({ previous, next }) {
  if (!previous && !next) return null;

  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      {previous ? <NavCard article={previous} direction="previous" /> : <div className="flex-1" />}
      {next ? <NavCard article={next} direction="next" /> : <div className="flex-1" />}
    </div>
  );
}
