import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { buildHeadingIds } from "@/lib/headings";
import { cn } from "@/lib/utils";

// Groups the flat heading list into a tree: each level-2 heading is a
// top-level entry, and any level-3+ headings that follow it become its
// nested children (shown expanded, not behind their own toggle).
function buildTree(items) {
  const tree = [];
  let currentParent = null;
  for (const item of items) {
    if (item.block.level <= 2 || !currentParent) {
      currentParent = { ...item, children: [] };
      tree.push(currentParent);
    } else {
      currentParent.children.push(item);
    }
  }
  return tree;
}

// "On this page" nav built from the article's own heading blocks, so it
// always matches ArticleContent's anchors without needing separate data.
// Used both as a floating sidebar (desktop) and an inline block (mobile);
// collapsible so a long heading list doesn't dominate either placement.
export default function TableOfContents({ content, className }) {
  const [collapsed, setCollapsed] = useState(false);
  const headingIds = buildHeadingIds(content);
  const items = content
    .map((block, i) => ({ block, id: headingIds[i] }))
    .filter(({ block }) => block.type === "heading");

  if (items.length < 2) return null;

  const tree = buildTree(items);

  return (
    <nav className={cn("rounded-2xl border border-border bg-keystone-mist", className)} aria-label="Table of contents">
      <button
        type="button"
        onClick={() => setCollapsed((v) => !v)}
        className="flex w-full items-center justify-between gap-2 p-5"
        aria-expanded={!collapsed}
      >
        <span className="text-2xs font-semibold uppercase tracking-widest text-primary">On this page</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-primary transition-transform", collapsed && "-rotate-90")} />
      </button>
      {!collapsed && (
        <ul className="max-h-[70vh] space-y-3 overflow-y-auto px-5 pb-5">
          {tree.map(({ block, id, children }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm font-medium leading-snug text-keystone-ink/80 hover:text-primary"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
              {children.length > 0 && (
                <ul className="mt-2 space-y-2 border-l border-border pl-3">
                  {children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className="text-sm leading-snug text-keystone-ink/60 hover:text-primary"
                        dangerouslySetInnerHTML={{ __html: child.block.html }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
