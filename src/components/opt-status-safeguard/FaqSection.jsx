import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// The WordPress export duplicated every accordion answer as flat trailing
// text right after each accordion widget (an editor-rendering artifact, not
// separate content) — deduplicated to one entry per question here.
const faqs = [
  {
    q: "When can I earliest apply for OPT, and when does the window close?",
    a: (
      <p>
        The OPT application window runs <strong>from 90 days before your Program End Date through 60 days after it</strong>. The "Program End Date" is
        <strong> the Program End Date listed on your I‑20</strong>. If a student does not submit an OPT application <strong>within 60 days of graduation</strong>
        , USCIS will treat OPT eligibility as automatically forfeited, and F-1 student status will lapse as well.
      </p>
    ),
  },
  {
    q: "How many days of unemployment are allowed during OPT?",
    a: (
      <p>
        <strong>Total unemployment time cannot exceed 90 days.</strong>
      </p>
    ),
  },
  {
    q: "Is self-employment allowed on OPT?",
    a: (
      <>
        <p>
          <strong>Yes, self-employment is allowed</strong>, but the following conditions must be met:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>The business you start must be directly related to your degree field.</li>
          <li>You must work full-time for the company (20+ hours per week).</li>
          <li>The company must be genuinely operating, and you must be able to document that you are actively engaged in field-related work (contracts, invoices, work samples, client records, etc.).</li>
          <li>You must still comply with all OPT reporting requirements (updating your SEVP record, address, employer information, etc.).</li>
        </ul>
      </>
    ),
  },
  {
    q: "How is Keystone Strategies' OPT Status Safeguard Plan different from other OPT services?",
    a: (
      <p>
        Of course. For clients who plan to pursue STEM OPT, we use our employer network to line up sponsor
        connections in advance, ensuring a smooth transition into a STEM OPT position once your initial OPT ends.
      </p>
    ),
  },
  {
    q: "What are the eligibility requirements for OPT?",
    a: (
      <>
        <p>Under DHS (Department of Homeland Security) regulations, applying for Post-completion OPT requires meeting the following:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            You must have completed <strong>at least one full academic year of full-time study</strong> (3 quarters/2 semesters) at a SEVP-certified school while in F-1 status;
          </li>
          <li>
            Your program of study <strong>must not be an "English as a Second Language (ESL)" course</strong>;
          </li>
          <li>
            The work you apply to do <strong>must be directly related to your major field of study</strong> (for details, see the{" "}
            <a
              href="https://www.ice.gov/doclib/sevis/pdf/optDirectlyRelatedGuidance.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              SEVP policy guidance
            </a>
            );
          </li>
          <li>
            You <strong>must not have already used up all of your OPT at your current education level;</strong>
          </li>
          <li>
            You <strong>must not have been authorized for 12 months or more of full-time Curricular Practical Training (CPT).</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How is OPT unemployment time calculated?",
    a: (
      <>
        <p>
          OPT unemployment time is counted <strong>starting from the Start Date printed on your EAD (Employment Authorization Document):</strong>
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Every day you are not in compliant employment counts toward your unemployment total.</li>
          <li>
            <strong>Unemployment days accumulate cumulatively</strong> — if you find a job and later lose it again, the count simply continues adding up.
          </li>
          <li>Once the limit is exceeded, F-1 status is automatically terminated.</li>
        </ul>
        <p className="mt-3">We recommend the following two ways to check how many unemployment days you have left:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Ask your DSO how many unemployment days you've accumulated:</strong> only your DSO can access the{" "}
            <a
              href="https://studyinthestates.dhs.gov/sevis-help-hub/student-records/fm-student-employment/unemployment-counter"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              Unemployment Counter
            </a>{" "}
            in SEVIS, and they can tell you exactly how many days you've used.
          </li>
          <li>
            <strong>Cross-check your own employer records in the SEVP Portal:</strong>
            Starting from the OPT start date shown on your EAD, any day without employment during that period counts as an unemployment day. Note in particular that changing jobs or being laid off during OPT also counts toward your unemployment days until you have a new employer.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "My unemployment days are almost used up — can Keystone Strategies help?",
    a: (
      <p>
        Yes. We offer a fast-matching service specifically for clients racing the unemployment clock during OPT,
        capable of delivering an offer in as little as 48 hours to solve the problem of not being able to find an
        employer. We help you get onboarded within your status grace period so your status doesn't lapse. Contact
        us now — let's save your unemployment window.
      </p>
    ),
  },
  {
    q: "If I plan to apply for STEM OPT later, can Keystone Strategies provide STEM OPT status protection?",
    a: (
      <p>
        Of course. For clients who plan to pursue STEM OPT, we use our employer network to line up sponsor
        connections in advance, ensuring a smooth transition into a STEM OPT position once your initial OPT ends.
      </p>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="OPT Application FAQ" />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-2xl border border-border">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform",
                      open && "rotate-180"
                    )}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">
            Have more questions? Get answers &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
