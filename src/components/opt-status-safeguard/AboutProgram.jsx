import { motion } from "framer-motion";
import { Search, Handshake, Route } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const features = [
  {
    icon: Search,
    title: "真实的OPT就业安置资源",
    description:
      "依托500多家孵化与合作企业组成的网络，提供2,000多个真实岗位，我们帮您快速进入合规职位，获得经得起核验的工作经历，让您的OPT身份合法保持有效。",
  },
  {
    icon: Handshake,
    title: "优质担保机会",
    description:
      "我们拒绝任何形式的非法安置。通过一个既符合资质、又真心愿意担保STEM OPT/H-1B的真实企业网络，我们为客户对接支持长期职业发展的真实岗位。",
  },
  {
    icon: Route,
    title: "多元化的留美路径",
    description:
      "我们提供合法的自雇与创业咨询、职业发展支持、投资类移民评估，以及职业类移民规划，为客户量身定制合规策略，提供多元、可持续的留美路径。",
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
              关于OPT求职保障计划
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              <strong className="text-keystone-ink">OPT求职保障计划</strong>
              是Keystone Strategies专为持OPT身份的国际学生打造的系统化服务，依托我们成熟的雇主合作网络
              及数百家孵化企业。我们提供真实合规的就业安置支持、端到端的合规身份过渡服务，
              并持续对接H-1B担保方与多元移民路径，帮助客户在全面提升职业发展的同时，保持身份不中断。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ImagePlaceholder sourceFile="thomas-habr-wprOCzLIEYI-unsplash.jpg" aspect="aspect-[4/3]" />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
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
