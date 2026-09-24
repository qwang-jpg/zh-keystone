import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ASSESSMENT_CTA = "申请H-1B评估";

// `light` renders the white-on-dark treatment used for CTAs sitting on the
// hero/dark sections, matching ServiceHero and CompactCta's convention.
export function AssessmentButton({ light = false, timeline = false, size = "lg", className }) {
  return (
    <Button
      asChild
      size={size}
      className={cn(light && "bg-white text-keystone-ink hover:bg-white/90", className)}
    >
      <Link to="/contact">
        {timeline ? "评估我的时间线" : ASSESSMENT_CTA}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Button>
  );
}
