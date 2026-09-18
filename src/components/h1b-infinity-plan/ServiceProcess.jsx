import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    "number": "01",
    "title": "评估与您的专属服务方案",
    "description": "我们审视您的教育背景、职业经历、当前身份与长期目标，共同规划出公司架构、服务范围、专业资源与截止日期，形成一份可执行的方案。"
  },
  {
    "number": "02",
    "title": "公司注册与雇主搭建",
    "description": "我们统筹公司注册、成立文件、股东或运营协议及EIN申请，并在您的雇佣方案需要时，协助完成适用的公司备案与E-Verify注册。"
  },
  {
    "number": "03",
    "title": "企业银行开户与公司基础搭建",
    "description": "我们协助您远程申请企业银行账户，并搭建网站、企业邮箱与公司手册。这些基础设施让您的企业具备专业形象，支撑真实的日常运营。"
  },
  {
    "number": "04",
    "title": "注册与申请材料准备",
    "description": "我们指导雇主账户搭建与H-1B注册，整理支持材料，并与移民律师协调完成申请准备与递交。在适用情况下，我们也会协助协调OPT或STEM OPT相关文件及工作授权申请。"
  },
  {
    "number": "05",
    "title": "持续运营与税务支持",
    "description": "我们提供员工入职、薪资记录、W-2表格、工伤赔偿保险、记账与报税准备方面的指导。CPA与法律资源将持续支持您公司的各项运营义务。"
  },
  {
    "number": "06",
    "title": "长期身份与职业规划",
    "description": "我们帮助您提前规划H-1B延期，并根据您的资格条件、企业发展与个人目标，与移民律师一同探讨EB-2或EB-3等更长期的路径选择。"
  }
];

export default function ServiceProcess() {
  return (
    <section id="service-process" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="服务流程"
          description="从首次评估到持续运营，六个环环相扣的阶段，将您的企业搭建与移民规划紧密衔接。"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex gap-5 rounded-2xl border border-border bg-keystone-mist p-7"
            >
              <span className="flex-shrink-0 text-3xl font-bold text-primary/30">{s.number}</span>
              <div>
                <h3 className="text-base font-bold leading-snug text-keystone-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
