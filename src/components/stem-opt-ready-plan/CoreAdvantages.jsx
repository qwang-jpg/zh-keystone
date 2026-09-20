import { motion } from "framer-motion";
import { Target, LifeBuoy, UserCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "以结果为导向的保障",
    description:
      "我们的服务围绕您整体的STEM OPT结果构建，而非零散的行政任务，相关承诺均在服务协议中明确列明。",
  },
  {
    icon: LifeBuoy,
    title: "端到端的身份支持",
    description:
      "STEM OPT是一段持续的身份状态，而非一次性事件。支持贯穿雇主就绪、申请准备、申报及更换雇主的全过程。",
  },
  {
    icon: UserCheck,
    title: "经过验证的实战经验",
    description:
      "长期的美国教育与职业经验，结合支持国际人才与雇主类移民策略的实战经验。",
  },
];

export default function CoreAdvantages() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-44 -right-32 h-[34rem] w-[34rem] rounded-full bg-keystone-teal/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container relative">
        <SectionHeading
          align="left"
          light
          title="专为稳固并维持您的STEM OPT身份而搭建"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-keystone-forest p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-keystone-gradient">
                <p.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
