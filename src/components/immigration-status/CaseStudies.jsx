import SuccessStories from "@/components/h1b-infinity-plan/SuccessStories";

// Same case-showcase section as the H-1B Infinity Plan and STEM OPT Ready
// Plan pages, reused as-is, filtered to founder-led / self-sponsored cases.
export default function CaseStudies() {
  return (
    <SuccessStories
      title={
        <>
          真实的企业。
          <br />
          真实的创始人主导H-1B历程。
        </>
      }
      description="不同的起点，真实运营的公司。围绕创始人自身业务与实际情况搭建的雇主架构。"
      ariaLabel="创始人主导H-1B历程真实案例"
      filterGoal="创办企业"
    />
  );
}
