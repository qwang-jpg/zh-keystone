import { Link } from "react-router-dom";
import { BookOpen, CalendarClock, FileSpreadsheet, Handshake, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    icon: BookOpen,
    title: "初创企业记账与会计体系搭建",
    description:
      "我们帮您搭建适合初创阶段企业的基础记账与财务管理结构，确保账目从第一天起就保持清晰、经得起审查。",
    items: [
      "科目表与会计软件搭建（QuickBooks或Xero）",
      "《初创企业基础财务管理指南》文档",
      "一套您真正能够坚持执行的每月记录与对账习惯",
    ],
  },
  {
    icon: CalendarClock,
    title: "年度报税与公司续期规划",
    description:
      "我们将适用于贵实体的年度报税、公司续期及配套财务文件要求，整理成一份统一的合规日历。",
    items: [
      "《年度报税与公司续期流程指南》文档",
      "提前一年规划好的关键合规截止日期日历",
      "降低错过申报或丧失良好信誉状态的风险",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "联邦与州税务申报协调",
    description:
      "我们梳理出真正适用于您实体类型的联邦与州税务义务，确保不会等到截止日期过后才发现问题。",
    items: [
      "根据贵实体的税务选择（1120、1120-S或1065表格）协调联邦申报",
      "跟踪州特许经营税与年度报告截止日期",
      "在业务活动需要时，提供销售税注册指导",
    ],
  },
  {
    icon: Handshake,
    title: "持续财务顾问与CPA协调",
    description:
      "记账与申报只是基础，而非终点。我们会在企业成长过程中持续参与，并直接与您的CPA及会计团队协调对接。",
    items: [
      "直接与会计师事务所协调会计、审计与监管申报事宜",
      "在适合您税务情况时提供S-corp选择指导",
      "随着营收、团队规模或架构变化，定期跟进回访",
    ],
  },
];

export default function StrategicServices() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="服务内容"
          description="从您每月都会用到的记账系统，到确保公司保持良好信誉状态的合规日历与CPA协调。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col rounded-2xl border border-border bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-keystone-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  立即咨询专家
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
