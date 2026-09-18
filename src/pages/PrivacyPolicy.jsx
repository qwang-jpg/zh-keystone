import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";

// Real policy content, written from facts provided by the site owner
// (2026-09): what we collect via the contact form and Client Portal, our
// use of Google Analytics, no third-party sharing without consent, and
// deletion of client data once a client confirms they no longer need our
// services. The retention section is worded to allow for legal/regulatory
// record-keeping exceptions (tax, immigration, professional-conduct rules)
// rather than promising unconditional deletion — confirm actual retention
// periods with whoever handles compliance before relying on this in a
// dispute. No legal entity name or business address is published anywhere
// else on the site, so none is invented here. Have counsel review before
// publishing, particularly the retention section.
const sections = [
  {
    heading: "Overview",
    body: [
      "This Privacy Policy explains how Keystone Strategies (\"Keystone Strategies,\" \"we,\" \"us,\" or \"our\") collects, uses, shares, and protects personal information in connection with our website and the services we provide to clients. It applies to visitors to keystonestrategies.us and to individuals and businesses we work with as clients.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Information you submit to us directly. When you fill out our contact or consultation form, we collect the information you provide, such as your name, email address, and the details of your inquiry.",
      "Information collected once you become a client. If you engage us for immigration, tax, or business services, we and our secure Client Portal collect the additional information needed to complete that engagement — for example, identity and immigration status details, employment and business records, financial information, and any documents or materials you upload or share with your case team.",
      "Information collected automatically. Like most websites, we use Google Analytics to understand how visitors use our site — for example, pages viewed, time on site, general location derived from IP address, and browser or device type. This is aggregate usage data, not information tied to your name unless you've also submitted a form.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information we collect to respond to your inquiries, schedule and deliver consultations, provide the immigration, tax, and business services you've engaged us for, communicate with you about your case or engagement, meet our legal and professional record-keeping obligations, and understand and improve how our website is used.",
    ],
  },
  {
    heading: "How We Share Your Information",
    body: [
      "We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.",
      "We only share your information: with your consent; with service providers who help us operate our business (such as our Client Portal platform and Google Analytics), who are only permitted to use it to provide that service to us; with government agencies or other parties strictly where necessary to complete the specific service you've engaged us for (for example, filing a petition on your behalf); or where required by law, court order, or to protect our legal rights.",
    ],
  },
  {
    heading: "Data Retention and Deletion",
    body: [
      "We retain client information for as long as we're actively providing services to you. Once an engagement is complete and you've let us know you don't anticipate needing further services from us, we delete your personal information from our active systems, except where we're required to retain certain records for a defined period under applicable law or professional record-keeping obligations (for example, tax or immigration-related recordkeeping requirements).",
      "If you've only submitted an inquiry through our contact form and haven't become a client, we retain that information only for as long as needed to respond to you and follow up.",
    ],
  },
  {
    heading: "Cookies and Third-Party Analytics",
    body: [
      "We use Google Analytics, which uses cookies and similar technologies to collect information about how visitors use our website. Google may use this data in accordance with its own privacy policy, available at https://policies.google.com/privacy.",
      "You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on, or control cookies generally through your browser settings.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards to protect the personal information we hold, including restricting access to client information to the team members working on your matter. No method of transmission or storage is completely secure, so we can't guarantee absolute security.",
    ],
  },
  {
    heading: "Your Choices and Rights",
    body: [
      "You can ask us what personal information we hold about you, request that we correct it, or request that we delete it, subject to the record-keeping exceptions described above. You can also opt out of any non-essential email communications from us at any time. Depending on where you live, you may have additional rights under applicable law. To exercise any of these rights, contact us using the information below.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our website and services are intended for adults and are not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We'll post the updated version on this page with a new \"last updated\" date.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, contact us at contact@keystonestrategies.us or +1 (646) - 294 - 7091.",
    ],
  },
];

const lastUpdated = "September 13, 2026";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <Seo
        title="Privacy Policy"
        description="Keystone Strategies' privacy policy, covering what data we collect, how it's used, and the rights you have over your personal information."
        path="/privacy-policy"
      />
      <section className="bg-keystone-ink py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <p className="text-xs font-medium uppercase tracking-wide text-keystone-ink/50">
            Last updated: {lastUpdated}
          </p>

          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-keystone-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
