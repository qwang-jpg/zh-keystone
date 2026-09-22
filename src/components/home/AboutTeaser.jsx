import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutKeystoneBackground from "@/assets/background/About-Keystone-background.png";

export default function AboutTeaser() {
  return (
    <section id="about" className="bg-keystone-mist py-20 md:py-28">
      <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <h2 className="text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">
            关于 Keystone Strategies
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Keystone Strategies 致力于帮助全球人才与创业者，在美国扎根，发展事业。
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            我们将对美国移民路径、商业发展及行业特定挑战的深刻理解，与超过500个成功案例及7年的实战经验相结合。
            我们根据客户情况制定合规方案，简化复杂流程、减少弯路，帮助客户推进事业发展。
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/about-us">
              了解 Keystone
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[260px] lg:col-span-2 lg:ml-auto lg:mr-4"
        >
          <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
            <img
              src={aboutKeystoneBackground}
              alt="Keystone Strategies 前台"
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-full w-full select-none object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-3 shadow-md">
            <p className="text-2xl font-bold text-primary">7年+</p>
            <p className="text-xs text-muted-foreground">实战经验</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
