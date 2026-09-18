import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const checklist = [
  "一套真正契合初创企业实际运营方式的基础记账与财务管理框架",
  "清楚了解哪些年度报税与公司续期义务真正适用于您",
  "提前规划好截止日期的合规日历，而不是事到临头才发现",
  "经得起审计或审查考验的财务记录留存习惯",
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="企业财税体系搭建" />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base font-medium italic text-primary">
            每家公司从第一天起都需要一套财务支柱
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            一家新注册的公司并不会自带财务职能。如果没有相应体系，报税截止日期会被错过，
            记录会遗失，公司续期也会在悄无声息中失效，直到演变成真正的问题。Keystone Strategies
            从一开始就为您的公司搭建所需的{" "}
            <strong className="text-keystone-ink">基础财务管理框架</strong>
            ，并将年度报税与公司续期要求整理成一份清晰的合规日历。
          </p>
          <p className="mt-5 font-semibold text-keystone-ink">
            我们的服务不止于一份清单，还包括：
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-keystone-mist p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-keystone-ink">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
