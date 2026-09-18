import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "A written employee handbook that reflects the laws in the state(s) where you actually employ people",
  "An anti-harassment and EEO policy with a real complaint procedure behind it",
  "The federal and state labor law postings you're legally required to display",
  "Every worker correctly classified as exempt or non-exempt, employee or contractor",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="Policies Are What Protect You Between Hires"
      description="Onboarding one employee correctly is a one-time task. The policies that govern every employee going forward, and hold up if a dispute or a Department of Labor inquiry ever comes up, are what most early-stage companies skip until it's already a problem."
      checklist={checklist}
    />
  );
}
