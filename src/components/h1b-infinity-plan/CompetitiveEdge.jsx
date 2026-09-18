import { Landmark, ClipboardCheck, UserCheck, LifeBuoy } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const edges = [
  {
    icon: Landmark,
    title: "Remote Business Banking",
    description: "Our banking relationships help simplify account applications for international founders, including remote options for eligible clients without an SSN. We guide you through the documents and requirements; account approval and promotional offers depend on the bank's terms.",
  },
  {
    icon: ClipboardCheck,
    title: "Support Across the Business Lifecycle",
    description: "Company formation, business banking, website development, employee onboarding, financial management, and tax coordination come together in one service plan, with less administrative work for you to manage alone.",
  },
  {
    icon: UserCheck,
    title: "An Experienced Team at Every Step",
    description: "Our team combines business operations experience with immigration planning and tax resources. We coordinate the details, identify potential issues early, and help keep your company and career plans moving forward.",
  },
  {
    icon: LifeBuoy,
    title: "Professional Resources After Launch",
    description: "Access a network of immigration attorneys, CPAs, and insurance providers for petition preparation, document review, tax filings, and ongoing business needs after H-1B selection.",
  },
];

export default function CompetitiveEdge() {
  return <TabbedFeatureList title="H-1B Infinity Plan Competitive Edge" items={edges} />;
}
