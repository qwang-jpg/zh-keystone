import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-20 md:py-28">
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ImagePlaceholder sourceFile="image-36.jpg" aspect="aspect-[4/3]" className="lg:order-2" />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Turn Finance from a Cost Center into a Growth Engine with Keystone Strategies
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
            From financial structure and planning to strategic advisory, we don&rsquo;t just bring
            clarity — we help you build a future-ready foundation. Every transaction, every
            dollar, every report should drive growth, not just record it.
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-white">Schedule Your Strategy Call</h3>
            <Link
              to="/contact"
              aria-label="Schedule Your Strategy Call"
              className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-keystone-ink transition-colors hover:bg-white/90"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
