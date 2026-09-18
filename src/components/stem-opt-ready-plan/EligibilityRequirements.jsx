import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const requirements = [
  {
    number: "01",
    title: "雇主资格",
    description:
      "您的雇主需要具备合适的架构、业务运营与资源，以支撑真实的STEM OPT雇佣关系。",
  },
  {
    number: "02",
    title: "E-Verify参与",
    description: "雇主必须满足适用的E-Verify与STEM OPT参与要求。",
  },
  {
    number: "03",
    title: "学位与职位对应",
    description:
      "职位需要与符合条件的STEM学位存在清晰关联，并体现您的学术背景将如何在该岗位中得到应用与发展。",
  },
  {
    number: "04",
    title: "监督与培训架构",
    description:
      "STEM OPT是结构化的实践培训。雇佣安排应在整个STEM OPT期间支持真实的监督、职业发展、培训、反馈与评估。",
  },
  {
    number: "05",
    title: "申请与持续合规",
    description:
      "I-983表格、雇主信息、学校申报、STEM OPT申请材料以及持续的雇佣记录，都应体现同一套一致且经得起支撑的雇佣架构。",
  },
];

export default function EligibilityRequirements() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="STEM OPT需要的不只是一封Offer信"
          align="left"
          className="mx-0"
        />

        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          一套可行的STEM OPT策略，取决于雇主、职位、监督、培训与持续实践等多个环节能否协同运作。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            {requirements.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className={i > 0 ? "flex gap-5 pt-6" : "flex gap-5"}>
                  <span className="w-6 shrink-0 pt-px text-sm font-bold text-primary/35">
                    {r.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-snug text-keystone-ink">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
                {i < requirements.length - 1 && <div className="ml-[44px] mt-6 h-px bg-border" />}
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <ImagePlaceholder
              sourceFile="matt-hanns-schroeter-YsC0W2km9I-unsplash.jpg"
              aspect="aspect-[4/3]"
            />
            <div className="mt-4 rounded-2xl bg-keystone-ink p-6">
              <p className="text-sm font-semibold leading-relaxed text-white">
                一个薄弱环节，足以影响整个STEM OPT策略。
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Keystone帮助确保各个环节能够协同运作。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
