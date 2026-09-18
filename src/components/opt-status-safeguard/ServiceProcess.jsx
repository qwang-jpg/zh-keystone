import SectionHeading from "@/components/common/SectionHeading";

// Source content for this block only supplied the section heading
// (service process) — the actual step-by-step process copy was not
// present in the WordPress export, so no steps are invented here.
export default function ServiceProcess() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container">
        <SectionHeading align="left" title="OPT Job Placement Assurance Plan — Service Process" />
      </div>
    </section>
  );
}
