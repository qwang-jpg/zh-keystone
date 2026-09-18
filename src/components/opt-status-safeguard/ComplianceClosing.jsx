import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComplianceClosing() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-24">
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">Compliant OPT Employment Starts Now</h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
          The Keystone OPT Job Search Safeguard Plan is built for students about to start OPT, or already on OPT
          but struggling to find a compliant employer as their status approaches expiration. With 500+ partner
          companies and 2,000+ genuine positions, we can deliver an offer in as little as 48 hours, connecting you
          quickly with real employers. A dedicated advisor guides your OPT application one-on-one from start to
          finish, ensuring your status stays compliant and your paperwork is complete and accurate.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          Even more important, we provide access to ongoing sponsor-employer resources so your transition from OPT
          to H-1B proceeds smoothly, planning ahead to reduce risk and open a long-term path to staying in the
          U.S. Whether you've been laid off and are racing the unemployment clock, or you're just starting OPT and
          need a compliant position, Keystone offers a complete, end-to-end solution.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          We pledge to refuse any form of illegal placement, protecting every client's career development and
          legal status. Our commitment is to be a steadfast partner throughout your professional journey in the
          U.S., solving immediate employment and status challenges while building a solid foundation for your
          long-term career.
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-keystone-ink hover:bg-white/90">
          <Link to="/contact">
            Get Your OPT Position Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
