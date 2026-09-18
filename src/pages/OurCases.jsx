import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import CasesHero from "@/components/our-cases/CasesHero";
import CaseExplorer from "@/components/our-cases/CaseExplorer";
import EvidenceGallery from "@/components/our-cases/EvidenceGallery";
import CasesCta from "@/components/our-cases/CasesCta";

export default function OurCases() {
  return (
    <PageLayout>
      <Seo
        title="Our Cases — Real Self-Employment H-1B Success Stories"
        description="A collection of real self-employment H-1B success stories showing how Keystone Strategies clients secured their status and built lasting careers in the U.S."
        path="/our-cases"
      />
      <CasesHero />
      <CaseExplorer />
      <EvidenceGallery />
      <CasesCta />
    </PageLayout>
  );
}
