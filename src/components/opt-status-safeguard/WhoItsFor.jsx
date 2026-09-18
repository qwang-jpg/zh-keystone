import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const audiences = [
  {
    number: "01",
    title: "即将开始或已在OPT期间，尚未找到对口工作",
    description:
      "您的OPT第一年即将开始或已经启动，急需一份符合OPT标准的真实工作——职责需与专业方向紧密对口——以避免陷入失业期危机。",
    cta: "预约求职安置咨询",
  },
  {
    number: "02",
    title: "OPT期间被裁员或合同终止——正在与失业计时赛跑",
    description: "您在OPT期间遭遇裁员或解雇，急需新的工作机会或过渡方案，以确保累计失业时长不超过政策限制，维持合法身份。",
    cta: "预约失业计时紧急救援咨询",
  },
  {
    number: "03",
    title: "计划申请STEM OPT，但现任雇主不符合要求",
    description: "您计划申请STEM OPT延期，但目前的OPT雇主不符合相关要求——这可能让您未来的延期申请遭遇障碍，危及身份安全。",
    cta: "预约更换雇主咨询",
  },
  {
    number: "04",
    title: "计划长期留美，需要专业指导",
    description: "您在寻找一套涵盖身份延续、H-1B担保资格与移民路径规划的系统化方案——确保关键截止日期与政策窗口顺利衔接。",
    cta: "预约长期规划咨询",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="OPT就业保障计划适合哪些人？" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
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
