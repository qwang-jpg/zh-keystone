import ServiceOverview from "@/components/common/ServiceOverview";

const stats = [
  { value: "$500", label: "Typical New-Account Cash Bonus Secured" },
  { value: "1", label: "Consultation to Prep Every Document" },
  { value: "100%", label: "Remote-Friendly Account Opening" },
];

const checklist = [
  "Avoid commingling personal and business funds, a common trigger for both IRS scrutiny and \"piercing the corporate veil\" liability risk",
  "Open with a bank that actually supports non-resident founders and remote onboarding",
  "Walk into the opening call with every document a banker will ask for already prepared",
  "Capture available new-account cash bonuses instead of leaving them on the table",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="Why Business Banking Can't Wait"
      description="Your EIN and formation documents open the door — a dedicated business bank account is what actually lets your company operate, get paid, and stay compliant."
      checklist={checklist}
      stats={stats}
    />
  );
}
