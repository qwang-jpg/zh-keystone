import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function STEMCrossSell() {
  return (
    <section className="bg-white py-16">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl text-2xl font-bold leading-snug text-keystone-ink md:text-3xl">
          Want to Extend Your STEM OPT but Don&apos;t Have an Employer?
        </h2>
        <h3 className="text-lg font-semibold text-primary">
          The STEM OPT Ready Plan Has You Covered!
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The STEM OPT Ready Plan helps international graduates coordinate employer setup,
          training-plan documentation, and ongoing business operations. We help you prepare
          for a genuine training opportunity and plan for future H-1B registration where eligible.
        </p>
        <Button asChild className="mt-2 h-auto whitespace-normal py-3 text-center">
          <Link to="/stem-opt-ready-plan">
            Learn More About the STEM OPT Ready Plan
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
