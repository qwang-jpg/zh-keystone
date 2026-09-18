import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageLayout>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist or may have moved." noindex />
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold text-keystone-ink md:text-4xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </PageLayout>
  );
}
