import SuccessStories from "@/components/h1b-infinity-plan/SuccessStories";

// Same case-showcase section as the H-1B Infinity Plan and STEM OPT Ready
// Plan pages, reused as-is with OPT-specific heading copy.
export default function SuccessCases() {
  return (
    <SuccessStories
      title={
        <>
          真实企业。
          <br />
          真实的OPT历程。
        </>
      }
      description="不同的起点，真实运营的企业，围绕客户具体情况搭建的雇主架构。"
      ariaLabel="真实OPT历程案例研究"
      filterGoal="维持OPT身份"
    />
  );
}
