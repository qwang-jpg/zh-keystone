import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import ServiceWhyKeystone from "@/components/common/ServiceWhyKeystone";

const pillars = [
  {
    icon: Globe2,
    title: "Extensive Experience Across 30+ Industries",
    description:
      "We bring deep, hands-on expertise across technology, finance, media, arts, education, manufacturing, and more, so the policies we draft reflect how your industry actually operates, not a generic template.",
  },
  {
    icon: GraduationCap,
    title: "Top-Tier U.S. Educated Advisory Team",
    description:
      "Our advisory team of 60+ experts comes from top 30 U.S. institutions and brings over a decade of hands-on experience in corporate strategy, tax, and compliance across state and federal employment law.",
  },
  {
    icon: TrendingUp,
    title: "84.8% Retention Rate with Long-Term Partnerships",
    description:
      "Over 84.8% of our clients choose to continue their collaboration with Keystone after the first engagement, including keeping policies current as their headcount and footprint grow.",
  },
  {
    icon: Layers,
    title: "End-to-End Resource Integration for Real Results",
    description:
      "We bring together business consultants and legal partners to build a seamless compliance ecosystem, from onboarding through the policies and postings that govern your team every day after.",
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
