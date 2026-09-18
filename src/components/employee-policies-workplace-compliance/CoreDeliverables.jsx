import { BookOpenCheck, ShieldAlert, ClipboardList, UserCheck } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: BookOpenCheck,
    title: "Employee Handbook Development",
    description: "A written handbook covering the policies every employer needs, matched to the state(s) where you actually employ people.",
    items: [
      "At-will employment and code of conduct language",
      "PTO, sick leave, and leave policy drafted to your state's requirements",
      "Wage, hour, and pay schedule policy",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Anti-Harassment & EEO Policy",
    description: "A discrimination and harassment policy with a real complaint procedure, not a boilerplate paragraph.",
    items: [
      "Anti-harassment and equal employment opportunity policy",
      "Complaint and investigation procedure",
      "Manager guidance for handling a reported issue",
    ],
  },
  {
    icon: ClipboardList,
    title: "Required Workplace Postings",
    description: "The federal and state labor law notices you're required to display, identified for your specific state(s).",
    items: [
      "Federal labor law poster checklist",
      "State-specific posting requirements",
      "Physical and remote-workplace posting guidance",
    ],
  },
  {
    icon: UserCheck,
    title: "Employee Classification Review",
    description: "Misclassifying a worker is one of the most common, and most expensive, mistakes an early-stage employer makes.",
    items: [
      "Exempt vs. non-exempt classification review",
      "Employee vs. independent contractor classification review",
      "Corrective guidance where a role is classified incorrectly",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="Four modules cover the handbook, policies, postings, and classification review every employer needs in place."
      items={modules}
    />
  );
}
