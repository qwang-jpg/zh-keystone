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
    q: "When can I earliest apply for STEM OPT, and when does the process end?",
    a: (
      <>
        <p>When applying for the STEM OPT Extension, you must satisfy all three of the following time limits at once:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            The earliest you can submit your application to USCIS is <strong>90 days before your initial OPT expires</strong>;
          </li>
          <li>
            You must submit your application to USCIS within <strong>60 days</strong> of the date your school issues the new I-20;
          </li>
          <li>
            USCIS must receive your complete application materials <strong>before your initial OPT expires</strong>.
          </li>
        </ul>
        <p className="mt-3">If USCIS receives the application after OPT has expired, or after the recommended 60-day window, the application will be rejected and not adjudicated.</p>
      </>
    ),
  },
  {
    q: "How many days of unemployment are allowed during STEM OPT?",
    a: (
      <p>
        Unemployment days accrued during STEM OPT are combined with those used during regular OPT (Post-completion OPT).
        <strong> The total unemployment days across the entire OPT + STEM OPT period may not exceed 150 days</strong>, or it will be considered a violation of F-1 status.
      </p>
    ),
  },
  {
    q: "Is self-employment allowed during STEM OPT?",
    a: (
      <p>
        Self-employment during STEM OPT is restricted. The core of STEM OPT policy is a "regulated employment relationship" and "training-oriented employer supervision," so all forms of self-employment (including founding your own company and self-employing, single-owner companies, remote consulting, and similar arrangements) are excluded. That said, USCIS does not explicitly prohibit an applicant from holding ownership in a company —
        <strong> as long as the applicant is not the employer, not the I-983 signatory, and not the one supervising themselves, it is possible to structure a form of "self-employment" that USCIS recognizes as compliant</strong>
        . Reach out to us directly to discuss how to structure a compliant setup.
      </p>
    ),
  },
  {
    q: "Can Keystone Strategies help with H-1B, green card applications, and other immigration services down the line?",
    a: <p>Absolutely. We provide ongoing services for clients with H-1B and immigration needs, drawing on our employer resource network and our team of top advisors and attorneys to plan a smooth, compliant path to staying in the U.S.</p>,
  },
  {
    q: "What are the requirements to apply for STEM OPT?",
    a: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>You must currently be in valid initial OPT (Post-completion OPT) status</strong>.
        </li>
        <li>
          <strong>Your degree must meet STEM OPT requirements</strong>, specifically:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>The degree used must be a bachelor's, master's, or doctoral degree;</li>
            <li>
              The degree must come from a school <strong>accredited by an agency recognized by the U.S. Department of Education</strong>, and
              <strong>
                {" "}certified through the{" "}
                <a
                  href="https://sevp.ice.gov/opt/#/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  SEVP
                </a>
                {" "}(Student and Exchange Visitor Program)
              </strong>
              ;
            </li>
            <li>
              The degree's field of study must appear on the DHS{" "}
              <a
                href="https://www.ice.gov/doclib/sevis/pdf/stemList2024.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                STEM Designated Degree Program List
              </a>
              .
            </li>
          </ul>
          <p className="mt-2">
            <strong>Note: a previously earned STEM degree may also be used.</strong>
            {" "}If your current OPT is based on a non-STEM major but you <strong>previously earned a qualifying STEM degree</strong>
            , you may still use that earlier degree to apply for STEM OPT, provided that:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Both your current and prior degrees are from schools that meet the accreditation requirements;</li>
            <li>
              Your current job duties are <strong>directly related</strong> to that STEM degree;
            </li>
            <li>That degree has never previously been used to apply for a STEM OPT extension.</li>
          </ul>
        </li>
        <li>
          <strong>Employer requirements</strong>:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              The employer is enrolled in <strong>E-Verify</strong>;
            </li>
            <li>The position must be paid, at least 20 hours per week, and directly related to the STEM degree;</li>
            <li>The employer must complete and sign Form I-983 together with the applicant, clearly designating a supervisor and setting out a detailed training plan.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    q: "How is the STEM OPT unemployment period calculated?",
    a: (
      <>
        <p>
          Under policy, total unemployment during the STEM OPT phase may not exceed 60 days. Importantly,
          {" "}<strong>if you already used some unemployment days during the earlier OPT phase, the days remaining for the STEM phase are reduced accordingly</strong> — that is,
          {" "}<strong>150 days minus the days already used</strong>. Here are two recommended ways to confirm how many unemployment days you have left:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Confirm your accumulated unemployment days when reporting a layoff to your DSO:</strong> only your DSO can access the{" "}
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
            <strong>Check your own employer records through the SEVP Portal:</strong> review your employment records in the SEVP Portal to calculate it yourself.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "My unemployment clock is almost up — can Keystone Strategies help me?",
    a: (
      <p>
        Yes. If your employer position isn&rsquo;t compliant yet, or you need to stand up your own company as a
        genuine STEM OPT employer quickly, we prioritize getting the job description, supervision structure, and
        I-983 groundwork done fast so you can complete onboarding within your status grace period.
      </p>
    ),
  },
  {
    q: "How is Keystone's STEM OPT Employer Compliance Training different from other STEM OPT services?",
    a: (
      <p>
        We reject any form of illegal shell employment. Instead of matching you to a third-party job, we focus on
        making the employer side of your specific position, whoever the employer is, genuinely compliant: real job
        duties tied to your degree, a real supervisor, and documentation that holds up under review.
        {" "}<strong>We also coordinate directly with our company formation and immigration petition teams, so the same structure carries forward into H-1B.</strong>
      </p>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="STEM OPT Application FAQs" />

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
            Still have questions? Click for answers &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
