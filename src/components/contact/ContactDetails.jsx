import { Phone, Clock, Mail } from "lucide-react";
import wechatQr from "@/assets/WeChatQR.webp";

const details = [
  { icon: Phone, label: "电话", value: "+1 (646) - 294 - 7091", href: "tel:+16462947091" },
  { icon: Clock, label: "服务时间", value: "周一至周五 上午10:00 - 下午6:00" },
  { icon: Mail, label: "邮箱", value: "contact@keystonestrategies.us", href: "mailto:contact@keystonestrategies.us" },
];

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      {details.map((d) => {
        const Icon = d.icon;
        const content = (
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-keystone-gradient">
              <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{d.label}</p>
              <p className="mt-1 text-base font-medium text-keystone-ink">{d.value}</p>
            </div>
          </div>
        );
        return d.href ? (
          <a key={d.label} href={d.href} className="block hover:opacity-80 transition-opacity">
            {content}
          </a>
        ) : (
          <div key={d.label}>{content}</div>
        );
      })}

      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-keystone-gradient">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
            <path d="M8.5 2C4.36 2 1 4.9 1 8.5c0 2.05 1.08 3.87 2.77 5.06L3 16.5l2.9-1.6c.83.23 1.7.35 2.6.35.3 0 .58-.02.86-.05a5.6 5.6 0 0 1-.11-1.12c0-3.17 3.1-5.75 6.94-5.75.24 0 .48.01.71.03C15.98 4.8 12.62 2 8.5 2Zm-2.4 3.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Zm4.8 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9ZM17 8.9c-3.31 0-6 2.21-6 4.95s2.69 4.95 6 4.95c.66 0 1.29-.09 1.87-.25L21 20l-.63-2.1C21.68 16.99 23 15.36 23 13.85 23 11.11 20.31 8.9 17 8.9Zm-1.9 2.85c.4 0 .72.32.72.72 0 .4-.32.72-.72.72-.4 0-.73-.32-.73-.72 0-.4.33-.72.73-.72Zm3.8 0c.4 0 .72.32.72.72 0 .4-.32.72-.72.72-.4 0-.73-.32-.73-.72 0-.4.33-.72.73-.72Z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">微信</p>
          <div className="mt-2 w-28 overflow-hidden rounded-xl border border-border">
            <img src={wechatQr} alt="扫码添加我们的微信" className="aspect-square w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
