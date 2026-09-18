import { Palette, LayoutTemplate, Search, Rocket } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "A basic logo and visual identity designed to represent your company professionally from day one.",
    items: [
      "Company logo file, with up to 3 rounds of feedback and revisions",
      "Core color palette and typography selection",
      "One-page Brand Guidelines document covering logo usage, colors, and fonts",
      "Business card and email signature design",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Website Architecture & Build",
    description: "Full website planning, content structure, and build, sized to your company's actual scope and services.",
    items: [
      "Website architecture design and content/structure build",
      "Full website content planning and production",
      "Desktop and mobile responsive design",
    ],
  },
  {
    icon: Search,
    title: "SEO & Search Visibility",
    description: "The technical fundamentals that help your site actually get found and indexed.",
    items: [
      "Page titles, meta descriptions, and basic on-page SEO setup",
      "Search engine indexing and sitemap submission",
      "Google Business Profile setup guidance",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Company Profile",
    description: "A final review pass before your site goes live, plus a polished profile document you can share directly.",
    items: ["Pre-launch client review", "Official website launch", "Full Company Profile document"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="From a reusable brand identity system through a live, SEO-ready website and a shareable company profile."
      items={modules}
    />
  );
}
