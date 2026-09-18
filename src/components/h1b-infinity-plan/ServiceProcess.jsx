import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    "number": "01",
    "title": "Assessment & Your Service Plan",
    "description": "We review your education, professional experience, current status, and long-term goals. Together, we map out the company structure, service scope, professional resources, and deadlines for an actionable plan."
  },
  {
    "number": "02",
    "title": "Company Formation & Employer Setup",
    "description": "We coordinate company registration, formation documents, shareholder or operating agreements, and the EIN application. We also support applicable corporate filings and E-Verify enrollment where needed for your employment plan."
  },
  {
    "number": "03",
    "title": "Business Banking & Company Foundations",
    "description": "We help you apply for a business bank account remotely and establish your website, company email, and handbook. These foundations give your business a professional presence and support genuine day-to-day operations."
  },
  {
    "number": "04",
    "title": "Registration & Petition Preparation",
    "description": "We guide employer account setup and H-1B registration, organize supporting documents, and coordinate with immigration attorneys for petition preparation and submission. Where applicable, we also help coordinate OPT or STEM OPT documentation and related work-authorization applications."
  },
  {
    "number": "05",
    "title": "Ongoing Operations & Tax Support",
    "description": "We provide guidance on onboarding, payroll records, W-2 forms, workers’ compensation coverage, bookkeeping, and tax preparation. CPA and legal resources support your company’s ongoing responsibilities."
  },
  {
    "number": "06",
    "title": "Long-Term Status & Career Planning",
    "description": "We help you plan ahead for H-1B extensions and explore longer-term options, including EB-2 or EB-3 pathways with immigration counsel, based on your eligibility, business development, and personal goals."
  }
];

export default function ServiceProcess() {
  return (
    <section id="service-process" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="Service Process"
          description="From your first assessment to ongoing operations, six coordinated stages connect your business setup with your immigration plan."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex gap-5 rounded-2xl border border-border bg-keystone-mist p-7"
            >
              <span className="flex-shrink-0 text-3xl font-bold text-primary/30">{s.number}</span>
              <div>
                <h3 className="text-base font-bold leading-snug text-keystone-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
