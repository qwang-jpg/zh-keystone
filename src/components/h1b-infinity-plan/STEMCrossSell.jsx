import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function STEMCrossSell() {
  return (
    <section className="bg-white py-16">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl text-2xl font-bold leading-snug text-keystone-ink md:text-3xl">
          想延长STEM OPT，但没有雇主？
        </h2>
        <h3 className="text-lg font-semibold text-primary">
          STEM OPT就绪计划帮您搞定！
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          STEM OPT就绪计划帮助国际毕业生统筹雇主搭建、培训计划文件与持续的企业运营。
          我们帮助您准备好真实的培训机会，并在符合条件时为未来的H-1B注册做好规划。
        </p>
        <Button asChild className="mt-2 h-auto whitespace-normal py-3 text-center">
          <Link to="/stem-opt-ready-plan">
            了解更多STEM OPT就绪计划
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
