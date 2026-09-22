import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import ArticleCard from "@/components/insights/ArticleCard";
import { getInsightBySlug } from "@/data/insights";

const slugs = ["opt-unemployment-survival-guide", "opt-self-employment-complete-guide-2026", "opt-to-h1b-self-employment-transition"];
const articles = slugs.map(getInsightBySlug).filter(Boolean);

export default function Insights() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="覆盖OPT每个阶段的实用指南。"
          description="了解可能影响您OPT历程的规则、时间线与就业决策。"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/insights" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            查看更多OPT专业洞察
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
