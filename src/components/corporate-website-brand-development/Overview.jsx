import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "A logo and visual identity that looks like a real, established company",
  "Brand guidelines and core assets, like a business card and email signature, so your identity stays consistent everywhere",
  "A website that reads as an operating business, not a placeholder page",
  "Content and structure that clearly explain what your company does",
  "A live, responsive site with the SEO basics in place from launch",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="Your Website Is Often the First Thing Anyone Checks"
      description="A client researching you, a bank reviewing your account application, or a USCIS officer evaluating your petition will all look up your company online. We make sure what they find backs up your story."
      checklist={checklist}
    />
  );
}
