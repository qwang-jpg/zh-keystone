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
        title="Insights — Immigration, H-1B & OPT Guides"
        description="Practical guides, policy updates, and real case studies on OPT, STEM OPT, H-1B self-employment, and immigration strategy for international professionals."
        path="/insights"
      />

      <section className="border-b border-border bg-keystone-mist py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="Immigration & Career Guidance for Global Talent"
            description="In-depth guides, policy breakdowns, and real client success stories on OPT, STEM OPT, and H-1B self-employment."
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
                placeholder="Search Insights..."
                aria-label="Search Insights"
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
            <p className="mt-10 text-sm text-muted-foreground">No articles match your search.</p>
          )}

          {visibleCount < filtered.length && (
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                Read More
              </Button>
            </div>
          )}
        </div>
      </section>

      <CompactCta
        title="Talk to our team about your status options."
        description="Every case is different — get a personalized read on OPT, STEM OPT, and H-1B self-employment paths that fit your situation."
        ctaLabel="Free Consultation"
      />
    </PageLayout>
  );
}
