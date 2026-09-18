import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "治理文件与决议随时可供银行、投资人或移民审查官索取",
  "注册代理人全程覆盖，确保不错过任何州通知、年度报告或特许经营税截止日期",
  "拥有专业的域名、企业邮箱与电话，而非私人Gmail和个人手机号",
  "注册运营地址真正符合州与联邦通信要求",
  "公司信息变更时同步更新政府系统记录",
  "开箱即用的合同、发票与工时记录模板，无需从零搭建",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="大多数新公司都会忽略的治理与运营环节"
      description="公司注册只是给了您一个法律实体。真正让这个实体在客户、银行和政府机构眼中看起来、运作起来都像一家真实企业的，是持续保持有效的治理文件、备案记录与日常运营基础设施。"
      checklist={checklist}
    />
  );
}
