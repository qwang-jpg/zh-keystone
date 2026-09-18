import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Parses a display value like "2,000+", "48h", or "84.8%" into a numeric
// target plus the surrounding formatting, so the number can be counted up
// from 0 on mount while keeping the exact same text once the animation ends.
function parseStat(value) {
  const match = /^([\d,.]+)(.*)$/.exec(value.trim());
  if (!match) return { target: null, display: value };
  const [, numPart, suffix] = match;
  return {
    target: parseFloat(numPart.replace(/,/g, "")),
    suffix,
    decimals: numPart.includes("."),
    comma: numPart.includes(","),
  };
}

function formatStat(parsed, t) {
  if (parsed.target === null) return parsed.display;
  const value = parsed.target * t;
  const shown = parsed.decimals
    ? value.toFixed(1)
    : parsed.comma
    ? Math.round(value).toLocaleString("en-US")
    : String(Math.round(value));
  return shown + parsed.suffix;
}

const sizeClasses = {
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
};

const gridClasses = {
  3: "sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

// Animated-counter stats bar shared across pages. `stats` is
// [{ icon?, value, label }]; `value` is the exact string to display once the
// count-up finishes (e.g. "2,000+", "84.8%"). `variant="dark"` renders a
// bordered, translucent grid meant to sit inside a dark hero section instead
// of the default bright bordered strip.
export default function AnimatedStatsBar({ stats, size = "md", variant = "light", className }) {
  const [t, setT] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf;
    const step = (now) => {
      const raw = Math.min(1, (now - start) / duration);
      setT(1 - Math.pow(1 - raw, 3));
      if (raw < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const hasIcons = stats.some((s) => s.icon);

  if (variant === "dark") {
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4",
          className
        )}
      >
        {stats.map((s) => {
          const Icon = s.icon;
          const parsed = parseStat(s.value);
          return (
            <div key={s.label} className="flex flex-col gap-1.5 bg-keystone-ink/60 px-5 py-6 md:px-6 md:py-7">
              {Icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
              )}
              <span className={cn("font-bold text-keystone-green", sizeClasses[size])}>{formatStat(parsed, t)}</span>
              <span className="max-w-[14rem] text-xs leading-snug text-white/65 md:text-sm">{s.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className={cn("border-b border-border bg-white", className)}>
      <div className="container py-2">
        <div
          className={cn(
            "grid grid-cols-1 divide-y divide-border sm:divide-x sm:divide-y-0",
            gridClasses[stats.length] ?? "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            const parsed = parseStat(s.value);
            return (
              <div
                key={s.label}
                className={cn("flex items-center justify-center px-4 py-6", hasIcons && "gap-4")}
              >
                {Icon && (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-keystone-gradient">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </div>
                )}
                <div className="text-left">
                  <span className={cn("block font-bold text-primary", sizeClasses[size])}>{formatStat(parsed, t)}</span>
                  <span className="mt-0.5 block max-w-[14rem] text-sm text-muted-foreground">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
