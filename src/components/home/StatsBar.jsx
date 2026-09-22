import { useEffect, useState } from "react";

const stats = [
  { target: 1200, suffix: "+", label: "位客户获得移民与商业支持" },
  { target: 80, suffix: "+", label: "家企业获科技、教育、电商领域孵化支持" },
  { target: 60, suffix: "+", label: "位跨领域顾问参与每一次服务" },
  { target: 84.8, suffix: "%", label: "长期客户留存率", decimals: true },
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
