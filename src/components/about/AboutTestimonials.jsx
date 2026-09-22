import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TabbedTestimonials from "@/components/common/TabbedTestimonials";

const testimonials = [
  {
    name: "Jason Liu",
    role: "创始人，AI工程初创公司",
    headline: "从F-1创业尝试到正式获得融资",
    quote: "Keystone帮助我把一个模糊的想法，变成了真正具备融资能力的公司。",
    body: "我在F-1身份下开始创业时，手上只有一个粗略的想法。直到Keystone介入后，我才真正把一切理顺——身份规划、公司注册、股权架构和融资策略。在他们的帮助下，我成功获得了H-1B身份，将公司注册为合法的美国实体，并搭建起真实运营的基础。如今，我们已完成正式的种子轮融资，业务也在稳步增长。Keystone不仅仅是服务提供方，更是长期合作伙伴，用清晰的策略陪伴创业者走过每一个关键步骤。",
  },
  {
    name: "Cecilia Yan",
    role: "创始人，教育咨询初创公司",
    headline: "从服务雏形到百万美元营收企业",
    quote:
      "Keystone围绕我的身份和商业模式量身设计架构，每一步都像是在共同搭建一家公司。",
    body: "我最初只有一个简单的教育服务想法。Keystone帮助我把公司架构、商业策略、法律协议到融资的每一个环节都正式落地。他们提供的不只是模板，而是与我一起打磨每一个细节：公司注册、运营管理、税务合规和市场准入。一年之内，公司实现了超过一百万美元的年营收。Keystone不只是一家服务机构，更是真正的战略伙伴，陪伴我走过每一个里程碑。",
  },
  {
    name: "Kevin He",
    role: "数据科学家，纽约大学",
    headline: "从STEM OPT失业到H-1B获批并迈向绿卡之路",
    quote:
      "我在STEM OPT期间被裁员，但Keystone帮我重新搭建架构，让一切重回正轨。",
    body: "失业后，我同时面临身份到期和未来的不确定性。Keystone迅速帮我设计合规的雇佣架构、递交H-1B申请，并稳定住了局面。从身份过渡、商业规划到长期移民策略，他们的团队全程陪伴。如今，我已重新走上通往绿卡的稳健轨道。他们真正帮我找到了一条可持续发展的道路。",
  },
  {
    name: "Zach Zhang",
    role: "创始人，电商品牌",
    headline: "从创意构想到具备融资能力的企业架构",
    quote: "Keystone给我的不只是一个模型，而是搭建了让融资真正成为可能的完整架构。",
    body: "我找到Keystone时，手上只有一个构想。他们帮我搭建了公司与移民架构、设计股权方案，并让企业具备了融资条件。他们在法律、商业和税务规划上的专业支持，让整个融资过程顺畅而有序。几个月内，我们就拥有了一家真正可规模化发展的企业，而不只是纸面上的想法。",
  },
  {
    name: "Mandy Rao",
    role: "创始人，咨询公司",
    headline: "从被裁员到创立自己的公司",
    quote: "我在身份到期前40天被裁员，Keystone帮我重新掌控了自己的未来。",
    body: "在H-1B期间失业时，我感觉一切都要崩塌了。Keystone迅速帮我注册了自己的公司，重建移民架构并准备好申请材料。从策略制定、材料准备到执行落地，他们精准地引导我完成每一步。如今，我经营着自己的公司，身份也从未中断。Keystone给我的不仅是一份方案，更是重新掌控未来的能力。",
  },
];

export default function AboutTestimonials() {
  return (
    <TabbedTestimonials
      title="客户评价"
      description="这里的每一个故事，都是Keystone真实服务过的客户经历。"
      stories={testimonials}
      renderSide={({ index, total }) => (
        <>
          <div className="rounded-2xl border border-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              第 {index + 1} / {total} 个故事
            </p>
            <div className="mt-3.5 h-1 rounded-full bg-border">
              <div
                className="h-1 rounded-full bg-keystone-gradient transition-[width] duration-300"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              这里的每一个故事，都是Keystone真实服务过的客户经历——从客户最初面临的处境，
              到我们搭建的架构，再到他们如今持有的身份。
            </p>
          </div>
          <Link
            to="/our-cases"
            className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-keystone-mist p-5 transition-all hover:-translate-y-1 hover:border-primary/45"
          >
            <span>
              <span className="block text-sm font-bold text-keystone-ink">查看完整案例档案</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                18个有据可查的自雇型H-1B案例
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
          </Link>
        </>
      )}
    />
  );
}
