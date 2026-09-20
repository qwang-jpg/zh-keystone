import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const points = [
  {
    number: "01",
    title: "STEM OPT仅限符合条件的专业",
    description: (
      <>
        OPT适用于任何专业方向的F-1签证持有者，任何学位获得者均可申请标准的12个月OPT期限。而STEM
        OPT则仅限持有科学、技术、工程或数学（STEM）学位的学生申请，可将初次OPT额外延长24个月。
      </>
    ),
  },
  {
    number: "02",
    title: "更严格的雇主要求",
    description: (
      <>
        在OPT期间，雇主不必参与E-Verify，允许无薪岗位，学生可为任何合法企业工作。而在STEM
        OPT期间，雇主必须注册E-Verify，必须为学生提供与同岗位美国员工相当的薪酬与工作条件，
        并且必须递交I-983培训计划。
      </>
    ),
  },
  {
    number: "03",
    title: "额外增加60天失业宽限",
    description: (
      <>
        在OPT期间，学生最多允许90天失业。在STEM OPT延期期间，可额外获得60天，因此整个OPT加STEM
        OPT期间的累计失业时长不得超过150天。
      </>
    ),
  },
];

// Dark-themed comparison strip, redesigned to sit as a value-section
// extension right after "About the Program" and above the (white) service
// content section — same card language as the EB page's RealEmployer block.
export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-44 -left-32 h-[34rem] w-[34rem] rounded-full bg-keystone-teal/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container relative">
        <SectionHeading
          align="left"
          light
          title="STEM OPT与OPT有什么区别？"
          className="max-w-none mx-0"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-keystone-forest p-8"
            >
              <span className="text-sm font-bold text-keystone-green">{p.number}</span>
              <h3 className="mt-3 text-base font-bold leading-snug text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
