import CompactCta from "@/components/common/CompactCta";

export default function AssessmentCta({ final = false }) {
  if (final) {
    return (
      <CompactCta
        title="在需要递交申请之前，先搭建好您的雇主主体。"
        description={
          <p>
            告诉我们您当前的情况——您的移民身份、专业背景、业务方向与时间线。我们将协助您评估 H-1B Infinity Plan 是否适合您的情况。
          </p>
        }
        ctaLabel="获取 H-1B 初步评估"
      />
    );
  }
  return (
    <CompactCta
      title="您的企业能否支持 H-1B 申请规划？"
      description={<p>从评估您的背景、拟开展的业务、专业职位、移民身份与时间线开始。</p>}
      ctaLabel="获取 H-1B 初步评估"
    />
  );
}
