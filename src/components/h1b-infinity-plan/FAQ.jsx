import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    "q": "公司在办理H-1B申请时需要具备哪些条件？",
    "a": "企业必须能够支撑一份真实的岗位聘用，并证明该职位背后的运营、工作内容与资源支持。我们协助整理商业计划、注册记录与财务文件，供移民律师评估公司与申请材料。"
  },
  {
    "q": "我能把由自己公司担保的H-1B转移到其他雇主吗？",
    "a": "可以，只要满足适用的H-1B转移要求。新雇主必须遵循相应的申请流程。我们可以协助整理律师所需的公司与薪资记录。"
  },
  {
    "q": "由所有者担保的H-1B申请是否占用年度名额？",
    "a": "拥有申请方公司本身并不会使申请自动豁免抽签名额。受名额限制的申请仍需遵循适用的年度注册与抽签流程；具体是否适用豁免，应由律师评估您的案件情况后判断。"
  },
  {
    "q": "职位应如何与我的学历和业务相关联？",
    "a": "所提供的职位必须符合专业职位（specialty occupation）的资格要求，且您的资历必须与该职位相匹配。您的业务活动与支持文件应能说明该专业岗位的真实需求。我们协助整理职位与业务文件，供律师审核。"
  },
  {
    "q": "公司是否必须雇佣其他员工？",
    "a": "并不存在\"仅因H-1B受益人拥有公司股权，就必须额外雇佣员工\"的一刀切要求。企业仍需具备可信的运营计划，并有能力履行相应的雇佣与薪资义务。您具体的架构应与律师一同审核确认。"
  },
  {
    "q": "如果USCIS发出补件通知（RFE）该怎么办？",
    "a": "补件通知是要求提供更多信息，并不等同于拒绝。问题可能涉及身份历史、企业运营，或该职位的真实需求。我们协助整理公司记录，并与您的律师协调完成回复。"
  },
  {
    "q": "加入该计划是否需要我已经有现成的创业想法？",
    "a": "在首次评估之前，您并不需要有一份完整成型的商业计划。我们会根据您的背景与目标，帮您探索可行的方向。该计划要求的是一家真实的企业，以及一个符合相关要求的职位。"
  },
  {
    "q": "如果我在首次注册周期未被抽中会怎样？",
    "a": "只要您与公司仍符合条件，就可以为之后的注册周期做准备。维持合法身份与工作授权是另一项独立的要求；注册或拥有公司股权本身并不会延长两者的有效期。我们会协助您与移民律师一同审视接下来的步骤。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="h1b-faq" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="H-1B自雇 常见问题"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-keystone-mist"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink">{item.q}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-primary transition-transform",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            还有更多问题？获取解答
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
