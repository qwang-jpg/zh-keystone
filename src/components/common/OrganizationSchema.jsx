import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

// Site-wide Organization structured data (name, URL, logo, contact point),
// rendered once per page via PageLayout. Values below are drawn from the
// existing Footer/Header content, not invented.
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Icon.png`,
  description:
    "为国际专业人才与成长型企业提供一体化的移民、公司注册与财务战略，涵盖OPT、STEM OPT、H-1B、自雇创业以及长期移民规划。",
  telephone: "+1-646-294-7091",
  email: "contact@keystonestrategies.us",
  areaServed: "US",
};

export default function OrganizationSchema() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return null;
}
