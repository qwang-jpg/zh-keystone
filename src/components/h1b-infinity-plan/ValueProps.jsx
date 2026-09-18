import { motion } from "framer-motion";
import { ShieldCheck, Zap, Infinity as InfinityIcon } from "lucide-react";

const props = [
  {
    icon: ShieldCheck,
    title: "提前为身份变化做好规划",
    description: "尽早搭建公司基础，为裁员、失业或雇主拒绝担保等情况提前做好准备。我们将您的创业计划与OPT、STEM OPT或H-1B时间线紧密衔接。",
  },
  {
    icon: Zap,
    title: "一支团队，从搭建到运营全程负责",
    description: "统筹公司注册、EIN申请、远程开户、网站建设与公司手册于一处。符合条件的公司注册最快可在24小时内完成；具体处理时间因政府机构与银行而异。",
  },
  {
    icon: InfinityIcon,
    title: "为未来机会打下基础",
    description: "减少对传统雇主的依赖，为符合条件后的未来H-1B注册周期做好准备。我们帮助您把持续运营与长期移民目标衔接起来。",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-keystone-mist p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold leading-snug text-keystone-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
