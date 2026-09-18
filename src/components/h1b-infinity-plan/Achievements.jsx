import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const tabs = [
  {
    "title": "U.S. Company Registration",
    "bullets": [
      "Review your business activities and choose an entity type aligned with your plans.",
      "Check company name and domain availability.",
      "Prepare and submit company formation documents and coordinate state filings.",
      "Apply for an employer identification number (EIN) and support E-Verify enrollment where applicable.",
      "Coordinate shareholder or operating agreements and other required corporate documents."
    ],
    "calloutTitle": "What you gain",
    "callout": "A company foundation for your next step, with organized registration records and a clear operational plan. Expedited formation may be available in as little as 24 hours, depending on the state and your circumstances."
  },
  {
    "title": "Business Bank Account Opening",
    "bullets": [
      "Explore remote account-opening options through our U.S. banking relationships.",
      "Prepare your passport, personal information, and company documents for the bank’s review.",
      "Identify options for eligible founders without an SSN or an in-person visit.",
      "Establish a dedicated business account to keep operating funds and transaction records organized."
    ],
    "calloutTitle": "What you gain",
    "callout": "A business banking setup that supports real operations and traceable financial records. Eligibility, required documents, and approval depend on the bank."
  },
  {
    "title": "Immigration & Status Guidance",
    "bullets": [
      "Coordinate guidance for OPT and STEM OPT reporting and status-maintenance requirements.",
      "Organize H-1B document checklists and explain the preparation timeline.",
      "Guide USCIS employer account setup and H-1B registration.",
      "Help coordinate supporting materials and communication with immigration attorneys.",
      "Connect you with immigration counsel for petition filing and longer-term EB-2 or EB-3 planning where applicable."
    ],
    "calloutTitle": "What you gain",
    "callout": "A coordinated preparation process, from document collection and registration to attorney communication and planning for the next stage."
  },
  {
    "title": "Website & Company Handbook",
    "bullets": [
      "Develop a company logo and professional visual identity.",
      "Plan your website’s structure and write content that reflects your actual business.",
      "Build responsive pages for desktop and mobile visitors.",
      "Improve search visibility through on-page SEO.",
      "Prepare a company handbook aligned with your operating practices."
    ],
    "calloutTitle": "What you gain",
    "callout": "A credible business presence: a professional website and handbook that explain your services, team, and operations."
  },
  {
    "title": "Company Operations Support",
    "bullets": [
      "Set up company-domain email and guide business phone registration.",
      "Provide new-hire checklists and employee onboarding guidance.",
      "Explain how to update an operating address across relevant government records.",
      "Provide client service agreement and invoice templates, plus guidance on employment practices."
    ],
    "calloutTitle": "What you gain",
    "callout": "Practical tools for daily operations, from onboarding and customer contracts to consistent company records."
  },
  {
    "title": "Financial & Tax Filing Guidance",
    "bullets": [
      "Explain basic bookkeeping workflows and recommend suitable software.",
      "Outline tax-filing preparation and recordkeeping needs.",
      "Connect you with certified public accountants for annual tax filings, financial reporting, and audits where applicable."
    ],
    "calloutTitle": "What you gain",
    "callout": "Organized, traceable financial records and access to CPA support for your company’s reporting obligations."
  },
  {
    "title": "Additional Professional Resources",
    "bullets": [
      "Connect you with workers’ compensation insurance providers where coverage is needed.",
      "Coordinate CPA or payroll resources for pay stubs and W-2 forms.",
      "Help organize financial and employment records for H-1B transfers, extensions, and attorney review."
    ],
    "calloutTitle": "What you gain",
    "callout": "Professional connections for the employment, insurance, and financial documentation your next step may require."
  }
];

export default function Achievements() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="included-services" className="scroll-mt-24 bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="What You’ll Achieve With H-1B Infinity Plan"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-controls="h1b-service-panel"
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                active === i
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-keystone-ink/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.title}
            id="h1b-service-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white p-8"
          >
            <h3 className="text-xl font-bold text-keystone-ink">{tab.title}</h3>

            {tab.bullets && (
              <ul className="mt-5 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {tab.body && (
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{tab.body}</p>
            )}

            <div className="mt-6 rounded-xl bg-keystone-mist p-5">
              <p className="text-sm font-bold text-primary">{tab.calloutTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-keystone-ink/80">{tab.callout}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
