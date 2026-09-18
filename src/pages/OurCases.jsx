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
        title="成功案例 — 真实的自雇型H-1B成功故事"
        description="精选真实的自雇型H-1B成功案例，展示Keystone Strategies客户如何获得身份保障，并在美国建立长久的职业发展。"
        path="/our-cases"
      />
      <CasesHero />
      <CaseExplorer />
      <EvidenceGallery />
      <CasesCta />
    </PageLayout>
  );
}
