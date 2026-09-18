import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import ArticleContent from "@/components/insights/ArticleContent";
import TableOfContents from "@/components/insights/TableOfContents";
import SidebarContactCta from "@/components/insights/SidebarContactCta";
import PrevNextNav from "@/components/insights/PrevNextNav";
import ArticleCard from "@/components/insights/ArticleCard";
import CompactCta from "@/components/common/CompactCta";
import NotFound from "@/pages/NotFound";
import {
  getInsightBySlug,
  getRelatedInsights,
  getAdjacentInsights,
  formatInsightDate,
  loadArticleContent,
} from "@/data/insights";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export default function InsightArticle() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug);

  // Only the current article's long-form body is fetched, and only once its
  // page is actually visited — see `loadArticleContent` for why.
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(null);
    if (!article) return;
    let cancelled = false;
    loadArticleContent(article.slug).then((c) => {
      if (!cancelled) setContent(c);
    });
    return () => {
      cancelled = true;
    };
  }, [article]);

  if (!article) return <NotFound />;
  if (!content) return null;

  const related = getRelatedInsights(article);
  const { previous, next } = getAdjacentInsights(article);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    url: `${SITE_URL}/insights/${article.slug}`,
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <PageLayout>
      <Seo title={article.title} description={article.description} path={`/insights/${article.slug}`} jsonLd={jsonLd} />

      <article className="py-14 md:py-20">
        <div className="container max-w-5xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-2xs font-semibold uppercase tracking-wide text-primary">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">{article.title}</h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-muted-foreground/80">
            {formatInsightDate(article.date)} · {article.readingTime}
          </p>

          <div className="mt-8 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <TableOfContents content={content} />
              <SidebarContactCta />
            </div>

            <div className="mt-8 min-w-0 lg:mt-0">
              <ArticleContent content={content} />

              <PrevNextNav previous={previous} next={next} />
            </div>
          </div>
        </div>
      </article>

      <CompactCta
        title="Get a personalized immigration & business strategy consultation."
        ctaLabel="Free Consultation"
      />

      {related.length > 0 && (
        <section className="py-14 md:py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-keystone-ink">More Insights</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
