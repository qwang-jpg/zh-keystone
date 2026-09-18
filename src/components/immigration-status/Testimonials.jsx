import TabbedTestimonials from "@/components/common/TabbedTestimonials";

const testimonials = [
  {
    name: "Jason Liu",
    role: "Founder, AI Content Tools Company",
    headline: "From F-1 Startup Attempt to a Completed Funding Round",
    quote: "Keystone helped me turn a vague idea into a company that was truly ready to raise capital.",
    body: "I tried to start a business on F-1 status and kept running into roadblocks — until Keystone stepped in and mapped out a complete path covering status compliance, company registration, equity structure, and funding preparation. With their support, I successfully obtained H-1B status and closed my first funding round within a year and a half of starting the company. We now have three full-time employees and our business keeps growing. Keystone isn't just a paperwork service — they're a partner who truly understands the intersection of entrepreneurship and immigration status, and who stays with you for the long run.",
  },
  {
    name: "Cecilia Yan",
    role: "Founder, Education Consulting",
    headline: "From an Education Service Prototype to a Million-Dollar Startup",
    quote: "From positioning the product to designing our status structure, they were involved in every step — it felt like building the company together.",
    body: "My co-founder and I started with nothing more than a prototype for an education service — we knew almost nothing about company registration, business models, compliance agreements, or status requirements. Keystone stepped in early on and delivered a complete execution plan, from market positioning and service packaging to contract templates, our website build, and marketing. When we later hired international team members, they also helped us sort out OPT, H-1B, and other status arrangements. We passed $1 million in revenue in our very first year. Keystone isn't an agency that just \"hands you templates\" — they're a genuine partner who builds the system with you, step by step, and sees it through to execution.",
  },
  {
    name: "Kevin He",
    role: "NYU | M.S. in Data Science",
    headline: "From STEM OPT Unemployment to an H-1B Selection and On to a Green Card",
    quote: null,
    body: "\"As an international student on STEM OPT, my company made it clear they wouldn't sponsor an H-1B. With only a year of eligibility left, the risk of unemployment and the anxiety over my status were almost suffocating. Keystone helped me find a clear direction, planning every step ahead of time, from forming a company to preparing my petition materials. I was selected in the lottery last April, completed my change of status in October, and we're now moving forward with my green card. That's when I realized there really was another path to staying in the U.S.\"",
  },
  {
    name: "Zach Zhang",
    role: "Founder, E-commerce Logistics Consulting",
    headline: "From Idea to Funding | Building the Full Startup Structure, Model, and Materials",
    quote: null,
    body: "\"I started out with just a business direction — I hadn't even registered a company yet. Keystone helped me work through my business model step by step, built out my equity structure and financial model, and prepared the materials I needed to meet with investors. Six months after launch, I secured $400,000 in investment from two angel investors. I wouldn't have gotten here without Keystone.\"",
  },
  {
    name: "Mandy Rao",
    role: "Business Analyst | Founder, Consulting Firm",
    headline: "From an H-1B Layoff to Founding My Own Company and Keeping My Status",
    quote: null,
    body: "\"The day I was laid off, I had just 40 days to find a new job. I hit dead end after dead end, and the pressure on my status was enormous. Keystone got my company registered within that tight window and quickly stabilized my status. But they didn't stop at solving the status problem — they walked with me step by step as I built my business: how to pitch investors, how to build a pitch deck, how to set up a website, what to put in an operations manual, how to land my first clients. The company is now consistently profitable, and I've gone from a laid-off employee to a founder with a team and real revenue. Keystone opened up a completely different future for me.\"",
  },
];

export default function Testimonials() {
  return (
    <TabbedTestimonials
      title="What Our Clients Say About Us"
      stories={testimonials}
    />
  );
}
