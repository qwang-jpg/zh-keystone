import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const tabs = [
  {
    "title": "美国公司注册",
    "bullets": [
      "审视您的业务活动，选择契合您计划的实体类型。",
      "查询公司名称与域名的可用性。",
      "准备并递交公司注册文件，协调州级备案。",
      "申请雇主识别号（EIN），并在适用情况下协助E-Verify注册。",
      "协调股东协议或运营协议及其他所需的公司文件。"
    ],
    "calloutTitle": "您将获得",
    "callout": "为您的下一步打下公司基础，拥有整理有序的注册记录与清晰的运营计划。根据所在州及具体情况，加急注册最快可在24小时内完成。"
  },
  {
    "title": "企业银行账户开设",
    "bullets": [
      "通过我们的美国银行合作关系，探索远程开户选项。",
      "准备好您的护照、个人信息与公司文件，供银行审核。",
      "为没有SSN或无法亲自到场的合格创始人找出可行方案。",
      "开设专属企业账户，保持运营资金与交易记录井然有序。"
    ],
    "calloutTitle": "您将获得",
    "callout": "一套支撑真实运营、财务记录可追溯的企业银行体系。具体资质要求、所需文件与审批结果，取决于银行本身的规定。"
  },
  {
    "title": "移民与身份指导",
    "bullets": [
      "协调OPT与STEM OPT的申报及身份维护要求指导。",
      "整理H-1B文件清单，并说明准备时间线。",
      "指导USCIS雇主账户搭建与H-1B注册。",
      "协助整理支持材料，并与移民律师沟通对接。",
      "在适用情况下，为您对接移民律师办理申请递交及长期的EB-2或EB-3规划。"
    ],
    "calloutTitle": "您将获得",
    "callout": "一套协调有序的准备流程，从材料收集、注册，到与律师沟通及下一阶段规划。"
  },
  {
    "title": "网站与公司手册",
    "bullets": [
      "设计公司标志与专业视觉形象。",
      "规划网站架构，撰写真实反映您业务的内容。",
      "搭建适配桌面端与移动端访问者的响应式页面。",
      "通过页面SEO优化提升搜索可见性。",
      "准备契合您运营方式的公司手册。"
    ],
    "calloutTitle": "您将获得",
    "callout": "可信的企业形象：一个能够清晰说明您服务、团队与运营情况的专业网站与手册。"
  },
  {
    "title": "公司运营支持",
    "bullets": [
      "搭建企业域名邮箱，并指导企业电话注册。",
      "提供新员工入职清单与入职指导。",
      "说明如何在相关政府记录中更新运营地址。",
      "提供客户服务协议与发票模板，并给予雇佣实践方面的指导。"
    ],
    "calloutTitle": "您将获得",
    "callout": "日常运营的实用工具，从员工入职、客户合同到统一规范的公司记录。"
  },
  {
    "title": "财务与税务申报指导",
    "bullets": [
      "说明基础记账流程，推荐合适的软件。",
      "梳理报税准备与记录留存的相关需求。",
      "在适用情况下，为您对接注册会计师办理年度报税、财务报告与审计。"
    ],
    "calloutTitle": "您将获得",
    "callout": "井然有序、可追溯的财务记录，以及支持公司申报义务的CPA专业支持。"
  },
  {
    "title": "其他专业资源",
    "bullets": [
      "在需要投保时，为您对接工伤赔偿保险提供商。",
      "协调CPA或薪资服务资源，办理工资单与W-2表格。",
      "协助整理H-1B转移、延期及律师审核所需的财务与雇佣记录。"
    ],
    "calloutTitle": "您将获得",
    "callout": "在雇佣、保险与财务文件方面，为您下一步可能需要的专业资源牵线搭桥。"
  }
];

export default function Achievements() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="included-services" className="scroll-mt-24 bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="H-1B无限续航计划能为您带来什么"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-controls="h1b-service-panel"
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                active === i
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-keystone-ink/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.title}
            id="h1b-service-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-8"
          >
            <h3 className="text-xl font-bold text-keystone-ink">{tab.title}</h3>

            {tab.bullets && (
              <ul className="mt-5 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {tab.body && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{tab.body}</p>
            )}

            <div className="mt-6 rounded-xl bg-keystone-mist p-5">
              <p className="text-sm font-bold text-primary">{tab.calloutTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-keystone-ink/80">{tab.callout}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
