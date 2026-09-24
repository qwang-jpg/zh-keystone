import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import CompactCta from "@/components/common/CompactCta";
import RelatedServices from "@/components/common/RelatedServices";
import Hero from "@/components/eb-2-eb-3-green-card-planning/Hero";
import StatsBar from "@/components/eb-2-eb-3-green-card-planning/StatsBar";
import WhyThisProgram from "@/components/eb-2-eb-3-green-card-planning/WhyThisProgram";
import WhoItsFor from "@/components/eb-2-eb-3-green-card-planning/WhoItsFor";
import RealEmployer from "@/components/eb-2-eb-3-green-card-planning/RealEmployer";
import Framework from "@/components/eb-2-eb-3-green-card-planning/Framework";
import CaseStudies from "@/components/eb-2-eb-3-green-card-planning/CaseStudies";
import WhyKeystone from "@/components/eb-2-eb-3-green-card-planning/WhyKeystone";
import FaqSection, { faqs } from "@/components/eb-2-eb-3-green-card-planning/FaqSection";

export default function Eb2Eb3GreenCardPlanning() {
  return (
    <PageLayout>
      <Seo
        title="EB路径规划项目 — 搭建雇主、积累证据、走通绿卡路径"
        description="Keystone的EB路径规划项目，帮助国际专业人才搭建推进EB-2/EB-3职业类绿卡路径所需的雇主架构、职位体系与运营记录。"
        path="/eb-2-eb-3-green-card-planning"
        jsonLd={buildFaqJsonLd(faqs)}
      />
      <Hero />
      <StatsBar />
      <WhyThisProgram />
      <WhoItsFor />
      <RealEmployer />
      <Framework />
      <CompactCta
        title="搭建我的EB路径"
        description={<p>公司注册、雇主搭建、PWD/PERM协调与I-140就绪，串联成一条结构化的路径。</p>}
        ctaLabel="搭建我的EB路径"
      />
      <CaseStudies />
      <WhyKeystone />
      <RelatedServices currentHref="/eb-2-eb-3-green-card-planning" />
      <FaqSection />
      <CompactCta
        title="不必等到完美的雇主出现，才开始规划您的绿卡。"
        description={
          <p>
            您的长期移民策略，远不止一份申请文件。它还包括申请背后的雇主、雇主背后的企业、企业中的职位，
            以及一路积累下来的各项记录。EB路径规划项目，将这些环节整合进一条结构化的路径。
          </p>
        }
        ctaLabel="预约免费EB路径评估"
      />
    </PageLayout>
  );
}
