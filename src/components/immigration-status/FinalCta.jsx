import CompactCta from "@/components/common/CompactCta";

export default function FinalCta() {
  return (
    <CompactCta
      title="在递交申请之前，先把职位搭建到位"
      description={
        <>
          <p>
            仓促拟定的岗位描述或不清晰的雇佣关系，是申请招致额外审查最常见的原因之一。
            先把职位做对，此后无论是递交、补件回复还是最终裁决，都能进展得更快、风险更低。
          </p>
          <p>
            Keystone Strategies 负责搭建职位与合规框架，随后直接与移民律师协调完成递交，
            让您案件的商业与法律两端能够同步推进。
          </p>
        </>
      }
      ctaLabel="预约申请规划咨询"
    />
  );
}
