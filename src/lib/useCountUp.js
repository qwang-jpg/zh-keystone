import { useEffect, useState } from "react";

// Eased 0 → 1 progress over `duration` ms, starting on mount. Stat bars
// multiply their target numbers by it to count up from zero.
export function useCountUp(duration = 1400) {
  const [t, setT] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const step = (now) => {
      const raw = Math.min(1, (now - start) / duration);
      setT(1 - Math.pow(1 - raw, 3));
      if (raw < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  return t;
}
