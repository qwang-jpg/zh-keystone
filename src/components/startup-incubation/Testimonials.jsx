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
];

export default function Testimonials() {
  return (
    <TabbedTestimonials title="客户真实评价" stories={testimonials} />
  );
}
