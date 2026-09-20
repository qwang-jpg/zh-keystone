import SuccessStories from "@/components/h1b-infinity-plan/SuccessStories";

// Same case-showcase section as the H-1B Infinity Plan page, reused as-is
// with STEM OPT-specific heading copy.
export default function StemSuccessStories() {
  return (
    <SuccessStories
      title={
        <>
          真实的企业。
          <br />
          真实的STEM OPT历程。
        </>
      }
      description="不同的起点，真实运营的公司，围绕客户实际情况搭建的雇主架构。"
      ariaLabel="真实的STEM OPT历程案例"
      filterGoal="维持STEM OPT身份"
    />
  );
}
