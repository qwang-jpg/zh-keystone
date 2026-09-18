import { Globe2, GraduationCap, TrendingUp, Layers } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const pillars = [
  {
    icon: Globe2,
    title: "Deep, Hands-On Experience Across 30+ Industries",
    description:
      "Our clients span technology, finance, media, the arts, education, manufacturing, and more. The Keystone team is deeply involved in position structuring and petition planning for clients across these industries, giving us a nuanced understanding of what makes a job description credible in each sector.",
  },
  {
    icon: GraduationCap,
    title: "60+ Advisors from Top 30 U.S. Universities",
    description:
      "The Keystone team includes 60+ senior advisors with Ivy League and Top 30 university backgrounds, averaging over 10 years of experience in the U.S. across status planning, corporate services, and compliance. We don't just pass along information — we are practical, execution-focused partners.",
  },
  {
    icon: TrendingUp,
    title: "84.8% Client Renewal Rate, Support Through Every Stage",
    description:
      "More than 84.8% of clients choose to renew after their first phase of engagement. We drive our work with clear stage-based goals, from registration through petition filing, and build a long-term partnership rather than a one-time transaction.",
  },
  {
    icon: Layers,
    title: "Direct Coordination with Immigration Counsel",
    description:
      "We prepare the position, documentation, and compliance framework, then coordinate directly with your immigration attorney through filing, so the handoff between business structuring and legal filing is seamless.",
  },
];

export default function WhyChooseUs() {
  return <TabbedFeatureList title="Why Choose Keystone Strategies" items={pillars} />;
}
