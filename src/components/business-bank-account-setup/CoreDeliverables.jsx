import { ClipboardList, Video, Gift } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: ClipboardList,
    title: "Pre-Filing Document & Information Prep",
    description:
      "Before you ever speak to a bank, we gather every piece of company and individual information a banker will ask for, so the opening call is fast instead of a scavenger hunt.",
    items: [
      "1 dedicated banking-setup consultation",
      "\"Business Banking Information Form\" completed together",
      "Formation documents, EIN letter, and ownership details organized and ready to present",
    ],
  },
  {
    icon: Video,
    title: "Guided Account Opening",
    description:
      "We coordinate directly with a bank relationship manager and walk you (or your designated agent) through the entire opening process, remote or in person.",
    items: [
      "Online account-opening meeting scheduled with a bank manager",
      "Live guidance through the bank's application and verification steps",
      "Company banking account fully set up and confirmed",
    ],
  },
  {
    icon: Gift,
    title: "New-Account Bonus Capture",
    description:
      "Major U.S. banks regularly offer new business-account cash bonuses. We make sure you qualify for and actually receive one instead of missing the fine print.",
    items: [
      "Bonus-eligible account and offer identified upfront",
      "Qualifying activity requirements explained clearly",
      "Typical bonus range: $400–$500",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="Every deliverable below is scoped from document prep through a funded, operating account — not just an introduction to a banker."
      items={deliverables}
      columns="lg:grid-cols-3"
    />
  );
}
