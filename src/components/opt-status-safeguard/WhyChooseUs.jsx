import { ShieldCheck, Building2, Briefcase, Award } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const advantages = [
  {
    icon: ShieldCheck,
    title: "One-Stop Solution for Status and Compliant Employment",
    description:
      "Keystone provides OPT job search support with a focus on long-term follow-through, connecting clients with genuine, compliant positions through our partner employer network. From there, we help clients access quality STEM OPT/H-1B sponsorship opportunities, refusing any form of illegal placement, so we truly solve employment and status challenges together and deliver an integrated \"status + career + long-term growth\" service.",
  },
  {
    icon: Building2,
    title: "500+ Partner Employer Network and Incubated Companies",
    description:
      "Keystone has built a network of 500 partner companies through startup incubation and advisory support, together offering 2,000+ genuine positions across technology, consulting, data analytics, project management, and more. This lets clients take up compliant employment at real companies, protecting their status while building the experience and skills that strengthen their long-term career competitiveness.",
  },
  {
    icon: Briefcase,
    title: "Self-Employment Support with Seamless Status Continuity",
    description:
      "Drawing on our top-tier expertise in startup advisory and corporate services, Keystone helps clients who want to start a business legally form a company and structure it for compliance, ensuring real business operations that also satisfy status requirements. We not only help clients extend their status securely through the entrepreneurship pathway, but also incorporate employment-based immigration planning, laying a solid foundation for future career growth and status transition.",
  },
  {
    icon: Award,
    title: "Elite Advisory Team Overseeing Every Step",
    description:
      "Keystone works alongside leading immigration attorneys and top advisory consultants who rigorously oversee every step, from company formation to status document review, ensuring full legal compliance throughout and maintaining a near-100% approval rate. We not only reduce our clients' status risk, but also provide systematic, professional support that safeguards their long-term stability and growth in the U.S.",
  },
];

export default function WhyChooseUs() {
  return (
    <TabbedFeatureList
      title={<>OPT Job Search Safeguard Plan<br />Core Advantages</>}
      items={advantages}
    />
  );
}
