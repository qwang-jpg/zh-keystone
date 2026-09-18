import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Compact CTA that sits under the floating table of contents, so readers
// scrolling a long guide always have a way to reach out without hunting
// for the banner at the end of the article.
export default function SidebarContactCta() {
  return (
    <div className="mt-6 rounded-2xl bg-keystone-ink p-5 text-white">
      <p className="text-2xs font-semibold uppercase tracking-widest text-keystone-green">有疑问？</p>
      <p className="mt-2 text-sm font-bold leading-snug">获取我们团队的免费咨询。</p>
      <Button asChild size="sm" className="mt-4 w-full bg-white text-keystone-ink hover:bg-white/90">
        <Link to="/contact">
          免费咨询
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  );
}
