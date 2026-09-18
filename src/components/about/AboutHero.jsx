import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutKeystoneBackground from "@/assets/background/About-Keystone-background.png";
import heroOfficeImage from "@/assets/background/hero-office-glass-room.webp";

export default function AboutHero() {
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

      <div className="container relative grid grid-cols-1 items-center gap-14 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl"
          >
            您在美国立足的战略伙伴
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg font-semibold text-keystone-green/95 md:text-xl"
          >
            移民、创业与雇主合规的全流程战略顾问服务
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            为在美国打拼未来的全球人才与创业者提供全周期解决方案——从移民策略到公司注册与雇主架构设计。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button asChild size="lg" className="bg-white text-keystone-ink hover:bg-white/90">
              <Link to="/contact">
                预约服务
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <a href="#serve">
                看看我们是否适合您
                <Compass className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[340px] pb-12"
        >
          <div className="group aspect-[4/5] w-[74%] overflow-hidden rounded-2xl shadow-[0_24px_40px_-12px_rgba(0,0,0,0.5)]">
            <img
              src={aboutKeystoneBackground}
              alt="Keystone Strategies 前台"
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-6 -left-3.5 rounded-xl border border-white/15 bg-keystone-ink/85 px-4 py-3 backdrop-blur">
            <p className="text-xl font-bold text-keystone-green">7年+</p>
            <p className="text-xs text-white/65">实战经验</p>
          </div>
          <div className="absolute bottom-0 right-0 aspect-[3/4] w-[56%] overflow-hidden rounded-2xl shadow-[0_24px_40px_-12px_rgba(0,0,0,0.5)] ring-4 ring-white/10">
            <img
              src={heroOfficeImage}
              alt="Keystone Strategies 团队办公场景"
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-full w-full select-none object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
