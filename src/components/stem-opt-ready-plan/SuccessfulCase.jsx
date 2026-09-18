import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const documents = [
  { sourceFile: "i983-sample-1.png", label: "Sample Form I-983 Training Plan" },
  { sourceFile: "i765-sample-1.png", label: "Sample Form I-765 Filing Package" },
  { sourceFile: "receipt-sample-1.png", label: "Sample USCIS Receipt Notice" },
];

export default function SuccessfulCase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="Sample Program Deliverables" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {documents.map((d) => (
            <ImagePlaceholder key={d.sourceFile} sourceFile={d.sourceFile} label={d.label} aspect="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );
}
