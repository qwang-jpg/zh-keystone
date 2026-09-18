import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    question: "你们是会计师事务所吗？能帮我报税吗？",
    answer:
      "我们不是会计师事务所。Keystone根据您公司的发展阶段与架构，提供战略性的财务与税务顾问服务。我们帮助识别风险、设计框架，并在需要报税与合规办理时，为您对接持牌CPA合作伙伴。",
  },
  {
    question: "如果我的公司已经有会计了，还需要你们的服务吗？",
    answer:
      "我们的介入时机在会计日常操作之前，从合规与移民规划的角度搭建战略性财务框架。我们的角色是对您会计工作的补充，同时支持业务成长与法律合规两个方面。",
  },
  {
    question: "什么阶段应该考虑财务战略咨询？",
    answer:
      "越早越好。我们在公司注册前、注册中及注册后都能提供量身定制的支持，帮助您规避初创阶段的风险，并为未来节省大量调整成本。",
  },
  {
    question: "这是一次性服务，还是长期合作？",
    answer:
      "我们同时提供一次性战略咨询与长期合作两种模式。许多客户会在业务成长过程中，持续保留我们提供记账监督与年度合规日历管理服务。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Keystone Strategies 财务顾问 — 常见问题"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">
                    {i + 1}. {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-primary" />
                  )}
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
