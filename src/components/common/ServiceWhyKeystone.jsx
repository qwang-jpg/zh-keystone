import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const defaultDescription =
  "At Keystone, we design pathways, not just complete transactions. By working backward from our clients' goals, we build structures that truly work. Our edge comes from four pillars: expertise, trust, insight, and resources.";

const defaultPillars = [
  {
    icon: Globe2,
    title: "Extensive Experience Across 30+ Industries",
    description:
      "We bring deep, hands-on expertise across technology, finance, media, arts, education, manufacturing, and more. Our team understands the nuances between regulatory frameworks and commercial structures in each industry, translating policy and operational complexity into clear, actionable pathways. This depth allows us to truly listen, understand, and deliver solutions that work.",
  },
  {
    icon: GraduationCap,
    title: "Top-Tier U.S. Educated Advisory Team",
    description:
      "Our advisory team of 60+ experts comes from top 30 U.S. institutions and brings over a decade of hands-on experience in immigration, corporate strategy, tax, and compliance. We don't simply transfer information, we bridge systems. With deep structural understanding and operational precision, we act as strategic navigators who help clients land their plans in the real world.",
  },
  {
    icon: TrendingUp,
    title: "84.8% Retention Rate with Long-Term Partnerships",
    description:
      "Over 84.8% of our clients choose to continue their collaboration with Keystone after the first engagement. From status transitions to business structuring and growth, we build enduring partnerships, guiding clients through every critical stage with stability and trust, not one-time services.",
  },
  {
    icon: Layers,
    title: "End-to-End Resource Integration for Real Results",
    description:
      "We bring together top immigration attorneys, CPAs, business consultants, and legal partners to build a seamless ecosystem for our clients. From entity setup to tax and legal strategy, we integrate every key step with precision and speed, ensuring plans don't just stay on paper but are fully executed on the ground.",
  },
];

// Shared "why Keystone" section: the same four-pillar pitch reused across
// service pages. Pages that want page-tailored wording override
// `description` and/or `pillars`; everyone else just renders the default.
export default function ServiceWhyKeystone({
  title = "Why Keystone Strategies",
  description = defaultDescription,
  pillars = defaultPillars,
}) {
  return <TabbedFeatureList title={title} description={description} items={pillars} />;
}
