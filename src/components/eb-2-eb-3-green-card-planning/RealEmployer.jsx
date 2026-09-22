import { motion } from "framer-motion";
import { Building2, Users, UserCheck } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const principles = [
  {
    icon: Building2,
    title: "真实的企业",
    description: "围绕真实的商业活动搭建，而非仅存在于纸面上的实体。",
  },
  {
    icon: Users,
    title: "真实的雇主",
    description: "由真实的雇佣、薪资、财务与合规架构支撑。",
  },
  {
    icon: UserCheck,
    title: "真实的岗位",
    description: "一个经得起PERM招聘与市场工资审查考验的真实长期职位。",
  },
];

export default function RealEmployer() {
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
          title="真实的企业。真实的雇主。真实的岗位。"
          className="max-w-none mx-0"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {principles.map((p, i) => (
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

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/55">
          EB Pathway Program 围绕可持续的雇主架构而设计，而不是为了一次移民递交临时拼凑出的文书。
        </p>
      </div>
    </section>
  );
}
