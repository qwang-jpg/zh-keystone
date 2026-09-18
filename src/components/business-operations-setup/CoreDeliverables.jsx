import { Globe, MapPinned, FileStack, ShieldCheck, Scale } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const modules = [
  {
    icon: Scale,
    title: "Governance Documents & Compliance Calendar",
    description: "Keep your company's official governance record current and ready to produce for a bank, investor, or immigration reviewer at any time.",
    items: [
      "Operating Agreement / Bylaws review and updates as ownership or management changes",
      "Registered Agent service in your state of formation",
      "Annual Report and franchise tax renewal tracking with filing reminders",
      "Resolution and meeting-minutes templates for major company decisions",
    ],
  },
  {
    icon: Globe,
    title: "Digital & Communication Identity",
    description: "The basic infrastructure every business needs to look and communicate like one.",
    items: [
      "First-year company domain registration (1) and account setup",
      "Business email account setup on your own domain",
      "Business phone number application guidance",
    ],
  },
  {
    icon: MapPinned,
    title: "Operating Address & Government Records",
    description: "Keeping your registered address and agency filings accurate as your company grows or moves.",
    items: [
      "Operating address setup / change guidance",
      "State and federal government system company-information updates",
      "\"Company & Status Compliance Maintenance Guide\" document",
    ],
  },
  {
    icon: FileStack,
    title: "Core Business Document Templates",
    description: "The documents you'll actually use to bill clients, sign agreements, and track your team.",
    items: [
      "Standard Client Service Agreement template",
      "Standard Company Invoice template",
      "Employee Work Record template",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Workers' Compensation Insurance",
    description: "Guidance on getting legally required coverage in place before it becomes a problem.",
    items: ["Workers' Compensation carrier and channel recommendations", "Process guidance and ongoing Q&A"],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="Five modules cover the governance record, infrastructure, documents, and coverage your business needs to stay compliant and run day to day."
      items={modules}
      showCta
    />
  );
}
