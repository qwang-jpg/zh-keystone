import { useState } from "react";
import { cn } from "@/lib/utils";

// Continuously auto-scrolling strip: the item list is rendered twice back
// to back and animated from 0% to -50% (or the reverse), so the seam
// between the two copies is always just off-screen and the loop never
// visibly resets. Speed is seconds-per-loop via a CSS var rather than a
// Tailwind duration class, since it varies per row with item count.
export default function MarqueeRow({ items, direction = "left", speed = 40, renderItem, ariaLabel, className }) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={cn(
          "flex w-max gap-5 pl-6",
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left",
          paused && "[animation-play-state:paused]"
        )}
        style={{ "--marquee-duration": `${speed}s` }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} aria-hidden={idx >= items.length ? "true" : undefined}>
            {renderItem(item, idx % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
}
