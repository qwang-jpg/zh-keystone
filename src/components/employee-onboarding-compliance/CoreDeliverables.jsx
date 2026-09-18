import { FileText, IdCard, Receipt, ShieldCheck, ListChecks } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: ListChecks,
    title: "Standardized Hiring & Onboarding Workflow",
    description: "A repeatable process for every hire, so onboarding doesn't get reinvented (or a step missed) each time you bring someone new on.",
    items: [
      "Structured hiring workflow from offer approval through start date",
      "New-hire onboarding checklist and first-week schedule template",
      "Equipment, account, and system-access provisioning checklist",
    ],
  },
  {
    icon: FileText,
    title: "Offer Letter Preparation",
    description: "Guidance on drafting an offer letter that clearly documents the role, compensation, and start date.",
    items: ["\"Job Letter & Employment Verification\" guide document"],
  },
  {
    icon: IdCard,
    title: "Form I-9 Completion & Retention",
    description: "We guide completion of Section 1 and 2, document verification, and the retention schedule employers must follow.",
    items: ["I-9 completed and filed", "Retention timeline guidance"],
  },
  {
    icon: Receipt,
    title: "Form W-4 Completion",
    description: "Correct withholding elections collected before the first pay run, avoiding costly corrections later.",
    items: ["W-4 completed and filed"],
  },
  {
    icon: ShieldCheck,
    title: "Basic Employment Compliance Guidance",
    description: "A practical grounding in the lawful hiring and employment practices every new employer needs to know.",
    items: ["\"U.S. Basic Employment Compliance Guide\" document", "Ongoing Q&A support"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="From a repeatable hiring workflow through the day-one paperwork and compliance guidance every new hire needs."
      items={deliverables}
      columns="sm:grid-cols-2"
    />
  );
}
