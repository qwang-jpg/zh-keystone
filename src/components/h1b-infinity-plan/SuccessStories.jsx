import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { CASES } from "@/components/our-cases/caseData";
import { CaseCard, CaseDrawer } from "@/components/our-cases/CaseExplorer";

// Use the same records, outcomes, and full stories as the Our Cases page.
const featuredCases = CASES.filter((item) => ["13", "16", "17", "18"].includes(item.num));

export default function SuccessStories() {
  const [openCase, setOpenCase] = useState(null);
  return (
    <section id="success-stories" className="scroll-mt-24 bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Real Businesses. Real H-1B Journeys." description="Explore how clients navigated layoffs, employer sponsorship challenges, and new business opportunities. These stories come from our shared case collection." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredCases.map((item) => <CaseCard key={item.num} c={item} onOpen={() => setOpenCase(item)} />)}
        </div>
        <Link to="/our-cases" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          Explore All Client Cases <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <CaseDrawer key={openCase?.num ?? "closed"} caseData={openCase} onClose={() => setOpenCase(null)} />
    </section>
  );
}
