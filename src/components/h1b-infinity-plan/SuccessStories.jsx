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
        <SectionHeading align="left" title="真实的企业。真实的H-1B历程。" description="了解客户如何应对裁员、雇主担保难题与全新的创业机会。这些故事均来自我们的共享案例库。" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredCases.map((item) => <CaseCard key={item.num} c={item} onOpen={() => setOpenCase(item)} />)}
        </div>
        <Link to="/our-cases" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          查看全部客户案例 <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <CaseDrawer key={openCase?.num ?? "closed"} caseData={openCase} onClose={() => setOpenCase(null)} />
    </section>
  );
}
