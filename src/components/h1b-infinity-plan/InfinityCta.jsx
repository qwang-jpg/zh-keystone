import CompactCta from "@/components/common/CompactCta";

export default function InfinityCta() {
  return (
    <CompactCta
      title={
        <>
          搭建雇主体系需要时间。
          <br />
          在需要递交申请之前就开始准备。
        </>
      }
      description={
        <p>
          公司注册可以很快完成，但可信的运营记录、雇佣体系、财务记录与支持文件的建立，无法一蹴而就。
        </p>
      }
      ctaLabel="评估我的时间线"
    />
  );
}
