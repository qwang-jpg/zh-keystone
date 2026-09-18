import { useEffect, useId } from "react";
import particlesJsUrl from "particles.js/particles.js?url";

export default function ParticlesBg() {
  // Scoped so multiple instances on a page don't collide on the same DOM id.
  // particles.js builds CSS selectors from this id internally, so React's
  // colon-containing id (":r1:") must be stripped — colons break `querySelector`.
  const containerId = `particles-js-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    // particles.js relies on `arguments.callee`, which strict-mode ES modules
    // forbid, so it must run as a classic script rather than an import.
    const script = document.createElement("script");
    script.src = particlesJsUrl;
    script.onload = initParticles;
    document.body.appendChild(script);

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

    return () => {
      if (window.pJSDom?.length > 0) {
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }
      script.remove();
    };
  }, [containerId]);

  return <div id={containerId} className="absolute inset-0 h-full w-full" />;
}
