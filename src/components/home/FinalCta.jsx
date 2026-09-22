import CompactCta from "@/components/common/CompactCta";

export default function FinalCta() {
  return (
    <CompactCta
      title="您最关心的问题，正是我们最擅长的领域"
      description={
        <p>
          无论您正处于哪个阶段，我们都会为您提供量身定制的结构化支持——把复杂问题转化为切实进展，而非千篇一律的答案。
        </p>
      }
      ctaLabel="预约免费咨询"
    />
  );
}
