import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export default function ServiceOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Petitions Are Won or Lost on the Position, Not Just the Paperwork"
          description="USCIS reviews an employment-based petition around one central question: does this job genuinely require this person, at this company? When the company is founder-led, that question gets asked even harder, since the employer and the beneficiary can be the same person. We build the business, position, and employer-employee relationship to answer it before the filing ever happens."
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
