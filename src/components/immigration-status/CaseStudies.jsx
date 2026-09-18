import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const cases = [
  {
    tag: "职位与申请规划",
    title: "H-1B申请规划",
    headline: "已帮助300多位客户搭建具备申请条件的职位",
    tags: ["岗位描述设计", "注册", "雇主合规", "律师协调"],
    paragraphs: [
      "无论客户是在转移现有H-1B、首次注册，还是围绕创始人自有公司搭建职位，我们始终从同一个问题出发：这份职位是否真的需要这个人？在此基础上，我们设计岗位职责与SOC分类，搭建雇佣关系架构，并准备好律师递交所需的公司端材料。",
      "迄今为止，我们已帮助300多位客户搭建出经得起注册、补件通知乃至最终裁决考验的职位。",
    ],
    sourceFile: "helen-cramer-ljXkKfbOlXs-unsplash.jpg",
  },
  {
    tag: "长期路径规划",
    title: "职业类绿卡规划",
    headline: "在H-1B案件推进的同时，规划好EB-2/EB-3路径",
    tags: ["EB-2/EB-3", "长期规划", "政策解读"],
    paragraphs: [
      "对于希望超越现有签证做长远打算的客户，我们会及早介绍EB-2/EB-3职业类绿卡流程，详解主要阶段及其与现有H-1B时间线的衔接方式。客户由此能清楚了解接下来的走向，以及何时该开始规划。",
    ],
    sourceFile: "javier-miranda-AlJ9TQqeCV0-unsplash.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Keystone Strategies 成功案例" />

        <div className="mt-16 space-y-16">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImagePlaceholder sourceFile={c.sourceFile} aspect="aspect-[4/3]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">{c.tag}</p>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-keystone-ink">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-keystone-ink/70">{c.headline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-keystone-mist px-3 py-1 text-xs font-medium text-keystone-ink/70 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {c.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
