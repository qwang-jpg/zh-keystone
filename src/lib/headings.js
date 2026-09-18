// Shared between ArticleContent (which renders heading ids) and
// TableOfContents (which links to them), so anchors always match.
function slugifyHeading(html) {
  const text = html.replace(/<[^>]+>/g, "");
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "section"
  );
}

// Returns an array parallel to `content`: the anchor id for each heading
// block, or null for non-heading blocks. Duplicate heading text gets a
// -2, -3, ... suffix so ids stay unique on the page.
export function buildHeadingIds(content) {
  const seen = {};
  return content.map((block) => {
    if (block.type !== "heading") return null;
    const base = slugifyHeading(block.html);
    seen[base] = (seen[base] || 0) + 1;
    return seen[base] > 1 ? `${base}-${seen[base]}` : base;
  });
}
