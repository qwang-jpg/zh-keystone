import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBg from "@/components/ui/particles-bg";

// Shared hero layout for every service page: particle background, optional
// subtitle, and a CTA button. Each page supplies only its copy.
export default function ServiceHero({ title, subtitle, description, ctaLabel, ctaHref = "/contact" }) {
  return (
    <section className="relative overflow-hidden bg-keystone-ink">
      <ParticlesBg />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-keystone-ink via-keystone-ink/70 to-keystone-ink/20"
        aria-hidden="true"
      />

      <div className="container relative pointer-events-none py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg font-semibold text-keystone-green md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pointer-events-auto mt-10"
        >
          <Button asChild size="lg" className="bg-white text-keystone-ink hover:bg-white/90">
            <Link to={ctaHref}>
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
