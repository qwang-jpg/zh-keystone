import { useEffect, useId } from "react";
import particlesJsUrl from "particles.js/particles.js?url";

// particles.js relies on `arguments.callee`, which strict-mode ES modules
// forbid, so it must run as a classic script rather than an import. It's
// loaded once per page load: re-running it resets its global instance list
// (`window.pJSDom`), orphaning any instance that's still animating.
let scriptPromise = null;
function loadParticlesJs() {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = particlesJsUrl;
      script.onload = resolve;
      script.onerror = () => {
        scriptPromise = null;
        reject();
      };
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

export default function ParticlesBg() {
  // Scoped so multiple instances on a page don't collide on the same DOM id.
  // particles.js builds CSS selectors from this id internally, so React's
  // colon-containing id (":r1:") must be stripped — colons break `querySelector`.
  const containerId = `particles-js-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    // Purely decorative animation: skipped for users who ask for less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let cancelled = false;
    loadParticlesJs().then(
      () => {
        if (!cancelled) initParticles();
      },
      () => {}
    );

    function initParticles() {
      window.particlesJS(containerId, {
        particles: {
          number: { value: 160, density: { enable: true, value_area: 900 } },
          color: { value: "#6cb04a" },
          shape: { type: "circle", stroke: { width: 0.5, color: "#149a8c" } },
          opacity: {
            value: 0.65,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.25 },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1 },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#149a8c",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1.5, random: true, out_mode: "bounce" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false },
            resize: true,
          },
          modes: {
            grab: { distance: 220, line_linked: { opacity: 0.9 } },
          },
        },
        retina_detect: true,
      });
    }

    // Destroys only this component's instance. destroypJS() also sets the
    // global `pJSDom` to null, so the remaining instances are put back.
    return () => {
      cancelled = true;
      const instances = window.pJSDom || [];
      const own = instances.find((p) => p.pJS.canvas.el.parentElement?.id === containerId);
      own?.pJS.fn.vendors.destroypJS();
      window.pJSDom = instances.filter((p) => p !== own);
    };
  }, [containerId]);

  return <div id={containerId} className="absolute inset-0 h-full w-full" />;
}
