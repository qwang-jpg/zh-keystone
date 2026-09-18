import { FileText, Users2, ShieldCheck, Award } from "lucide-react";
import TabbedFeatureList from "@/components/common/TabbedFeatureList";

const advantages = [
  {
    icon: FileText,
    title: "Job Description Design That Withstands Scrutiny",
    description:
      "We write job duties and titles that genuinely connect to the employee's STEM degree and the company's real business, the foundation every I-983 and STEM OPT review comes back to.",
  },
  {
    icon: Users2,
    title: "Real Supervision Structures, Not Paper Arrangements",
    description:
      "We help you designate a qualified supervisor and build a management structure that reflects actual day-to-day oversight, which is what separates a compliant employment relationship from a nominal one.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Compliance, Not a One-Time Filing",
    description:
      "We provide continued Q&A support and periodic check-ins through the life of the STEM OPT extension, so the employer structure stays compliant as circumstances change.",
  },
  {
    icon: Award,
    title: "Backed by a Full Immigration & Business Advisory Team",
    description:
      "Job description design, supervision structuring, and status maintenance guidance are coordinated with our broader company formation, payroll, and immigration petition teams, so nothing falls between the cracks.",
  },
];

export default function WhyChooseUs() {
  return (
    <TabbedFeatureList
      title="Core Advantages of STEM OPT Employer Compliance Training"
      items={advantages}
    />
  );
}
