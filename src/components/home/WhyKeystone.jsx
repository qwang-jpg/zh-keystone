import { Award, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import PillarShowcase from "@/components/common/PillarShowcase";

const pillars = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Contract-Backed Long-Term Protection",
    meta: "Results · protection · long-term commitment",
    panelTitle: "Protection That Goes Beyond a One-Time Service",
    description:
      "We are built around outcomes, not one-time deliverables. Where applicable, our service commitments and protection mechanisms are clearly defined in the service agreement, giving clients continued support beyond the initial engagement as their employment and status needs evolve.",
    facts: [
      { value: "6–36 MONTHS", label: "Long-Term Protection Period" },
      { value: "CONTRACT-BACKED", label: "Protection terms defined in writing" },
      { value: "84.8%", label: "Client retention rate" },
    ],
  },
  {
    icon: Building2,
    num: "02",
    title: "Pioneering Employer Infrastructure Model",
    meta: "Employer setup · operations · employment · status readiness",
    panelTitle: "Building the Employer Infrastructure Behind Immigration Needs",
    description:
      "Keystone pioneered an integrated model that connects company formation, business operations, payroll, workforce compliance, and immigration readiness. Instead of treating immigration and employment as separate issues, we build the employer infrastructure needed to support both from the ground up.",
    facts: [
      { value: "1 MODEL", label: "Integrated employer infrastructure" },
      { value: "4 LAYERS", label: "Business · Operations · Employment · Status" },
      { value: "END-TO-END", label: "From company setup to employer readiness" },
    ],
  },
  {
    icon: Award,
    num: "03",
    title: "100% Proven H-1B & STEM OPT Track Record",
    meta: "Execution · H-1B · STEM OPT · OPT",
    panelTitle: "Proven Through Real Client Outcomes",
    description:
      "Our H-1B and OPT/STEM OPT solutions are built on pathways that have been repeatedly executed in real client cases. From employer readiness and employment structuring to ongoing compliance support, our approach is designed around practical execution rather than theoretical planning.",
    facts: [
      { value: "100%", label: "H-1B & STEM OPT success rate" },
      { value: "300+", label: "H-1B client cases supported" },
      { value: "2", label: "Core Employment-Based Status Pathways" },
    ],
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "Experienced U.S.-Based Advisory Team",
    meta: "10+ years in the U.S. · 5+ years of industry experience",
    panelTitle: "Advisors Who Understand Both the Client and the Employer",
    description:
      "Our advisory team brings more than a decade of firsthand U.S. experience and at least five years of professional industry experience. This allows us to understand both sides of the equation — the immigration challenges international professionals face and the operational realities U.S. employers must navigate.",
    facts: [
      { value: "2 PERSPECTIVES", label: "Client needs + employer realities" },
      { value: "30+", label: "Industries Represented Across Our Experience" },
    ],
  },
];

export default function WhyKeystone() {
  return (
    <PillarShowcase
      id="why"
      title="Why Keystone Strategies"
      description="At Keystone, we focus on outcomes — not one-time transactions. Our model combines contract-backed protection, proven execution, pioneering employer infrastructure, and experienced advisors to provide clients with long-term support through complex immigration and employment needs."
      items={pillars}
    />
  );
}
