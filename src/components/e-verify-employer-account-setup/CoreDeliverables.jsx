import { FileSignature, Building2, Users, BadgeCheck, ClipboardList } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const steps = [
  {
    icon: FileSignature,
    title: "MOU Review & Enrollment",
    description: "We prepare and submit your company's E-Verify Memorandum of Understanding accurately the first time.",
  },
  {
    icon: Building2,
    title: "Company Profile & Hiring Site Setup",
    description: "Your company profile and hiring site(s) are configured to match your actual entity structure and locations.",
  },
  {
    icon: Users,
    title: "User Roles & Orientation",
    description: "We guide you through assigning program administrators and general users, and completing the required orientation.",
  },
  {
    icon: BadgeCheck,
    title: "Company ID Issued",
    description: "Delivered as your company's E-Verify identifier, ready to reference on I-983 forms, offer letters, and petitions.",
  },
  {
    icon: ClipboardList,
    title: "State New Hire Reporting Registration",
    description: "A separate obligation from E-Verify and I-9: most states require every new hire reported to a state directory within a set window after their start date. We identify the requirement for your state(s) and set up the reporting process.",
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="Beyond E-Verify enrollment, this also covers the state new hire reporting obligation that comes with every hire."
      items={steps}
      columns="sm:grid-cols-2 lg:grid-cols-4"
      compact
    />
  );
}
