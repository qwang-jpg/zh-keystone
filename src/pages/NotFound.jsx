import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageLayout>
      <Seo title="页面未找到" description="您访问的页面不存在，或已被移动。" noindex />
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold text-keystone-ink md:text-4xl">页面未找到</h1>
        <p className="mt-4 text-muted-foreground">
          您访问的页面不存在，或已被移动。
        </p>
        <Button asChild className="mt-8">
          <Link to="/">返回首页</Link>
        </Button>
      </div>
    </PageLayout>
  );
}
