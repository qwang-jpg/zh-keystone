import { articleMeta } from "./meta";

// Full article bodies are large (26 long-form guides); dynamic imports
// keep each one in its own chunk, loaded only when its page is visited,
// instead of every page that touches `insights` pulling in all 26 bodies.
const contentLoaders = Object.fromEntries(
  articleMeta.map((a) => [a.slug, () => import(`./articles/${a.file}.js`)])
);

// Newest first
export const insights = [...articleMeta].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getInsightBySlug(slug) {
  return insights.find((a) => a.slug === slug);
}

// Resolves the full `content` blocks for one article on demand. Returns
// null if the slug doesn't match a known article.
export async function loadArticleContent(slug) {
  const loader = contentLoaders[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default.content;
}

export function getAdjacentInsights(article) {
  const index = insights.findIndex((a) => a.slug === article.slug);
  return {
    previous: index < insights.length - 1 ? insights[index + 1] : null,
    next: index > 0 ? insights[index - 1] : null,
  };
}

export function getRelatedInsights(article, count = 3) {
  const sameCategory = insights.filter((a) => a.slug !== article.slug && a.category === article.category);
  const rest = insights.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatInsightDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
