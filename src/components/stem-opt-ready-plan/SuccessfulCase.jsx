import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";

const documents = [
  { sourceFile: "i983-sample-1.png", label: "I-983培训计划样本" },
  { sourceFile: "i765-sample-1.png", label: "I-765递交材料样本" },
  { sourceFile: "receipt-sample-1.png", label: "USCIS收据通知样本" },
];

export default function SuccessfulCase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="服务交付样本" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {documents.map((d) => (
            <ImagePlaceholder key={d.sourceFile} sourceFile={d.sourceFile} label={d.label} aspect="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );
}
