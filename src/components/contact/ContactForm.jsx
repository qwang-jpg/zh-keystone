import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// The original site posts this to a WordPress form plugin endpoint.
// There is no backend wired up yet in the React build, so this only
// validates client-side and shows a confirmation state. Swap onSubmit
// for a real request (WP REST route, Formspree, etc.) when ready.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="text-lg font-bold text-keystone-ink">消息已发送</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          感谢您的留言，我们的团队将在24小时内回复您。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="first_name">姓名</Label>
        <Input id="first_name" name="first_name" placeholder="请输入您的姓名" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">邮箱地址 *</Label>
        <Input id="email" name="email" type="email" required placeholder="请输入您的邮箱地址" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">主题</Label>
        <Input id="subject" name="subject" placeholder="请输入主题" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">留言内容</Label>
        <Textarea id="message" name="message" rows={4} placeholder="请在此输入您的留言" />
      </div>
      <Button type="submit" className="w-full">
        发送消息
      </Button>
    </form>
  );
}
