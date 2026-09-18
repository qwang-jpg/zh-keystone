import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import SectionHeading from "@/components/common/SectionHeading";
import ArticleCard from "@/components/insights/ArticleCard";
import CompactCta from "@/components/common/CompactCta";
import { Button } from "@/components/ui/button";
import { insights } from "@/data/insights";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 25;

export default function Insights() {
  const categories = useMemo(() => ["All", ...new Set(insights.map((a) => a.category))], []);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return insights.filter((a) => {
      const matchesCategory = active === "All" || a.category === active;
      const matchesQuery = !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  const visible = filtered.slice(0, visibleCount);

  function handleCategoryChange(c) {
    setActive(c);
    setVisibleCount(PAGE_SIZE);
  }

  function handleQueryChange(value) {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <PageLayout>
      <Seo
        title="行业洞察 — 移民、H-1B与OPT指南"
        description="面向国际专业人才的实用指南、政策解读与真实案例，涵盖OPT、STEM OPT、H-1B自雇与移民策略。"
        path="/insights"
      />

      <section className="border-b border-border bg-keystone-mist py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="为全球人才提供的移民与职业指导"
            description="深度指南、政策解读与真实客户成功案例，涵盖OPT、STEM OPT与H-1B自雇。"
            align="left"
            className="max-w-3xl"
          />
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCategoryChange(c)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                    active === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-keystone-ink/70 hover:border-primary hover:text-primary"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="搜索行业洞察..."
                aria-label="搜索行业洞察"
                className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-keystone-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground">没有找到符合条件的文章。</p>
          )}

          {visibleCount < filtered.length && (
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                查看更多
              </Button>
            </div>
          )}
        </div>
      </section>

      <CompactCta
        title="与我们的团队聊聊您的身份选择。"
        description="每一个案例都各不相同——获取针对您具体情况的OPT、STEM OPT与H-1B自雇路径专属解读。"
        ctaLabel="免费咨询"
      />
    </PageLayout>
  );
}
