import SectionHeading from "@/components/common/SectionHeading";

const support = [
  "Employer Structure",
  "EIN",
  "E-Verify",
  "Degree Alignment",
  "Supervision Framework",
  "Form I-983",
  "School Docs",
  "Application Prep",
];

export default function CaseShare() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="When Time Is Limited, Structure Matters" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="rounded-2xl bg-white p-9 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.1)]">
            <h3 className="text-lg font-bold leading-snug text-keystone-ink md:text-xl">
              From an Unexpected Layoff to a Structured STEM OPT Path
            </h3>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">The Situation</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              A STEM graduate faced an unexpected layoff while approaching an important STEM OPT
              timeline. Without the previous employment arrangement, multiple pieces needed to be
              rebuilt quickly &mdash; not just the application itself.
            </p>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">The Challenge</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              The client needed an appropriate employer structure, E-Verify participation, a
              degree-related position, supervision and training framework, Form I-983
              documentation, school coordination, and STEM OPT application preparation. All of
              these components needed to align within a limited period.
            </p>

            <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
              This is the difference between completing individual tasks and managing the entire
              STEM OPT solution.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-keystone-ink p-7">
              <span className="block text-4xl font-bold leading-none text-white">10 Days</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/55">
                From initial engagement to a structured STEM OPT filing path.
              </span>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,36,31,.03),0_12px_28px_-10px_rgba(16,36,31,.1)]">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Keystone Support</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {support.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-keystone-ink/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
