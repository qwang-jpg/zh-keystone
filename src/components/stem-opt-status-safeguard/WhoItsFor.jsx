import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "即将雇佣STEM OPT学生的企业",
    description:
      "您有一个真实的岗位空缺，希望在发出offer之前，先正确搭建好岗位描述、监督架构与I-983基础工作。",
    cta: "预约合规咨询",
  },
  {
    number: "02",
    title: "希望搭建自有公司作为STEM OPT雇主的创始人",
    description:
      "您正在创办或已经运营一家公司，需要让自己STEM OPT延期背后的雇主一方真正合规，而不仅仅是完成递交。",
    cta: "预约创始人雇主咨询",
  },
  {
    number: "03",
    title: "面临审查或核查的现有STEM OPT雇主",
    description:
      "您需要确认现有的岗位职责、监督记录与文件材料，能否经得起DSO或USCIS的审查。",
    cta: "预约合规审查",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="STEM OPT雇主合规培训适合哪些人？" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-white p-8"
            >
              <span className="text-sm font-bold text-primary/50">{a.number}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-keystone-ink">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <Button asChild variant="outline" className="mt-6 w-fit">
                <Link to="/contact">{a.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
