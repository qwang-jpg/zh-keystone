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
            与Keystone Strategies一起，把财务从成本中心变为增长引擎
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
            从财务架构与规划，到战略顾问服务，我们带来的不仅是清晰的思路——更是帮您搭建面向未来的
            坚实基础。每一笔交易、每一分钱、每一份报表，都应该驱动增长，而不仅仅是记录过去。
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-white">预约您的战略咨询电话</h3>
            <Link
              to="/contact"
              aria-label="预约您的战略咨询电话"
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
