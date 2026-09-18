import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

const points = [
  {
    number: "01",
    title: "STEM OPT仅限符合条件的专业",
    description: (
      <>
        OPT适用于任何专业方向的F-1签证持有者，任何学位获得者均可申请标准的12个月OPT期限。
        而STEM OPT则仅限持有
        <a
          href="https://www.ice.gov/sevis/schools#dhs-stem-designated-degree-program-list-and-cip-code-nomination-process"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          科学、技术、工程或数学（STEM）学位
        </a>
        的学生申请，可将初次OPT额外延长24个月。
      </>
    ),
  },
  {
    number: "02",
    title: "更严格的雇主要求",
    description: (
      <>
        在OPT期间，雇主不必参与E-Verify，允许无薪岗位，学生可为任何合法企业工作。而在STEM OPT期间，
        雇主必须注册
        <a
          href="https://www.e-verify.gov/"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          E-Verify
        </a>
        ，必须为学生提供与同岗位美国员工相当的<strong className="text-keystone-ink">薪酬</strong>
        {" "}与工作条件，并且必须递交
        <a
          href="https://www.ice.gov/doclib/sevis/pdf/i983.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          I-983
        </a>
        {" "}培训计划。
      </>
    ),
  },
  {
    number: "03",
    title: "额外增加60天失业宽限",
    description: (
      <>
        在OPT期间，学生最多允许<strong className="text-keystone-ink">90</strong>天失业。在STEM
        OPT延期期间，可额外获得<strong className="text-keystone-ink">60</strong>
        {" "}天，与OPT期间累计的90天合并计算——因此整个OPT加STEM OPT期间的累计失业时长不得超过
        <strong className="text-keystone-ink">150</strong>天。
      </>
    ),
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title={
            <>
              STEM OPT与OPT
              <br />
              有什么区别？
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-8"
            >
              <span className="text-sm font-bold text-primary/50">{p.number}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-keystone-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/employment-visa-position-petition-planning">了解更多政策详情</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
