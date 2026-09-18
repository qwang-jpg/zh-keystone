import { Link } from "react-router-dom";
import { BookOpen, CalendarClock, FileSpreadsheet, Handshake, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const services = [
  {
    icon: BookOpen,
    title: "Startup Bookkeeping & Accounting Setup",
    description:
      "We help you set up a basic bookkeeping and financial management structure suited to an early-stage company, so your books stay organized and defensible from day one.",
    items: [
      "Chart of accounts and accounting software setup (QuickBooks or Xero)",
      "\"Startup Basic Financial Management Guide\" document",
      "A monthly recordkeeping and reconciliation habit you can actually maintain",
    ],
  },
  {
    icon: CalendarClock,
    title: "Annual Tax Filing & Company Renewal Planning",
    description:
      "We organize the annual tax filing, company renewal, and supporting financial document requirements that apply to your entity into a single compliance calendar.",
    items: [
      "\"Annual Tax Filing & Company Renewal Process Guide\" document",
      "A year-ahead calendar of key compliance deadlines",
      "Reduced risk of missed filings or lapsed good standing",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Federal & State Tax Filing Coordination",
    description:
      "We map out which federal and state tax obligations actually apply to your entity type, so nothing gets discovered after the deadline has passed.",
    items: [
      "Federal return coordination matched to your entity's tax election (Form 1120, 1120-S, or 1065)",
      "State franchise tax and annual report deadline tracking",
      "Sales tax registration guidance where your business activity requires it",
    ],
  },
  {
    icon: Handshake,
    title: "Ongoing Financial Advisory & CPA Coordination",
    description:
      "Bookkeeping and filings are the floor, not the ceiling. We stay engaged as your business grows and coordinate directly with your CPA and accounting team.",
    items: [
      "Direct coordination with CPA firms on accounting, audits, and regulatory filings",
      "S-corp election guidance where it fits your tax situation",
      "Periodic check-ins as your revenue, headcount, or structure changes",
    ],
  },
];

export default function StrategicServices() {
  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="What's Included"
          description="From the bookkeeping system you'll use every month to the compliance calendar and CPA coordination that keep your company in good standing."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col rounded-2xl border border-border bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keystone-gradient">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-keystone-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-keystone-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Talk to an Expert Today
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
