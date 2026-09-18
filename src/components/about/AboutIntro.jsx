import { motion } from "framer-motion";
import { Layers, MapPin, Repeat, Users } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const highlights = [
  {
    icon: MapPin,
    title: "达拉斯总部，纽约办公室",
    description: "扎根于客户注册、招聘与运营的第一线。",
  },
  {
    icon: Layers,
    title: "三大业务板块，一支团队",
    description: "移民咨询、企业架构、劳工合规。",
  },
  {
    icon: Users,
    title: "100+专家网络",
    description: "律师、注册会计师与顾问共同服务于同一套方案。",
  },
  {
    icon: Repeat,
    title: "项目制长期协作",
    description: "合作不止于首次申请完成。",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading title="关于 Keystone Strategies" align="left" className="max-w-none" />

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="leading-relaxed text-muted-foreground"
          >
            Keystone Strategies 总部位于达拉斯，并在纽约设有办公室，致力于搭建连接个人成长、
            企业发展与全球流动的战略框架。凭借咨询驱动的方法，我们设计移民路径、搭建合规的公司架构、
            孵化创业项目并优化组织雇佣策略，将政策、市场与人才三者贯通，创造长期价值。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="leading-relaxed text-muted-foreground">
              我们提供的不只是解决方案，更是帮助客户重塑决策框架。在日益复杂多变的全球环境中，
              Keystone帮助客户识别关键变量、搭建可执行的运营架构，并确保长期、稳定的发展路径。
            </p>
            <p className="leading-relaxed text-muted-foreground">
              我们的客户涵盖国际人才、初创企业、教育机构、科技公司、投资机构以及区域行业平台。
              通过项目制协作，我们共同推动个人与组织的成长。
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="rounded-2xl border border-border bg-keystone-mist p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:p-6"
              >
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.9} />
                <p className="mt-3.5 text-sm font-bold leading-snug text-keystone-ink">{h.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{h.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
