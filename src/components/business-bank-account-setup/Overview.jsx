import ServiceOverview from "@/components/common/ServiceOverview";

const stats = [
  { value: "$500", label: "典型新账户现金奖励金额" },
  { value: "1", label: "次咨询即可准备好全部材料" },
  { value: "100%", label: "支持远程开户" },
];

const checklist = [
  "避免个人与公司资金混用——这是引发IRS审查以及\"揭开公司面纱\"责任风险的常见诱因",
  "选择真正支持非居民创始人和远程开户的银行",
  "开户通话前，银行要求的所有材料均已备齐",
  "抓住可获得的新账户现金奖励，而不是白白错过",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="企业银行账户为何刻不容缓"
      description="EIN与公司注册文件只是打开了大门——真正让公司能够运营、收款并保持合规的，是一个专属的企业银行账户。"
      checklist={checklist}
      stats={stats}
    />
  );
}
