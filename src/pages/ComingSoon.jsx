import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";

// Temporary placeholder for pages not yet rebuilt from the original site.
// Each route keeps the original WordPress URL slug so no links break once built out.
export default function ComingSoon({ title }) {
  return (
    <PageLayout>
      <Seo title={title} description={`${title}页面正在建设中，敬请期待。`} noindex />
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold text-keystone-ink md:text-4xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">该页面正在建设中，敬请期待。</p>
      </div>
    </PageLayout>
  );
}
