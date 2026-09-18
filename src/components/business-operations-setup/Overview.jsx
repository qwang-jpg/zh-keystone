import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "Governance documents and resolutions ready to produce for a bank, investor, or immigration reviewer",
  "Registered agent coverage so you never miss a state notice, annual report, or franchise tax deadline",
  "A professional domain, business email, and phone line instead of a personal Gmail and cell number",
  "A registered operating address that's actually valid for state and federal correspondence",
  "Government systems updated whenever your company's information changes",
  "Ready-to-use contract, invoice, and work record templates instead of building them from scratch",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="The Governance and Operating Layer Most New Companies Skip"
      description="Formation gives you a legal entity. Keeping its governance documents, filings, and daily infrastructure current is what makes that entity look, act, and transact like a real business, to clients, banks, and government agencies alike."
      checklist={checklist}
    />
  );
}
