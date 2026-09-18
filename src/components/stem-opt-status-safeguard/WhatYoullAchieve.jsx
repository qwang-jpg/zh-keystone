import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const items = [
  {
    number: "01",
    title: "真正契合学位的岗位描述",
    body:
      "我们设计与员工专业方向及公司实际业务真实契合的STEM相关岗位职责与职称，交付一份完整的《岗位描述》文档，可直接支持I-983及未来的申请。",
    cta: "获取您的岗位描述设计",
    sourceFile: "radission-us-_XeQ8XEWb4Q-unsplash.jpg",
  },
  {
    number: "02",
    title: "清晰架构的真实雇佣关系",
    body:
      "我们帮您搭建符合STEM OPT要求的真实雇佣关系，配备指定主管及能够体现真实监督的管理架构，而非仅停留在纸面的名义安排。",
    cta: "搭建您的雇佣关系架构",
    sourceFile: "Screenshot-2025-07-16-at-16.30.51.png",
  },
  {
    number: "03",
    title: "持续的STEM OPT身份维护",
    body:
      "岗位搭建完成后，我们提供定期的STEM OPT合规跟进与日常答疑支持，确保雇主架构在整个延期期间都经得起审查。",
    cta: "获取持续合规支持",
    sourceFile: "william-bout-TbTgtx7kmes-unsplash.jpg",
  },
];

export default function WhatYoullAchieve() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title={<>STEM OPT雇主合规培训<br />您将获得什么</>} />

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
