import { useState } from "react";
import { ChevronDown, Handshake, ShieldCheck, Target } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Handshake,
    title: "Client-Centered, Co-Creative by Design",
    description:
      "We place our clients' end goals at the heart of every strategy. Rather than relying on templates or quick fixes, we build pathways that are tailored, structured, and truly work in practice.",
    chips: ["Goal-first planning", "No templates", "Built with you"],
  },
  {
    icon: ShieldCheck,
    title: "Detail-Oriented, Accountability-Driven",
    description:
      "We believe real solutions live in the details. Every decision and every deliverable is rooted in expertise, accountability, and a standard that stands up to scrutiny.",
    chips: ["Documented decisions", "Audit-ready", "Owned outcomes"],
  },
  {
    icon: Target,
    title: "Systems Thinking, Endgame Focused",
    description:
      "We look beyond immediate problems to design sustainable, future-proof strategies. Through structured thinking and cross-domain integration, we help clients chart clear, strategic long-term pathways.",
    chips: ["Cross-domain", "Future-proof", "Long-horizon"],
  },
];

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="Our Core Values"
          description="In a world defined by complexity, we guide our clients forward not with slogans or shortcuts, but with strategies that withstand scrutiny and deliver real results. We believe that client-centered design, professional rigor, and structural thinking create clarity, and turn uncertainty into opportunity."
          align="left"
          className="max-w-none"
        />

        <div className="mt-10 flex flex-col gap-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={v.title}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors",
                  isOpen ? "border-primary/45 shadow-lg shadow-keystone-ink/5" : "border-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-7"
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                      isOpen ? "bg-keystone-gradient text-white" : "bg-keystone-mist text-primary"
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wide text-primary">
                      Value {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block text-lg font-bold leading-snug text-keystone-ink md:text-xl">
                      {v.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[5.75rem] md:px-7 md:pl-[5.75rem]">
                      <p className="max-w-3xl leading-relaxed text-muted-foreground">{v.description}</p>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        {v.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-border bg-keystone-mist px-2.5 py-1 text-xs font-medium text-keystone-ink/70"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
