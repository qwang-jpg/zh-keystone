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
            复杂问题
            <br />
            系统解决
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-white/70 md:text-lg"
          >
            Keystone Strategies 为国际专业人才提供一体化支持，覆盖STEM OPT、H-1B、自雇创业、
            企业注册以及长期美国移民规划。我们将移民策略、雇主合规与企业架构整合为一套协同解决方案。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button asChild size="lg" className="bg-white text-keystone-ink hover:bg-white/90">
              <Link to="/contact">
                预约免费咨询
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
                我的目标是什么？
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
            周一至周五 上午10:00 - 下午6:00 <span className="text-white/30">|</span>{" "}
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
          alt="Keystone Strategies 团队在会议室进行汇报"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-6 bottom-6 rounded-xl bg-keystone-ink/70 px-4 py-3 text-sm font-semibold text-white backdrop-blur sm:inset-x-10">
          500+成功案例 · 7年实战经验
        </div>
      </motion.div>
    </section>
  );
}
