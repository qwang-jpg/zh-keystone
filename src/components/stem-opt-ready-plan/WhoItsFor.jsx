import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, ArrowLeftRight, Clock, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const situations = [
  {
    icon: Building2,
    title: "现任雇主无法支持STEM OPT",
    description:
      "可能未参与E-Verify、对STEM OPT不熟悉，或缺乏所需的合规架构。",
  },
  {
    icon: ArrowLeftRight,
    title: "您被裁员或需要更换雇主",
    description:
      "失业天数、申报要求与申请时机，都需要同时兼顾处理。",
  },
  {
    icon: Clock,
    title: "STEM OPT截止日期临近",
    description:
      "您可能符合资格，但仍缺乏能够及时支撑申请的雇佣安排。",
  },
  {
    icon: ShieldCheck,
    title: "您需要更可持续的雇佣架构",
    description: "一套合规架构，为您更长远的美国职业发展提供更稳固的保障。",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="STEM OPT截止日期不会等待理想雇主的出现"
          description="STEM OPT的挑战往往在申请本身之前就已经开始。无论您处于哪种情况，真正的难点很少只是一份表格——而是确保雇主、职位、培训架构、文件与时间线能够协同运作。"
          className="max-w-3xl mx-0"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-white p-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/10">
                <s.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-keystone-ink">{s.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                获取免费咨询
                <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-semibold leading-relaxed text-keystone-ink">
          目标不仅仅是完成一份STEM OPT申请。
          <br className="hidden sm:block" />{" "}
          <span className="font-medium text-muted-foreground">
            目标是搭建一套能够支撑您身份的完整架构。
          </span>
        </p>
      </div>
    </section>
  );
}
