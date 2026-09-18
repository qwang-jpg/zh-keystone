import { buildHeadingIds } from "@/lib/headings";

// Renders an article's `content` blocks (see src/data/insights/articles/*.js
// for the schema). Block `html` values are trusted, hand-authored content
// translated from the firm's own source articles, not user input.
export default function ArticleContent({ content }) {
  const headingIds = buildHeadingIds(content);

  return (
    <div
      className="
        [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-primary/80
        [&_strong]:font-semibold [&_strong]:text-keystone-ink
      "
    >
      {content.map((block, i) => {
        if (block.type === "heading") {
          const Tag = `h${block.level}`;
          return (
            <Tag
              key={i}
              id={headingIds[i]}
              className={
                block.level === 2
                  ? "mt-10 scroll-mt-28 text-2xl font-bold leading-snug text-keystone-ink first:mt-0 md:text-[1.75rem]"
                  : "mt-8 scroll-mt-28 text-xl font-bold leading-snug text-keystone-ink"
              }
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          );
        }
        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={i}
              className={
                "mt-4 space-y-2 pl-5 text-base leading-relaxed text-muted-foreground " +
                (block.ordered ? "list-decimal" : "list-disc")
              }
            >
              {block.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ListTag>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="mt-6 border-l-4 border-primary/40 bg-keystone-mist py-3 pl-5 pr-4 text-base italic leading-relaxed text-keystone-ink"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          );
        }
        return (
          <p
            key={i}
            className="mt-4 text-base leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </div>
  );
}
