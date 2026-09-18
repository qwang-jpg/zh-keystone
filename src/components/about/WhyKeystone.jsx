import { Globe2, GraduationCap, Layers, TrendingUp } from "lucide-react";
import PillarShowcase from "@/components/common/PillarShowcase";

const pillars = [
  {
    icon: Globe2,
    num: "01",
    title: "Extensive Experience Across 30+ Industries",
    meta: "Expertise · technology, finance, media, arts, education, manufacturing",
    description:
      "We bring deep, hands-on expertise across technology, finance, media, arts, education, manufacturing, and more. Our team understands the nuances between regulatory frameworks and commercial structures in each industry, translating policy and operational complexity into clear, actionable pathways. This depth allows us to truly listen, understand, and deliver solutions that work.",
    facts: [
      { value: "30+", label: "industries served" },
      { value: "7 yrs", label: "hands-on experience" },
      { value: "500", label: "successful cases" },
    ],
  },
  {
    icon: GraduationCap,
    num: "02",
    title: "Top-Tier U.S. Educated Advisory Team",
    meta: "Trust · immigration, corporate strategy, tax, compliance",
    description:
      "Our advisory team of 60+ experts comes from top 30 U.S. institutions and brings over a decade of hands-on experience in immigration, corporate strategy, tax, and compliance. We don't simply transfer information, we bridge systems. With deep structural understanding and operational precision, we act as strategic navigators who help clients land their plans in the real world.",
    facts: [
      { value: "60+", label: "cross-functional consultants" },
      { value: "Top 30", label: "U.S. institutions" },
      { value: "10+ yrs", label: "average experience" },
    ],
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "84.8% Retention Rate with Long-Term Partnerships",
    meta: "Insight · status transitions through growth",
    description:
      "Over 84.8% of our clients choose to continue their collaboration with Keystone after the first engagement. From status transitions to business structuring and growth, we build enduring partnerships, guiding clients through every critical stage with stability and trust, not one-time services.",
    facts: [
      { value: "84.8%", label: "retention rate" },
      { value: "1200+", label: "clients supported" },
      { value: "80+", label: "startups incubated" },
    ],
  },
  {
    icon: Layers,
    num: "04",
    title: "End-to-End Resource Integration for Real Results",
    meta: "Resources · attorneys, CPAs, consultants, legal partners",
    description:
      "We bring together top immigration attorneys, CPAs, business consultants, and legal partners to build a seamless ecosystem for our clients. From entity setup to tax and legal strategy, we integrate every key step with precision and speed, ensuring plans don't just stay on paper but are fully executed on the ground.",
    facts: [
      { value: "1 team", label: "attorneys, CPAs, consultants" },
      { value: "16", label: "services end to end" },
      { value: "100+", label: "specialist network" },
    ],
  },
];

export default function WhyKeystone() {
  return (
    <PillarShowcase
      title="Why Keystone Strategies"
      description="At Keystone, we design pathways, not just complete transactions. By working backward from our clients' goals, we build structures that truly work. Our edge comes from four pillars: expertise, trust, insight, and resources."
      items={pillars}
    />
  );
}
