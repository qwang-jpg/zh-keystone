import CompactCta from "@/components/common/CompactCta";

export default function ComplianceClosing() {
  return (
    <CompactCta
      title="真实的工作。经得起核验的经历。更多向前的选择。"
      description={
        <>
          <p>
            无论您的OPT即将开始、失业计时已经启动，还是雇佣状况发生了变化，Keystone都能帮您找到相关的工作机会，
            搭建一条更稳健的前进之路。
          </p>
          <p className="font-semibold text-white/85">
            500+家合作企业资源 · 2,000+个真实工作机会 · 最快48小时获得offer
          </p>
        </>
      }
      ctaLabel="获取 OPT 初步评估"
    />
  );
}
