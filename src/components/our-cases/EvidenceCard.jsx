import { useEffect, useRef, useState } from "react";
import { ImageIcon, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Evidence sources have wildly inconsistent native shapes — wide brochure
// contact sheets, tall letter-size USCIS/state filings — so every card
// shares a height and lets width follow the image's own aspect ratio
// (object-contain, no cropping, no stretching). Cards without a real `src`
// yet fall back to a labeled placeholder in the same slot.
export default function EvidenceCard({ src, label, sourceFile, onClick, className }) {
  const clickable = Boolean(src && onClick);
  const buttonRef = useRef(null);
  const [ratio, setRatio] = useState(null);
  const [width, setWidth] = useState(null);

  // The card sits in a `width: max-content` marquee row, and the browser's
  // intrinsic-width pass for that row resolves a percentage-height/auto-width
  // <img> by falling back to its native pixel size instead of the height it
  // actually renders at — a high-res scan (e.g. a ~1000px-wide letter-page
  // PNG meant to render ~250px tall-side-down) balloons the whole card, and
  // a lower-res image meant to render *larger* than its native size gets its
  // card undersized and clipped. Once the aspect ratio is known, measuring
  // the button's own (correctly resolved) height and setting the image's
  // width explicitly in pixels sidesteps that fallback entirely.
  useEffect(() => {
    if (ratio === null) return undefined;
    const el = buttonRef.current;
    if (!el) return undefined;
    const update = () => setWidth(el.clientHeight * ratio);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ratio]);

  return (
    <figure
      className={cn(
        "group flex h-56 shrink-0 flex-col overflow-hidden rounded-2xl border border-keystone-ink/10 bg-white shadow-sm sm:h-72 md:h-96",
        className
      )}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={clickable ? onClick : undefined}
        aria-disabled={!clickable}
        tabIndex={clickable ? 0 : -1}
        className={cn(
          "relative flex min-h-0 flex-1 items-center justify-center bg-keystone-mist px-3 py-3",
          clickable ? "cursor-zoom-in" : "cursor-default"
        )}
      >
        {src ? (
          <>
            <img
              src={src}
              alt={label ?? "证明文件"}
              loading="lazy"
              onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
              style={width ? { width } : undefined}
              className="h-full w-auto max-w-none rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {clickable && (
              <span className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-keystone-ink/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
            )}
          </>
        ) : (
          <div className="flex h-full w-40 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-keystone-teal/10 to-keystone-green/10 text-center sm:w-48">
            <ImageIcon className="h-8 w-8 text-primary/40" strokeWidth={1.5} />
            {sourceFile && <p className="max-w-[85%] break-all text-3xs text-keystone-ink/25">{sourceFile}</p>}
          </div>
        )}
      </button>
      {label && (
        <figcaption className="truncate border-t border-keystone-ink/5 px-4 py-2.5 text-sm font-medium text-keystone-ink/70">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
