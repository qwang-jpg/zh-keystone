import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I apply for STEM OPT if my current employer is not enrolled in E-Verify?",
    answer: [
      "STEM OPT employers must participate in E-Verify.",
      "If your current employer is not enrolled, the first step is to confirm whether they are willing to enroll and support your STEM OPT application.",
      "If they are unable or unwilling to do so, Keystone can help you evaluate alternative employment solutions based on your timeline and situation.",
    ],
  },
  {
    question: "What if I was laid off and my unemployment clock is already running?",
    answer: [
      "The first priority is understanding how much unemployment time you have remaining and how quickly a new qualifying employment structure needs to be established.",
      "Keystone will assess your current status, timeline, and employer situation, then identify the most appropriate path forward.",
      "The earlier you act, the more flexibility you may have.",
    ],
  },
  {
    question: "Can a startup or newly formed company support STEM OPT?",
    answer: [
      "Yes, if the employer meets the applicable STEM OPT requirements.",
      "A company's age or size is not, by itself, the determining factor.",
      "The employer must be able to support a legitimate STEM OPT employment relationship, including E-Verify participation, qualifying employment, appropriate supervision and training, sufficient resources and personnel, and compliance with the Form I-983 training plan.",
    ],
  },
  {
    question: "Can I use my own company for STEM OPT?",
    answer: [
      "Potentially, but the structure must satisfy STEM OPT requirements.",
      "Simply owning or forming a company is not enough. The company must be able to act as the employer, provide genuine supervision and training, and have an authorized employer representative other than the student complete the employer-side certifications.",
      "Keystone can assess and structure the employment arrangement based on your specific situation.",
    ],
  },
  {
    question: "How early should I start preparing for STEM OPT?",
    answer: [
      "As early as possible, especially if your employer is not yet E-Verify enrolled or your employment structure still needs to be established.",
      "Starting earlier gives you more time to address employer, position, supervision, documentation, and filing requirements before your deadline becomes restrictive.",
    ],
  },
  {
    question: "What if my employer or employment situation changes during STEM OPT?",
    answer: [
      "Employer changes and certain material changes to the training arrangement may require updated reporting or a new Form I-983.",
      "Keystone can help you evaluate the change and update the employment and compliance structure when necessary.",
    ],
  },
  {
    question: "Does Keystone provide protection until my STEM OPT is approved?",
    answer: [
      "Yes.",
      "For clients enrolled in the applicable program, our service agreement provides protection through STEM OPT approval, subject to the terms and responsibilities stated in the contract.",
      "Our support does not end after company setup, E-Verify enrollment, Form I-983 preparation, or application submission. We support the covered process through STEM OPT approval.",
    ],
  },
  {
    question: "Can Keystone help me plan for H-1B after STEM OPT?",
    answer: [
      "Yes.",
      "STEM OPT can provide valuable time to build U.S. work experience and prepare for the next stage of your immigration strategy.",
      <>
        Keystone also provides separate H-1B and employment-based green card planning services,
        including the{" "}
        <strong className="font-semibold text-keystone-ink">H-1B Infinity Plan</strong>.
      </>,
      "STEM OPT protects your current path. The right strategy should also prepare for what comes next.",
    ],
  },
];

export default function StemFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          align="left"
          title="What You Should Know Before Building Your STEM OPT Path"
        />

        <div className="mt-12 grid grid-cols-1 gap-2.5 md:grid-cols-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border-l-[3px] bg-white shadow-[0_1px_2px_rgba(16,36,31,.03),0_8px_20px_-10px_rgba(16,36,31,.1)] transition-colors",
                  isOpen ? "border-l-primary" : "border-l-transparent"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-primary transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="space-y-3 px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/contact">Still have questions? Get answers &gt;&gt;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
