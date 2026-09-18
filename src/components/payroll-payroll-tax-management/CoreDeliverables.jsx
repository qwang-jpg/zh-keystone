import { Settings2, MapPinned, ClipboardCheck, FileStack } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: Settings2,
    title: "Payroll System Setup",
    description:
      "We plan your payroll system build-out around your actual hiring and pay schedule, so your company can legally issue W-2 wages from day one.",
    items: ["Payroll system activation", "Pay schedule and employee classification set up correctly from the start"],
  },
  {
    icon: MapPinned,
    title: "State Tax & Unemployment Insurance Registration",
    description:
      "Every state where an employee actually works has its own payroll tax and unemployment insurance account requirements. We identify and register for exactly the ones you need.",
    items: [
      "Applicable state payroll tax account registration",
      "State unemployment insurance (SUI) account registration",
      "Coverage for multi-state and remote employees",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Wage & Withholding Process",
    description:
      "We build the repeatable mechanics of running payroll: calculating wages, issuing pay, withholding taxes correctly, and keeping records that survive an audit.",
    items: [
      "\"Employee Wage Payment Guide\" document",
      "\"Company Bank Account – Employee Payroll Setup\" document",
      "Recordkeeping process for every pay run",
    ],
  },
  {
    icon: FileStack,
    title: "Payroll Stub & W-2 Preparation",
    description:
      "Come tax season, or whenever a pay stub is requested for a visa filing or lease application, your documentation is ready and accurate.",
    items: [
      "Payroll stub preparation guidance",
      "Year-end W-2 preparation guidance",
      "Key filing deadline reminders",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="From first pay run to year-end W-2s, every deliverable below is built to keep your payroll accurate, on time, and compliant."
      items={deliverables}
      columns="sm:grid-cols-2"
    />
  );
}
