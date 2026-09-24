import { Component } from "react";
import { Button } from "@/components/ui/button";

// Last-resort fallback so a render error (or a lazy page chunk that failed
// to load) shows a recoverable message instead of a blank white page.
// Keyed on the route in App.jsx, so navigating elsewhere clears the error.
export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-keystone-ink md:text-3xl">页面出错了</h1>
        <p className="mt-3 text-muted-foreground">页面加载失败，请刷新重试。</p>
        <div className="mt-8 flex gap-3">
          <Button type="button" onClick={() => window.location.reload()}>
            刷新页面
          </Button>
          <Button asChild variant="outline">
            <a href="/">返回首页</a>
          </Button>
        </div>
      </div>
    );
  }
}
