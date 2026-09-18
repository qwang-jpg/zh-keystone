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
            About Keystone Strategies
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Keystone Strategies is dedicated to helping global talents and entrepreneurs build
            lasting foundations and professional trajectories in the United States.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We combine deep understanding of U.S. immigration pathways, business development, and
            industry-specific challenges with over 500 successful cases and 7 years of hands-on
            experience. Our goal is to design customized, compliant solutions that simplify
            complex processes, eliminate detours, and accelerate your path to success.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/about-us">
              Learn More About Us
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
              alt="Keystone Strategies reception desk"
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-full w-full select-none object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-3 shadow-md">
            <p className="text-2xl font-bold text-primary">7+ yrs</p>
            <p className="text-xs text-muted-foreground">hands-on experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
