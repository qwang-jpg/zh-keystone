import { motion } from "framer-motion";

const stats = [
  { value: "7年", label: "身份与商业规划实战经验" },
  { value: "1,200+", label: "位客户获得移民与商业支持" },
  { value: "84.8%", label: "长期客户留存率" },
  { value: "100%", label: "已完成递交案件的获批率" },
];

export default function CasesHero() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink">
      <div className="absolute inset-0 bg-keystone-gradient opacity-20" />
      <div
        className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-keystone-teal/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-keystone-green/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          真实案例。
          <br />
          实力见证。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-lg font-semibold text-keystone-green md:text-xl"
        >
          自雇型H-1B · 18个真实案例存档
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          以下每一个案例都是真实客户创办的企业——有些是找不到愿意担保的雇主，有些是主动离开了
          不再合适的雇主。每个故事都遵循相同的三段式结构：客户带来的问题、我们搭建的方案，
          以及他们如今持有的身份。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-keystone-ink/60 px-5 py-5 md:px-6 md:py-6">
              <div className="text-2xl font-bold text-keystone-green md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-white/65 md:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
