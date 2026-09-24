import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Constant scroll speed (px/s) so every row — regardless of how many cards
// it has or how wide they are — visibly moves at the same pace. Duration is
// derived from the track's own measured width rather than item count, since
// item count alone doesn't predict pixel width (rows mix compact/full-size
// cards and portrait/landscape images).
const PIXELS_PER_SECOND = 60;

// Continuously auto-scrolling strip: the item list is rendered twice back
// to back and animated from 0% to -50% (or the reverse), so the seam
// between the two copies is always just off-screen and the loop never
// visibly resets. The scroll never pauses on hover, only on keyboard focus
// so a tabbing user can read/activate the focused card.
export default function MarqueeRow({ items, direction = "left", renderItem, ariaLabel, className }) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(40);

  // The track renders two back-to-back copies of `items`, so half its
  // measured width is one loop's travel distance.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const update = () => {
      const loopWidth = el.scrollWidth / 2;
      if (loopWidth > 0) setDuration(loopWidth / PIXELS_PER_SECOND);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={cn("container overflow-hidden", className)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex w-max gap-5",
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left",
          paused && "[animation-play-state:paused]"
        )}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {/* The second copy is visual only: `inert` keeps its clickable
            cards out of the tab order and the accessibility tree. (React 18
            passes the attribute through as-is; React 19 expects a boolean.) */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} inert={idx >= items.length ? "" : undefined}>
            {renderItem(item, idx % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
}
