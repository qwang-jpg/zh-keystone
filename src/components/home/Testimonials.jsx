import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const stories = [
  {
    name: "Jason Liu",
    role: "Founder, AI Engineering Startup",
    headline: "From F-1 Startup Attempt to Securing Formal Funding",
    from: "An F-1 student with a rough concept",
    bridge: "Status, incorporation, equity structure, financing strategy",
    to: "H-1B secured and a formal seed round closed",
    quote: "Keystone helped me turn a vague idea into a company truly ready to raise capital.",
    body: "I started my F-1 entrepreneurial journey with nothing more than a rough concept. It wasn't until Keystone stepped in that I was able to structure everything properly, immigration status, incorporation, equity structure, and financing strategy. With their help, I secured my H-1B, launched my company as a legal U.S. entity, and built the foundation for real operations. Today, we've completed a formal seed round and our business is steadily growing. Keystone isn't just a service provider, they're long-term partners who help entrepreneurs navigate each critical step with strategy and clarity.",
    tags: ["Company Formation", "Equity Structure", "H-1B", "Seed Round"],
  },
  {
    name: "Cecilia Yan",
    role: "Founder, Education Consulting Startup",
    headline: "From Service Prototype to a Million-Dollar Business",
    from: "A simple education service idea",
    bridge: "Incorporation, operations, tax compliance, market entry",
    to: "Over $1M in annual revenue within a year",
    quote:
      "Keystone designed a structure around my immigration status and business model. Every step felt like building a company together.",
    body: "I started with a simple education service idea. Keystone helped me formalize everything from company structure and business strategy to legal agreements and fundraising. They didn't just offer templates, they worked with me through every detail: incorporation, operations, tax compliance, and market entry. Within a year, our company achieved over $1M in annual revenue. Keystone has been more than an agency; they've been a true strategic partner, walking through every milestone side by side.",
    tags: ["Business Modeling", "Legal Agreements", "Tax Compliance", "Market Entry"],
  },
  {
    name: "Kevin He",
    role: "Data Scientist, NYU",
    headline: "From STEM OPT Layoff to H-1B Approval and Green Card Pathway",
    from: "Laid off mid-STEM OPT, status expiring",
    bridge: "Compliant employment structure, H-1B filing, long-term plan",
    to: "H-1B approved and back on a green card track",
    quote: "I was laid off during my STEM OPT, but Keystone helped me rebuild my structure and get back on track.",
    body: "After losing my job, I faced both status expiration and uncertainty. Keystone quickly helped me design a compliant employment structure, file my H-1B, and stabilize my situation. Their team supported me through every step, from status transition to business planning and long-term immigration strategy. Today, I'm back on a secure track toward my green card. They truly helped me find a sustainable way forward.",
    tags: ["STEM OPT", "Status Compliance", "H-1B", "Green Card Pathway"],
  },
  {
    name: "Zach Zhang",
    role: "Founder, E-commerce Brand",
    headline: "From Concept to Investment-Ready Structure",
    from: "Just a concept on paper",
    bridge: "Corporate and immigration structure, equity plan, tax planning",
    to: "An investment-ready company built to scale",
    quote: "Keystone didn't just give me a model, they built the entire structure that made financing possible.",
    body: "I came to Keystone with just a concept. They helped me build out the corporate and immigration structure, design the equity plan, and get investor-ready. Their legal, business, and tax planning made the fundraising process smooth and structured. Within months, we had a company that could truly scale, not just an idea on paper.",
    tags: ["Corporate Structure", "Equity Plan", "Fundraising Support", "Tax Planning"],
  },
  {
    name: "Mandy Rao",
    role: "Founder, Consulting Firm",
    headline: "From Layoff to Launching My Own Company",
    from: "Laid off 40 days before status expiry",
    bridge: "New entity, rebuilt immigration structure, petition prepared",
    to: "Running her own firm, status uninterrupted",
    quote: "I got laid off just 40 days before my status expired. Keystone helped me regain control of my future.",
    body: "When I lost my job while on H-1B, I felt like everything was falling apart. Keystone quickly helped me set up my own company, rebuild my immigration structure, and prepare my petition. They guided me through strategy, documentation, and execution with precision. Today, I'm running my own business and maintaining legal status without interruption. Keystone gave me more than a plan, they gave me back agency over my future.",
    tags: ["Company Formation", "Status Compliance", "Petition Prep", "Payroll Setup"],
  },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  const go = (dir) => setIndex((i) => (i + dir + stories.length) % stories.length);

  return (
    <section id="stories" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <SectionHeading
            title="What Our Clients Say About Us"
            description="Five journeys, from where each client started to where they are now. Pick a story to follow it."
            align="left"
            className="max-w-2xl"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next story"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stories.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.name}
                onClick={() => setIndex(i)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  isActive ? "border-keystone-ink bg-keystone-ink" : "border-border bg-white"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isActive ? "bg-keystone-green text-keystone-ink" : "bg-keystone-mist text-primary"
                    )}
                  >
                    {initials(s.name)}
                  </span>
                  <span className="min-w-0">
                    <span className={cn("block truncate text-sm font-bold", isActive ? "text-white" : "text-keystone-ink")}>
                      {s.name}
                    </span>
                    <span className={cn("block truncate text-xs", isActive ? "text-white/60" : "text-muted-foreground")}>
                      {s.role}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={story.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-border lg:grid-cols-2"
        >
          <div className="flex flex-col gap-5 bg-keystone-ink p-8 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-keystone-green">{story.headline}</p>
            <div className="flex flex-col gap-3.5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Where they started</p>
                <p className="mt-2 text-lg font-bold leading-snug text-white">{story.from}</p>
              </div>
              <div className="flex items-center gap-2.5 pl-1.5">
                <ArrowDown className="h-4 w-4 text-keystone-green" />
                <span className="text-xs font-medium text-white/70">{story.bridge}</span>
              </div>
              <div className="rounded-2xl bg-primary p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Where they are now</p>
                <p className="mt-2 text-lg font-bold leading-snug text-white">{story.to}</p>
              </div>
            </div>
            <div className="mt-auto flex items-center gap-3.5 border-t border-white/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                {initials(story.name)}
              </span>
              <span>
                <span className="block text-sm font-bold text-white">{story.name}</span>
                <span className="block text-xs text-white/60">{story.role}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 md:p-9">
            <Quote className="h-7 w-7 text-primary/35" />
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-keystone-ink">
              &ldquo;{story.quote}&rdquo;
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{story.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-keystone-mist px-3 py-1 text-xs font-medium text-keystone-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild className="mt-6 self-start">
              <Link to="/contact">
                Start a story like this
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
