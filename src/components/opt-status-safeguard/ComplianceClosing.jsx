import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComplianceClosing() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-24">
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">合规的OPT就业，从现在开始</h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
          Keystone OPT求职保障计划专为即将开始OPT、或已在OPT期间但随着身份临近到期仍难以找到合规雇主的学生打造。
          凭借500多家合作企业与2,000多个真实岗位，我们最快可在48小时内为您送上offer，快速对接真实雇主。
          专属顾问将从始至终一对一指导您的OPT申请，确保身份合规，材料完整准确。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          更重要的是，我们提供持续的担保雇主资源，让您从OPT到H-1B的过渡顺利推进，提前规划以降低风险，
          开辟长期留美之路。无论您是遭遇裁员、正与失业计时赛跑，还是刚刚开始OPT、需要一份合规工作，
          Keystone都能提供完整的端到端解决方案。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          我们承诺拒绝任何形式的非法安置，保护每一位客户的职业发展与合法身份。我们致力于成为您在美国职业旅程中
          坚定可靠的伙伴，既解决眼前的就业与身份难题，也为您的长期职业发展打下坚实基础。
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-keystone-ink hover:bg-white/90">
          <Link to="/contact">
            立即获取您的OPT职位
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
