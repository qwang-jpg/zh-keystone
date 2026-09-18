import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export default function ServiceOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="申请的成败取决于职位本身，而不仅仅是文书工作"
          description="USCIS审查职业类签证申请时，核心始终围绕一个问题：这份工作是否真的需要这个人，在这家公司？当公司由创始人主导时，这个问题会被审视得更加严格，因为雇主与受益人可能是同一个人。我们会在递交申请之前，就把企业、职位与雇佣关系搭建到位，从根本上回答这个问题。"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <ImagePlaceholder
            sourceFile="nicolas-jehly-VwIF0Ls7LVo-unsplash.jpg"
            aspect="aspect-[16/9]"
          />
        </motion.div>
      </div>
    </section>
  );
}
