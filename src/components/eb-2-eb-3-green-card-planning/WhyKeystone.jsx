import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import ServiceWhyKeystone from "@/components/common/ServiceWhyKeystone";

const pillars = [
  {
    icon: Globe2,
    title: "Extensive Experience Across 30+ Industries",
    description:
      "We bring deep, hands-on expertise across technology, finance, media, arts, education, manufacturing, and more. Our team understands the nuances between regulatory frameworks and commercial structures in each industry, translating policy and operational complexity into clear, actionable pathways.",
  },
  {
    icon: GraduationCap,
    title: "Top-Tier U.S. Educated Advisory Team",
    description:
      "Our advisory team of 60+ experts comes from top 30 U.S. institutions and brings over a decade of hands-on experience in immigration, corporate strategy, tax, and compliance. We act as strategic navigators who help clients land long-term plans in the real world.",
  },
  {
    icon: TrendingUp,
    title: "84.8% Retention Rate with Long-Term Partnerships",
    description:
      "Over 84.8% of our clients choose to continue their collaboration with Keystone after the first engagement. A green card pathway spans years, not months, and we build the enduring partnership that requires.",
  },
  {
    icon: Layers,
    title: "End-to-End Resource Integration for Real Results",
    description:
      "We bring together top immigration attorneys, CPAs, and business consultants to build a seamless ecosystem for our clients, from entity and position structuring through PERM, the I-140, and beyond.",
  },
];

export default function WhyKeystone() {
  return (
    <ServiceWhyKeystone
      description="At Keystone, we design pathways, not just complete transactions. Our edge comes from four pillars: expertise, trust, insight, and resources."
      pillars={pillars}
    />
  );
}
