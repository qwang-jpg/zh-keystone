import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/background/hero-office-glass-room.webp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-keystone-ink">
      <div className="absolute inset-0 bg-keystone-gradient opacity-20" />
      <div
        className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-keystone-teal/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-keystone-green/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative grid grid-cols-1 items-center gap-14 py-24 md:py-32 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            Plan Your Status.
            <br />
            Build Your Future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-white/70 md:text-lg"
          >
            Keystone Strategies provides integrated support for international professionals
            navigating STEM OPT, H-1B, self-employment, business setup, and long-term U.S.
            immigration planning. We bring immigration strategy, employer compliance, and
            business infrastructure together in one coordinated solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button asChild size="lg" className="bg-white text-keystone-ink hover:bg-white/90">
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <a href="#path">
                What is my goal?
                <Target className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-sm text-white/60"
          >
            Mon–Fri 10:00 AM – 6:00 PM <span className="text-white/30">|</span>{" "}
            <a href="tel:+16462947091" className="hover:text-white transition-colors">
              +1 (646) - 294 - 7091
            </a>
          </motion.p>
        </div>
      </div>

      {/* Image bleeds to the viewport edge on large screens; stacks below the
          text in normal flow on smaller screens. */}
      <motion.div
        className="group relative mx-6 mb-10 h-[320px] overflow-hidden rounded-2xl lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:h-auto lg:w-2/5 lg:rounded-none"
        initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        animate={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
      >
        <img
          src={heroImage}
          alt="Keystone Strategies team presenting in a conference room"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-6 bottom-6 rounded-xl bg-keystone-ink/70 px-4 py-3 text-sm font-semibold text-white backdrop-blur sm:inset-x-10">
          500 successful cases · 7 years of hands-on experience
        </div>
      </motion.div>
    </section>
  );
}
