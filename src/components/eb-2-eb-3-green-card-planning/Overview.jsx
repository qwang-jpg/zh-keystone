import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "The right category, EB-2 or EB-3, matched to your actual credentials and role",
  "A position and job description built to survive PERM's recruitment and prevailing wage scrutiny",
  "An employer structure that can document its ability to pay the offered wage",
  "A clear handoff to immigration counsel for PERM, I-140, and adjustment of status filings",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="The Employer-Side Groundwork Behind Every EB-2 or EB-3 Case"
      description="PERM labor certification and the I-140 petition both turn on questions the employer has to answer correctly before anything gets filed: is this a genuine role, does the pay meet prevailing wage, and can the company actually afford it? We build that foundation, whether your sponsor is an existing employer or a company you formed yourself to continue the pathway your H-1B started."
      checklist={checklist}
    />
  );
}
