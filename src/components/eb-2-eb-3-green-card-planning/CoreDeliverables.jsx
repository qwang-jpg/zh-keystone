import { FileSearch, ClipboardList, Landmark, HandshakeIcon } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: FileSearch,
    title: "EB-2 / EB-3 Classification Analysis",
    description: "We determine the right category for your case before any position planning starts.",
    items: [
      "Advanced degree / exceptional ability (EB-2) vs. skilled worker / professional (EB-3) analysis",
      "Credential and role review against category requirements",
      "Category recommendation consultation",
    ],
  },
  {
    icon: ClipboardList,
    title: "PERM-Ready Position Design",
    description: "The job description and requirements have to match what PERM's recruitment process and DOL review actually expect.",
    items: [
      "Job duties and minimum requirements structured for prevailing wage matching",
      "Position built to withstand PERM recruitment review",
      "Coordination on prevailing wage determination timing",
    ],
  },
  {
    icon: Landmark,
    title: "Employer Structure & Ability-to-Pay",
    description: "Whether the sponsor is an existing company or one you formed to continue your pathway, the employer side has to document real capacity to hire.",
    items: [
      "Employer structure and financial documentation review",
      "Ability-to-pay evidence organized ahead of filing",
      "Guidance for founder-led sponsoring entities specifically",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "PERM, I-140 & Filing Coordination",
    description: "We prepare the company-side materials and stay engaged through the full timeline, not just the first filing.",
    items: [
      "PERM and I-140 company-materials preparation",
      "Direct coordination with your immigration attorney through filing",
      "Priority date and next-stage (I-485 / consular processing) planning guidance",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="From choosing the right category through PERM, the I-140, and the handoff to the next filing stage."
      items={modules}
      showCta
    />
  );
}
