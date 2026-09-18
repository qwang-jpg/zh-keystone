import { Palette, LayoutTemplate, Search, Rocket } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: Palette,
    title: "品牌形象设计",
    description: "从第一天起就能专业代表您公司的基础标志与视觉形象设计。",
    items: [
      "公司标志文件，最多支持3轮反馈与修改",
      "核心配色方案与字体选择",
      "一页纸《品牌规范手册》，涵盖标志使用、配色与字体规范",
      "名片与邮件签名设计",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "网站架构与搭建",
    description: "根据公司实际业务范围与服务内容，进行完整的网站规划、内容架构与搭建。",
    items: [
      "网站架构设计与内容/结构搭建",
      "完整的网站内容规划与撰写制作",
      "适配桌面端与移动端的响应式设计",
    ],
  },
  {
    icon: Search,
    title: "SEO与搜索可见性",
    description: "帮助网站真正被搜索引擎发现并收录的技术基础配置。",
    items: [
      "页面标题、元描述及基础页面SEO配置",
      "搜索引擎收录与网站地图提交",
      "指导设置Google企业档案",
    ],
  },
  {
    icon: Rocket,
    title: "上线与公司简介",
    description: "网站正式上线前的最终审核，以及一份可直接对外分享的精美简介文档。",
    items: ["上线前客户审核", "网站正式上线", "完整的公司简介文档"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="从可复用的品牌形象体系，到上线即具备SEO能力的网站，再到一份可分享的公司简介。"
      items={modules}
    />
  );
}
