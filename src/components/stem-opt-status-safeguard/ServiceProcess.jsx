import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "岗位与背景审核",
    description:
      "我们审核员工的STEM学位与公司的实际业务，确保我们设计的岗位职责真实相关，而非表面关联。",
  },
  {
    number: "02",
    title: "岗位描述设计",
    description:
      "我们起草职称与岗位职责，并最终定稿一份支持I-983培训计划及未来移民申请的《岗位描述》文档。",
  },
  {
    number: "03",
    title: "监督架构搭建",
    description:
      "我们指定合格的主管，并设计能够体现对员工工作进行真实、持续监督所需的管理架构。",
  },
  {
    number: "04",
    title: "持续身份维护",
    description:
      "岗位正式生效后，我们在整个STEM OPT延期期间提供定期合规跟进与日常答疑支持。",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="STEM OPT雇主合规培训服务流程" />

        <div className="mt-14 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl bg-keystone-mist p-7 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="text-3xl font-bold text-primary/25 sm:text-4xl">{s.number}</span>
              <div>
                <h3 className="text-base font-bold leading-snug text-keystone-ink md:text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
