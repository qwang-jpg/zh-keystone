import { motion } from "framer-motion";
import { FileText, Users2, ShieldCheck, ClipboardList } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const features = [
  {
    icon: FileText,
    title: "契合STEM专业的岗位描述设计",
    description:
      "我们设计的岗位职责与职称，真正与员工的STEM专业方向挂钩——这正是STEM OPT延期审查中最受关注的一环。",
  },
  {
    icon: Users2,
    title: "真实的雇佣关系",
    description:
      "我们帮您搭建配有合格主管的真实、可核验雇佣关系，而不是经不起审查的名义安排。",
  },
  {
    icon: ClipboardList,
    title: "监督与管理架构",
    description:
      "我们设计清晰的管理与监督架构，确保I-983所描述的培训与监管在实践中真实落地。",
  },
  {
    icon: ShieldCheck,
    title: "持续的身份维护",
    description:
      "在初次递交之外，我们提供定期跟进与答疑支持，确保雇佣关系在整个STEM OPT延期期间持续保持合规。",
  },
];

export default function AboutProgram() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">
              关于STEM OPT雇主合规培训
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              <strong className="text-keystone-ink">STEM OPT雇主合规培训</strong>
              帮助正确搭建STEM OPT延期中雇主一方的架构，无论该雇主是现有企业，还是创始人为担保自己的
              合规职位而创办的公司。我们专注于USCIS与DSO最关注的核心要素：岗位职责是否真正与员工的
              STEM学位相关、是否有真实的主管监督工作，以及雇佣关系是否经得起真实性考验，而非名义安排。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ImagePlaceholder sourceFile="zoshua-colah-xWsjT0m_mRs-unsplash.jpg" aspect="aspect-[4/3]" />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-keystone-mist p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-keystone-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
