import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const team = [
  { name: "Adrian Navarro", role: "行政支持", sourceFile: "an.jpg" },
  { name: "Carlos Rivera", role: "项目经理", sourceFile: "cr.jpg" },
  { name: "Elena Sanchez", role: "移民服务总监", sourceFile: "es.jpg" },
  { name: "Laura Bennett", role: "商业咨询总监", sourceFile: "lb.jpg" },
  { name: "William Huang", role: "客户关系总监", sourceFile: "wh.jpg" },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="我们的专家团队" />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              className="text-center"
            >
              <ImagePlaceholder sourceFile={member.sourceFile} aspect="aspect-square" className="rounded-full" />
              <p className="mt-4 text-sm font-bold text-keystone-ink">{member.name}</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
