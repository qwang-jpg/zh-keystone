import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { Button } from "@/components/ui/button";

const features = [
  "全天候查看服务进度",
  "安全便捷地追踪每一个里程碑",
  "所有重要材料与文件集中管理",
];

export default function ClientPortal() {
  return (
    <PageLayout>
      <Seo
        title="客户门户"
        description="登录Keystone Strategies客户门户，随时安全查看您的服务进度、交付成果与相关文件。"
        path="/client-portal"
      />

      <section className="relative flex flex-1 items-center overflow-hidden bg-keystone-ink py-20 md:py-28">
        <div className="absolute inset-0 bg-keystone-gradient opacity-10" />
        <svg
          className="absolute inset-0 h-full w-full text-white/10"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <pattern
              id="client-portal-hex"
              width="56"
              height="97"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.1)"
            >
              <path
                d="M28 0 L56 16.2 L56 48.5 L28 64.7 L0 48.5 L0 16.2 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M28 64.7 L56 80.8 L56 97 M28 64.7 L0 80.8 L0 97"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="28" cy="0" r="1.5" fill="currentColor" />
              <circle cx="28" cy="64.7" r="1.5" fill="currentColor" />
              <circle cx="0" cy="16.2" r="1.5" fill="currentColor" />
              <circle cx="56" cy="16.2" r="1.5" fill="currentColor" />
              <circle cx="0" cy="48.5" r="1.5" fill="currentColor" />
              <circle cx="56" cy="48.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#client-portal-hex)" />
        </svg>

        <div className="container relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              客户门户
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              让您的移民与商业事务更简单。Keystone Strategies客户门户为您提供安全的全天候访问，
              随时追踪服务进度、已完成的交付成果，以及每一份重要文件——全部集中在一处。
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              首次使用的客户需由客户经理为您激活账户后方可登录。如果您在账户或登录过程中遇到任何问题，
              请联系您的客户经理寻求协助。
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://portal.keystonestrategies.us/" target="_blank" rel="noreferrer">
                  登录客户门户
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:mt-24">
            {features.map((f) => (
              <p
                key={f}
                className="border-b border-white/10 pb-3 text-sm leading-snug text-white/80 last:border-none"
              >
                {f}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
