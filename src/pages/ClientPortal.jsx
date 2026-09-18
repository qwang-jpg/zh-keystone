import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { Button } from "@/components/ui/button";

const features = [
  "24/7 access to your service progress",
  "Secure, convenient tracking of every milestone",
  "All your key materials and documents in one place",
];

export default function ClientPortal() {
  return (
    <PageLayout>
      <Seo
        title="Client Portal"
        description="Sign in to the Keystone Strategies Client Portal for secure, 24/7 access to your service progress, deliverables, and documents."
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
              Client Portal
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              Your immigration and business matters, simplified. The Keystone Strategies
              Client Portal gives you secure, 24/7 access to track your service progress,
              completed deliverables, and every important document — all in one place.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              First-time clients must have their account activated by their client manager
              before logging in. If you run into any issues with your account or trouble
              signing in, please contact your client manager for assistance.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://portal.keystonestrategies.us/" target="_blank" rel="noreferrer">
                  Client Portal Login
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
