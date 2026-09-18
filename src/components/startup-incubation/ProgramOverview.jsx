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
            为什么公司架构的决策至关重要
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            实体类型、注册州与股权架构，绝不仅仅是文书上的选择，它们会影响此后的一切。
            这些决策决定了您的税务负担、招聘与发放薪资的能力，以及公司未来能否支撑H-1B申请
            或投资人关系。从第一天起就把这些决策做对，此后的开户、招聘与每一次申报，
            才能建立在坚实的基础之上，而不必日后再重新拆解架构。
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">立即预约免费咨询</Link>
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
