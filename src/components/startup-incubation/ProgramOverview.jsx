import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export default function ProgramOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">
            Why Your Entity Structure Decision Matters
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Entity type, registration state, and ownership structure aren&rsquo;t just paperwork
            choices, they shape everything that follows. These decisions determine your tax
            exposure, your ability to hire and run payroll, and whether your company can support a
            future H-1B petition or investor relationship. Get them right from day one, and
            banking, hiring, and every filing after all build on solid ground instead of a
            structure you have to unwind later.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Book a Free Consultation Now</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ImagePlaceholder sourceFile="image-36.jpg" aspect="aspect-[4/3]" />
        </motion.div>
      </div>
    </section>
  );
}
