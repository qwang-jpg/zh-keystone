import { useEffect, useState } from "react";

const stats = [
  { target: 1200, suffix: "+", label: "clients supported across immigration and business" },
  { target: 80, suffix: "+", label: "startups incubated across tech, education, and e-commerce" },
  { target: 60, suffix: "+", label: "cross-functional consultants supporting every engagement" },
  { target: 84.8, suffix: "%", label: "retention rate with long-term client partnerships", decimals: true },
];

function format({ target, suffix, decimals }, t) {
  const value = target * t;
  return (decimals ? value.toFixed(1) : Math.round(value).toLocaleString("en-US")) + suffix;
}

export default function StatsBar() {
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

  return (
    <section className="border-b border-border bg-white">
      <div className="container grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1.5 px-6 py-9 text-center">
            <span className="text-4xl font-bold text-primary md:text-5xl">{format(s, t)}</span>
            <span className="max-w-[15rem] text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
