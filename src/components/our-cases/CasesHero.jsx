import { motion } from "framer-motion";

const stats = [
  { value: "7 yrs", label: "hands-on experience in status and business planning" },
  { value: "1,200+", label: "clients supported across immigration and business" },
  { value: "84.8%", label: "retention rate with long-term client partnerships" },
  { value: "100%", label: "approval rate on every case that has completed filing" },
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
          Real Cases.
          <br />
          Proven Expertise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-lg font-semibold text-keystone-green md:text-xl"
        >
          Self-employment H-1B · 19 documented cases
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Every case below is a real client who built a company of their own — some couldn&apos;t
          find an employer to sponsor them, others walked away from one that no longer fit. Same
          three-part structure each time: the problem they walked in with, the plan we built, the
          status they hold today.
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
