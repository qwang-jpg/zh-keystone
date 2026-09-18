import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "即将毕业、规划下一步的学生",
    description:
      "即将毕业，同时面临就业与移民的双重压力，但仍坚定希望留在美国、成就自己的未来。",
  },
  {
    number: "02",
    title: "被裁员或找不到雇主的OPT/STEM OPT持有者",
    description:
      "在OPT/STEM OPT期间被裁员，或无法获得H-1B担保，正在寻找合规方案以维持身份。",
  },
  {
    number: "03",
    title: "面临裁员的H-1B持有者",
    description:
      "已被裁员、正处于宽限期的H-1B持有者，需要一条快速合法的路径来维持身份并规划下一步。",
  },
  {
    number: "04",
    title: "失去或找不到担保的Day-1 CPT持有者",
    description:
      "处于Day-1 CPT阶段、失去或无法获得担保的人群，需要一套可持续的合法方案以规避身份风险。",
  },
  {
    number: "05",
    title: "准备创业的创始人",
    description:
      "已经准备好创办企业，但苦于维持合法身份，正在寻求一套合规架构，在美国留下来并发展壮大自己的事业。",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="适合哪些人" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-border bg-keystone-mist p-7"
            >
              <span className="text-3xl font-bold text-primary/30">{a.number}</span>
              <h3 className="mt-3 text-base font-bold leading-snug text-keystone-ink">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl bg-keystone-ink px-8 py-12 text-center">
          <h3 className="max-w-xl text-2xl font-bold leading-snug text-white md:text-3xl">
            把您的创业想法
            <br />
            变成前进的道路。
          </h3>
          <Button
            asChild
            size="lg"
            className="h-auto whitespace-normal bg-white py-3 text-center text-keystone-ink hover:bg-white/90"
          >
            <Link to="/contact">
              了解H-1B无限续航计划
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
