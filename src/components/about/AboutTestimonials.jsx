import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TabbedTestimonials from "@/components/common/TabbedTestimonials";

const testimonials = [
  {
    name: "Jason Liu",
    role: "Founder, AI Engineering Startup",
    headline: "From F-1 Startup Attempt to Securing Formal Funding",
    quote: "Keystone helped me turn a vague idea into a company truly ready to raise capital.",
    body: "I started my F-1 entrepreneurial journey with nothing more than a rough concept. It wasn't until Keystone stepped in that I was able to structure everything properly, immigration status, incorporation, equity structure, and financing strategy. With their help, I secured my H-1B, launched my company as a legal U.S. entity, and built the foundation for real operations. Today, we've completed a formal seed round and our business is steadily growing. Keystone isn't just a service provider, they're long-term partners who help entrepreneurs navigate each critical step with strategy and clarity.",
  },
  {
    name: "Cecilia Yan",
    role: "Founder, Education Consulting Startup",
    headline: "From Service Prototype to a Million-Dollar Business",
    quote:
      "Keystone designed a structure around my immigration status and business model. Every step felt like building a company together.",
    body: "I started with a simple education service idea. Keystone helped me formalize everything, from company structure and business strategy to legal agreements and fundraising. They didn't just offer templates, they worked with me through every detail: incorporation, operations, tax compliance, and market entry. Within a year, our company achieved over $1M in annual revenue. Keystone has been more than an agency; they've been a true strategic partner, walking through every milestone side by side.",
  },
  {
    name: "Kevin He",
    role: "Data Scientist, NYU",
    headline: "From STEM OPT Layoff to H-1B Approval and Green Card Pathway",
    quote:
      "I was laid off during my STEM OPT, but Keystone helped me rebuild my structure and get back on track.",
    body: "After losing my job, I faced both status expiration and uncertainty. Keystone quickly helped me design a compliant employment structure, file my H-1B, and stabilize my situation. Their team supported me through every step, from status transition to business planning and long-term immigration strategy. Today, I'm back on a secure track toward my green card. They truly helped me find a sustainable way forward.",
  },
  {
    name: "Zach Zhang",
    role: "Founder, E-commerce Brand",
    headline: "From Concept to Investment-Ready Structure",
    quote: "Keystone didn't just give me a model, they built the entire structure that made financing possible.",
    body: "I came to Keystone with just a concept. They helped me build out the corporate and immigration structure, design the equity plan, and get investor-ready. Their legal, business, and tax planning made the fundraising process smooth and structured. Within months, we had a company that could truly scale, not just an idea on paper.",
  },
  {
    name: "Mandy Rao",
    role: "Founder, Consulting Firm",
    headline: "From Layoff to Launching My Own Company",
    quote: "I got laid off just 40 days before my status expired. Keystone helped me regain control of my future.",
    body: "When I lost my job while on H-1B, I felt like everything was falling apart. Keystone quickly helped me set up my own company, rebuild my immigration structure, and prepare my petition. They guided me through strategy, documentation, and execution with precision. Today, I'm running my own business and maintaining legal status without interruption. Keystone gave me more than a plan, they gave me back agency over my future.",
  },
];

export default function AboutTestimonials() {
  return (
    <TabbedTestimonials
      title="What Our Clients Say About Us"
      description="Every story here is a real Keystone engagement."
      stories={testimonials}
      renderSide={({ index, total }) => (
        <>
          <div className="rounded-2xl border border-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Story {index + 1} of {total}
            </p>
            <div className="mt-3.5 h-1 rounded-full bg-border">
              <div
                className="h-1 rounded-full bg-keystone-gradient transition-[width] duration-300"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every story here is a real Keystone engagement — the situation the client walked in
              with, the structure we built, and the status they hold today.
            </p>
          </div>
          <Link
            to="/our-cases"
            className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-keystone-mist p-5 transition-all hover:-translate-y-1 hover:border-primary/45"
          >
            <span>
              <span className="block text-sm font-bold text-keystone-ink">Read the full case files</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                19 documented self-employment H-1B cases
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
          </Link>
        </>
      )}
    />
  );
}
