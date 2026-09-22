import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    title: "STEM OPT Ready Plan",
    description:
      "STEM OPT Ready Plan 是一套一站式合规方案，帮助专业人士通过自雇合法延长STEM OPT身份，同时放心参与H-1B抽签。",
    cta: "了解 STEM OPT Ready Plan",
    href: "/stem-opt-ready-plan",
  },
  {
    title: "STEM OPT身份保障计划",
    description:
      "通过我们成熟的雇主网络及上百家孵化企业的资源，Keystone Strategies为处于STEM OPT期间的国际学生提供真实合规的岗位与全流程的身份过渡支持。",
    cta: "了解STEM OPT身份保障计划",
    href: "/stem-opt-employer-compliance-training",
  },
  {
    title: "OPT Status Protection Program",
    description:
      "通过我们成熟的合作雇主网络及上百家孵化企业的资源，Keystone Strategies为处于OPT期间的国际学生提供真实合规的岗位与全流程的身份过渡支持。",
    cta: "了解 OPT Status Protection Program",
    href: "/opt-status-safeguard",
  },
];

export default function OtherServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="其他OPT / STEM OPT / H-1B相关服务"
          description="覆盖OPT、STEM OPT、H-1B及长期规划的一站式合规方案——在每一步为您的身份与职业发展保驾护航。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div className="p-7">
                <h3 className="text-lg font-bold text-keystone-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
