import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const stories = [
  {
    name: "Jason Liu",
    role: "创始人，AI工程初创公司",
    headline: "从F-1创业尝试到正式获得融资",
    from: "一位仅有初步构想的F-1学生",
    bridge: "身份规划、公司注册、股权架构、融资策略",
    to: "成功获得H-1B并完成正式种子轮融资",
    quote: "Keystone帮助我把一个模糊的想法，变成了真正具备融资能力的公司。",
    body: "我在F-1身份下开始创业时，手上只有一个粗略的想法。直到Keystone介入后，我才真正把一切理顺——身份规划、公司注册、股权架构和融资策略。在他们的帮助下，我成功获得了H-1B身份，将公司注册为合法的美国实体，并搭建起真实运营的基础。如今，我们已完成正式的种子轮融资，业务也在稳步增长。Keystone不仅仅是服务提供方，更是长期合作伙伴，用清晰的策略陪伴创业者走过每一个关键步骤。",
    tags: ["公司注册", "股权架构", "H-1B", "种子轮融资"],
  },
  {
    name: "Cecilia Yan",
    role: "创始人，教育咨询初创公司",
    headline: "从服务雏形到百万美元营收企业",
    from: "一个简单的教育服务想法",
    bridge: "公司注册、运营管理、税务合规、市场准入",
    to: "一年内实现超百万美元的年营收",
    quote:
      "Keystone围绕我的身份和商业模式量身设计架构，每一步都像是在共同搭建一家公司。",
    body: "我最初只有一个简单的教育服务想法。Keystone帮助我把公司架构、商业策略、法律协议到融资的每一个环节都正式落地。他们提供的不只是模板，而是与我一起打磨每一个细节：公司注册、运营管理、税务合规和市场准入。一年之内，公司实现了超过一百万美元的年营收。Keystone不只是一家服务机构，更是真正的战略伙伴，陪伴我走过每一个里程碑。",
    tags: ["商业模式设计", "法律协议", "税务合规", "市场准入"],
  },
  {
    name: "Kevin He",
    role: "数据科学家，纽约大学",
    headline: "从STEM OPT失业到H-1B获批并迈向绿卡之路",
    from: "STEM OPT期间遭遇裁员，身份即将到期",
    bridge: "合规雇佣架构、H-1B申请、长期规划",
    to: "H-1B获批，重回绿卡轨道",
    quote: "我在STEM OPT期间被裁员，但Keystone帮我重新搭建架构，让一切重回正轨。",
    body: "失业后，我同时面临身份到期和未来的不确定性。Keystone迅速帮我设计合规的雇佣架构、递交H-1B申请，并稳定住了局面。从身份过渡、商业规划到长期移民策略，他们的团队全程陪伴。如今，我已重新走上通往绿卡的稳健轨道。他们真正帮我找到了一条可持续发展的道路。",
    tags: ["STEM OPT", "身份合规", "H-1B", "绿卡之路"],
  },
  {
    name: "Zach Zhang",
    role: "创始人，电商品牌",
    headline: "从创意构想到具备融资能力的企业架构",
    from: "仅停留在纸面上的一个构想",
    bridge: "公司与移民架构、股权方案、税务规划",
    to: "一家具备融资能力、可规模化发展的企业",
    quote: "Keystone给我的不只是一个模型，而是搭建了让融资真正成为可能的完整架构。",
    body: "我找到Keystone时，手上只有一个构想。他们帮我搭建了公司与移民架构、设计股权方案，并让企业具备了融资条件。他们在法律、商业和税务规划上的专业支持，让整个融资过程顺畅而有序。几个月内，我们就拥有了一家真正可规模化发展的企业，而不只是纸面上的想法。",
    tags: ["公司架构", "股权方案", "融资支持", "税务规划"],
  },
  {
    name: "Mandy Rao",
    role: "创始人，咨询公司",
    headline: "从被裁员到创立自己的公司",
    from: "身份到期前40天遭遇裁员",
    bridge: "新公司注册、重建移民架构、申请材料准备",
    to: "如今独立经营公司，身份从未中断",
    quote: "我在身份到期前40天被裁员，Keystone帮我重新掌控了自己的未来。",
    body: "在H-1B期间失业时，我感觉一切都要崩塌了。Keystone迅速帮我注册了自己的公司，重建移民架构并准备好申请材料。从策略制定、材料准备到执行落地，他们精准地引导我完成每一步。如今，我经营着自己的公司，身份也从未中断。Keystone给我的不仅是一份方案，更是重新掌控未来的能力。",
    tags: ["公司注册", "身份合规", "申请材料准备", "薪资体系搭建"],
  },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  const go = (dir) => setIndex((i) => (i + dir + stories.length) % stories.length);

  return (
    <section id="stories" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <SectionHeading
            title="客户评价"
            description="五段真实历程，见证客户从起点到今天的转变，点击查看每一个故事。"
            align="left"
            className="max-w-2xl"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="上一个故事"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="下一个故事"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stories.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.name}
                onClick={() => setIndex(i)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  isActive ? "border-keystone-ink bg-keystone-ink" : "border-border bg-white"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-keystone-green text-keystone-ink" : "bg-keystone-mist text-primary"
                    )}
                  >
                    {initials(s.name)}
                  </span>
                  <span className="min-w-0">
                    <span className={cn("block truncate text-sm font-bold", isActive ? "text-white" : "text-keystone-ink")}>
                      {s.name}
                    </span>
                    <span className={cn("block truncate text-xs", isActive ? "text-white/60" : "text-muted-foreground")}>
                      {s.role}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={story.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-border lg:grid-cols-2"
        >
          <div className="flex flex-col gap-5 bg-keystone-ink p-8 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-keystone-green">{story.headline}</p>
            <div className="flex flex-col gap-3.5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">起点</p>
                <p className="mt-2 text-lg font-bold leading-snug text-white">{story.from}</p>
              </div>
              <div className="flex items-center gap-2.5 pl-1.5">
                <ArrowDown className="h-4 w-4 text-keystone-green" />
                <span className="text-xs font-medium text-white/70">{story.bridge}</span>
              </div>
              <div className="rounded-2xl bg-primary p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">现状</p>
                <p className="mt-2 text-lg font-bold leading-snug text-white">{story.to}</p>
              </div>
            </div>
            <div className="mt-auto flex items-center gap-3.5 border-t border-white/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                {initials(story.name)}
              </span>
              <span>
                <span className="block text-sm font-bold text-white">{story.name}</span>
                <span className="block text-xs text-white/60">{story.role}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 md:p-9">
            <Quote className="h-7 w-7 text-primary/35" />
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-keystone-ink">
              &ldquo;{story.quote}&rdquo;
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{story.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-keystone-mist px-3 py-1 text-xs font-medium text-keystone-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild className="mt-6 self-start">
              <Link to="/contact">
                开启属于您的故事
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
