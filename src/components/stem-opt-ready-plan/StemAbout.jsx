import { Link2, ShieldAlert, AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: Link2,
    title: "Employer, Employment & Training — Connected",
    description:
      "We connect employer eligibility, E-Verify, position design, Form I-983, and ongoing compliance into one structured path.",
  },
  {
    icon: ShieldAlert,
    title: "Built Around Your Situation",
    description:
      "Rather than treating each requirement as a separate task, every piece is designed around your actual employer and career situation.",
  },
  {
    icon: AlertTriangle,
    title: "One Weak Link Can Affect Everything",
    description:
      "Our goal is to make sure the pieces are built to work together, so your status stays protected throughout the process.",
  },
];

export default function StemAbout() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            align="left"
            title="About the STEM OPT Status Protection Program"
            description="Keystone Strategies helps international STEM graduates build the employer, employment, training, documentation, and ongoing compliance structure needed to move forward with STEM OPT — not just the extension application itself."
            className="mx-0 max-w-none"
          />

          <div className="flex flex-col">
            {principles.map((p, i) => (
              <div key={p.title}>
                <div className={cn("flex gap-5", i > 0 && "pt-6")}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-primary/10">
                    <p.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-keystone-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </div>
                {i < principles.length - 1 && <div className="mt-6 h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
