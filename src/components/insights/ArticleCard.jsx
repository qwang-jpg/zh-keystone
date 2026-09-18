import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { formatInsightDate } from "@/data/insights";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-2xs font-semibold uppercase tracking-wide text-primary">
        {article.category}
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-keystone-ink group-hover:text-primary">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {article.description}
      </p>
      <div className="mt-6 flex items-center justify-between text-2xs font-medium uppercase tracking-wide text-muted-foreground/80">
        <span>
          {formatInsightDate(article.date)} · {article.readingTime}
        </span>
        <span className="inline-flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
          阅读 <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
