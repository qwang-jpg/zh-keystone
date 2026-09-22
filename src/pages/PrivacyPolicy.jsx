import PageLayout from "@/components/layout/PageLayout";
import Seo from "@/components/common/Seo";

// Real policy content, written from facts provided by the site owner
// (2026-09): what we collect via the contact form and Client Portal, our
// use of Google Analytics, no third-party sharing without consent, and
// deletion of client data once a client confirms they no longer need our
// services. The retention section is worded to allow for legal/regulatory
// record-keeping exceptions (tax, immigration, professional-conduct rules)
// rather than promising unconditional deletion — confirm actual retention
// periods with whoever handles compliance before relying on this in a
// dispute. No legal entity name or business address is published anywhere
// else on the site, so none is invented here. Have counsel review before
// publishing, particularly the retention section.
const sections = [
  {
    "heading": "概述",
    "body": [
      "本隐私政策说明 Keystone Strategies（以下简称“我们”）如何在运营网站及向客户提供服务的过程中收集、使用、共享和保护个人信息。本政策适用于 keystonestrategies.us 的访问者，以及与我们合作的个人和企业客户。"
    ]
  },
  {
    "heading": "我们收集的信息",
    "body": [
      "您直接提供的信息。当您填写联系或咨询表单时，我们会收集您提供的信息，例如姓名、邮箱地址及咨询内容。",
      "您成为客户后收集的信息。如果您委托我们提供移民、税务或商业服务，我们及安全客户门户会收集完成该项委托所需的其他信息，例如身份与移民状态信息、雇佣与企业记录、财务信息，以及您上传或向服务团队提供的文件和材料。",
      "自动收集的信息。与大多数网站一样，我们使用 Google Analytics 了解访问者如何使用网站，例如浏览的页面、停留时间、根据 IP 地址推测的大致位置，以及浏览器或设备类型。这些属于汇总的网站使用数据，除非您同时提交过表单，否则不会与您的姓名关联。"
    ]
  },
  {
    "heading": "我们如何使用您的信息",
    "body": [
      "我们使用所收集的信息回复咨询、安排和提供咨询服务、履行您委托的移民、税务及商业服务、就案件或服务事项与您沟通、履行法律及专业规范要求的记录保存义务，以及了解和改善网站的使用体验。"
    ]
  },
  {
    "heading": "我们如何共享您的信息",
    "body": [
      "我们不会出售您的个人信息，也不会将其提供给第三方用于第三方自身的营销目的。",
      "我们仅在以下情况下共享您的信息：获得您的同意；向协助我们运营业务的服务提供商（例如客户门户平台和 Google Analytics）提供信息，且其仅可为向我们提供相应服务而使用这些信息；仅在完成您委托的特定服务所必需时，向政府机构或其他相关方提供信息（例如代表您递交申请）；或者为遵守法律、法院命令或保护我们的合法权利而提供信息。"
    ]
  },
  {
    "heading": "信息保存与删除",
    "body": [
      "在持续向您提供服务期间，我们会保留客户信息。服务完成且您告知我们预计不再需要后续服务后，我们会从正在使用的系统中删除您的个人信息；但适用法律或专业记录保存义务要求在规定期限内保留的特定记录除外，例如税务或移民相关记录。",
      "如果您仅通过联系表单提交咨询，尚未成为客户，我们只会在回复和跟进咨询所需的时间内保留相关信息。"
    ]
  },
  {
    "heading": "Cookie 与第三方分析服务",
    "body": [
      "我们使用 Google Analytics，通过 Cookie 及类似技术收集访问者使用网站的信息。Google 可能依据其自身隐私政策使用这些数据，其政策网址为 https://policies.google.com/privacy。",
      "您可以使用 Google Analytics 停用浏览器插件（Google Analytics Opt-out Browser Add-on）退出其跟踪，也可以通过浏览器设置管理 Cookie。"
    ]
  },
  {
    "heading": "信息安全",
    "body": [
      "我们采取合理的管理、技术和物理保护措施，保护所持有的个人信息，包括将客户信息的访问权限限制在处理该客户事务的团队成员范围内。任何传输或存储方式都无法做到完全安全，因此我们不能保证绝对安全。"
    ]
  },
  {
    "heading": "您的选择与权利",
    "body": [
      "您可以询问我们持有哪些与您有关的个人信息，要求更正信息，或要求删除信息，但上述记录保存例外仍然适用。您也可以随时选择不再接收我们的非必要邮件。根据您居住的地区，适用法律可能赋予您其他权利。如需行使这些权利，请通过下方联系方式与我们联系。"
    ]
  },
  {
    "heading": "儿童隐私",
    "body": [
      "我们的网站与服务面向成年人，并非面向儿童。我们不会在知情的情况下收集儿童的个人信息。"
    ]
  },
  {
    "heading": "本政策的变更",
    "body": [
      "我们可能不时更新本隐私政策，以反映业务实践的变化，或满足法律、运营及监管方面的需要。更新后的版本会发布在本页面，并标注新的“最后更新”日期。"
    ]
  },
  {
    "heading": "联系我们",
    "body": [
      "如对本隐私政策或我们处理信息的方式有任何疑问，请发送邮件至 contact@keystonestrategies.us，或致电 +1 (646) - 294 - 7091。"
    ]
  }
];

const lastUpdated = "2026年9月13日";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <Seo
        title="隐私政策"
        description="Keystone Strategies 隐私政策：了解我们收集哪些信息、如何使用这些信息，以及您对个人信息享有的权利。"
        path="/privacy-policy"
      />
      <section className="bg-keystone-ink py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">隐私政策</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <p className="text-xs font-medium uppercase tracking-wide text-keystone-ink/50">
            最后更新： {lastUpdated}
          </p>

          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-keystone-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
