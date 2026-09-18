import { ArrowLeftRight, FileCheck, GraduationCap, Rocket, Stamp } from "lucide-react";
import AudienceExplorer from "@/components/common/AudienceExplorer";

const goals = [
  {
    label: "Active/Maintain OPT",
    icon: GraduationCap,
    badgeLabel: "Recommended start",
    badgeValue: "2 months ahead",
    secondaryBadgeLabel: "Our turnaround",
    secondaryBadgeValue: "2 weeks",
    heading: "Keep your OPT active and in status",
    body: "We help OPT holders find genuine, compliant job placements through our network of 500+ partner and incubated companies, and guide every filing needed to stay legally employed through the unemployment clock. We recommend starting about two months before you need it in place, and it typically takes our team two weeks to get a client fully set up.",
    cta: "Free Consultation about OPT",
  },
  {
    label: "Active/Maintain STEM-OPT",
    icon: FileCheck,
    badgeLabel: "Recommended start",
    badgeValue: "2 months ahead",
    secondaryBadgeLabel: "Our turnaround",
    secondaryBadgeValue: "4 weeks",
    heading: "Keep your STEM OPT extension compliant",
    body: "We design the Form I-983 training plan with your employer, prepare your I-765 extension filing, and track the case through any Requests for Evidence to Final Evaluation, alongside genuine employer compliance so job duties, supervision, and the employment relationship all hold up to scrutiny. We recommend starting about two months before your extension window opens, and it typically takes our team four weeks to complete the process.",
    cta: "Free Consultation about STEM-OPT",
  },
  {
    label: "Get initial H-1B",
    icon: Stamp,
    badgeLabel: "Recommended start",
    badgeValue: "3 months ahead",
    secondaryBadgeLabel: "Our turnaround",
    secondaryBadgeValue: "6–8 weeks",
    heading: "File your first H-1B without a Sponsor",
    body: "Through the H-1B Infinity Plan, we handle company formation, EIN application, governance documents, E-Verify, and every operational requirement so you can legally launch a business and gain unlimited annual eligibility to enter the H-1B lottery, no employer sponsor required. We recommend starting about three months ahead, and it typically takes our team six to eight weeks to get a client fully prepared.",
    cta: "Free Consultation about H-1B filing",
  },
  {
    label: "Transfer H-1B",
    icon: ArrowLeftRight,
    badgeLabel: "Recommended start",
    badgeValue: "As soon as possible",
    secondaryBadgeLabel: "Our turnaround",
    secondaryBadgeValue: "6–8 weeks",
    heading: "Move your H-1B off Sponsor dependency",
    body: "Whether you've been laid off, are inside your grace period, or just want out from under a Sponsor-dependent employer, we transfer your H-1B into a compliant, self-sponsored company structure — the same legal status and rights as a traditional employer petition — handling the position structuring, employer-side filing materials, payroll, and the E-Verify setup a clean transfer needs. We recommend starting right away, especially inside a grace period, and it typically takes our team six to eight weeks to complete.",
    cta: "Free Consultation about H-1B transfer",
  },
  {
    label: "Start up a business",
    icon: Rocket,
    badgeLabel: "Recommended start",
    badgeValue: "Anytime",
    secondaryBadgeLabel: "Our turnaround",
    secondaryBadgeValue: "About 8 weeks",
    heading: "Start your business, we'll handle the setup",
    body: "If status isn't a concern and you'd simply rather not deal with entity types, state filings, EIN applications, and governance documents on your own, we handle the entire company formation process for you, then organize the records that become the foundation for banking, hiring, and running compliant day-to-day operations. We can start whenever you're ready, and it takes about eight weeks to complete all of the setup work.",
    cta: "Free Consultation about starting a business",
  },
];

export default function WhereAreYouNow() {
  return (
    <AudienceExplorer
      id="path"
      title="What is your goal?"
      description="Tell us what you're trying to get done and we'll show the timeline and support behind it."
      items={goals.map((goal) => ({
        ...goal,
        secondaryCta: "See our cases",
        secondaryHref: "/our-cases",
        ctaHref: "/contact",
      }))}
    />
  );
}
