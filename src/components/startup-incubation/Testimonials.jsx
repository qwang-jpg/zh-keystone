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
    body: "I started with a simple education service idea. Keystone helped me formalize everything from company structure and business strategy to legal agreements and fundraising. They didn't just offer templates, they worked with me through every detail: incorporation, operations, tax compliance, and market entry. Within a year, our company achieved over $1M in annual revenue. Keystone has been more than an agency; they've been a true strategic partner, walking through every milestone side by side.",
  },
];

export default function Testimonials() {
  return (
    <TabbedTestimonials title="What Our Clients Say About Us" stories={testimonials} />
  );
}
