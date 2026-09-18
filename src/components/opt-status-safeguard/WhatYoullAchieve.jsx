import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const items = [
  {
    number: "01",
    title: "2,000多个真实OPT岗位，覆盖95%以上的专业方向",
    body:
      "Keystone帮助学生在失业倒计时期间快速解决身份问题——通过500家合作企业组成的网络，为您匹配2,000多个真实岗位，涵盖科技、咨询、数据分析、项目管理等众多领域。我们确保您的职业路径与学术背景紧密契合，最快48小时即可拿到正式offer。每一个岗位都来自真实运营、拥有真实用人需求的企业，确保您的就业记录完全合法合规。",
    cta: "获取就业安置资源",
    sourceFile: "radission-us-_XeQ8XEWb4Q-unsplash.jpg",
  },
  {
    number: "02",
    title: "积累真实工作经历，解锁全职机会",
    body:
      "通过我们的合作企业网络，Keystone为您对接由真实用人需求支撑的合法岗位，让您在维持合法身份的同时，积累实战工作经验、提升技能、丰富简历。这段工作经历经得起未来背景调查的考验，为您的职业发展增添真实价值，也可能转化为全职机会——为您创造长期的职业成长空间。",
    cta: "获取完整OPT申请指南",
    sourceFile: "sigmund-Fa9b57hffnM-unsplash.jpg",
  },
  {
    number: "03",
    title: "对接STEM OPT与H-1B担保雇主资源",
    body:
      "一旦您的合规OPT身份得到保障，Keystone将依托合作企业网络，为您对接拥有真实用人需求、并愿意提供担保的企业，帮助您合法推进STEM OPT，进而迈向H-1B。我们始终致力于杜绝任何形式的非法付费担保安排；每一个岗位都真实存在且以职业发展为导向。对于计划长期留美的客户，我们也提供EB-2/EB-3等移民路径的咨询，帮助您在推进职业发展的同时，稳步迈向长期合法居留。",
    cta: "获取担保雇主名单",
    sourceFile: "william-bout-TbTgtx7kmes-unsplash.jpg",
  },
];

export default function WhatYoullAchieve() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={<>选择OPT就业保障计划<br />您将获得什么</>} />

        <div className="mt-14 space-y-16">
          {items.map((it, i) => (
            <motion.div
              key={it.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImagePlaceholder sourceFile={it.sourceFile} aspect="aspect-[4/3]" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary/50">{it.number}</span>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-keystone-ink">{it.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                <Button asChild className="mt-6">
                  <Link to="/contact">{it.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
