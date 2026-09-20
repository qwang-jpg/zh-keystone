import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Short left-text/right-button CTA banner shared across pages, replacing the
// old tall centered-stack CTA. `description` may be a single node or a
// fragment of multiple <p> tags (spaced via the wrapper's space-y-2).
export default function CompactCta({ title, description, ctaLabel, ctaHref = "/contact", className }) {
  return (
    <section className={cn("relative overflow-hidden bg-keystone-ink py-12 md:py-14", className)}>
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
            {title}
          </h2>
          {description && <div className="mt-2 space-y-2 text-sm leading-relaxed text-white/70">{description}</div>}
        </div>
        <Button
          asChild
          size="lg"
          className="w-full shrink-0 text-center bg-white text-keystone-ink hover:bg-white/90 md:w-auto"
        >
          <Link to={ctaHref}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
