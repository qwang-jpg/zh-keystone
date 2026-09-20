import { Link } from "react-router-dom";
import EvidenceGallery from "@/components/our-cases/EvidenceGallery";

export default function CaseStudies() {
  return (
    <>
      <EvidenceGallery permOnly />
      <div className="bg-keystone-mist pb-20 text-center md:pb-28">
        <Link to="/our-cases" className="text-sm font-semibold text-primary hover:underline">
          查看更多案例
        </Link>
      </div>
    </>
  );
}
