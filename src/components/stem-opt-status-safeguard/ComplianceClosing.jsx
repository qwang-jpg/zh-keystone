import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComplianceClosing() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-24">
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">STEM OPT Compliant Employment</h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
          STEM OPT Employer Compliance Training is built for companies about to bring on a STEM OPT
          employee, and for founders whose own company needs to function as a genuinely compliant
          employer. We focus on the parts of the relationship USCIS and DSOs actually scrutinize:
          a job description that fits the degree, a real supervisor, and documentation that reflects
          how the work actually happens.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          Our support doesn&rsquo;t end once the I-983 is filed. We stay engaged through periodic
          check-ins and ongoing Q&A, so the employment relationship remains defensible for the full
          length of the STEM OPT extension and any subsequent H-1B filing that builds on it.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          We reject any form of illegal shell employment. Every structure we help build is designed
          to be genuine, documented, and able to withstand review.
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-keystone-ink hover:bg-white/90">
          <Link to="/contact">
            Book a Compliance Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
