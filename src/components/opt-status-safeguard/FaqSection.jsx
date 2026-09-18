import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

// The WordPress export duplicated every accordion answer as flat trailing
// text right after each accordion widget (an editor-rendering artifact, not
// separate content) — deduplicated to one entry per question here.
const faqs = [
  {
    q: "OPT最早什么时候可以申请？申请窗口什么时候关闭？",
    a: (
      <p>
        OPT申请窗口为<strong>项目结束日期（Program End Date）前90天至之后60天</strong>。这里的"项目结束日期"
        指<strong>I-20上标注的项目结束日期</strong>。如果学生未能在<strong>毕业后60天内</strong>
        递交OPT申请，USCIS将视为自动放弃OPT资格，F-1学生身份也将随之失效。
      </p>
    ),
  },
  {
    q: "OPT期间允许多少天失业？",
    a: (
      <p>
        <strong>累计失业时长不得超过90天。</strong>
      </p>
    ),
  },
  {
    q: "OPT期间是否允许自雇？",
    a: (
      <>
        <p>
          <strong>是的，允许自雇</strong>，但必须满足以下条件：
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>您创办的企业必须与您的学位专业方向直接相关。</li>
          <li>您必须全职为该公司工作（每周20小时以上）。</li>
          <li>公司必须是真实运营的实体，且您必须能够提供证明自己正积极从事专业相关工作的材料（合同、发票、工作成果、客户记录等）。</li>
          <li>您仍必须遵守所有OPT申报要求（更新SEVP记录、地址、雇主信息等）。</li>
        </ul>
      </>
    ),
  },
  {
    q: "Keystone Strategies的OPT身份保障计划与其他OPT服务有何不同？",
    a: (
      <p>
        当然可以。对于计划申请STEM OPT的客户，我们会提前通过雇主网络对接担保资源，
        确保您在首次OPT结束后能够顺利过渡到STEM OPT职位。
      </p>
    ),
  },
  {
    q: "申请OPT需要满足哪些资格条件？",
    a: (
      <>
        <p>根据美国国土安全部（DHS）的规定，申请毕业后OPT（Post-completion OPT）需满足以下条件：</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            必须以F-1身份在获SEVP认证的学校完成<strong>至少一个完整学年的全日制学习</strong>（3个季度制学期/2个学期制学期）；
          </li>
          <li>
            所学专业<strong>不得为"英语作为第二语言（ESL）"课程</strong>；
          </li>
          <li>
            申请从事的工作<strong>必须与主修专业方向直接相关</strong>（详情请参阅{" "}
            <a
              href="https://www.ice.gov/doclib/sevis/pdf/optDirectlyRelatedGuidance.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              SEVP政策指南
            </a>
            ）；
          </li>
          <li>
            <strong>不得已用尽当前教育阶段的全部OPT额度；</strong>
          </li>
          <li>
            <strong>不得已获得12个月及以上的全日制课程实习培训（CPT）授权。</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "OPT失业时长是如何计算的？",
    a: (
      <>
        <p>
          OPT失业时长<strong>从您的EAD（工作授权卡）上标注的起始日期开始计算：</strong>
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>每一天未处于合规就业状态，都将计入失业总时长。</li>
          <li>
            <strong>失业天数是累计计算的</strong>——如果您找到工作后又再次失业，计时会继续累加，而非重新开始。
          </li>
          <li>一旦超出限额，F-1身份将自动终止。</li>
        </ul>
        <p className="mt-3">我们建议通过以下两种方式查询您剩余的失业天数：</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>向您的国际学生顾问（DSO）询问已累计的失业天数：</strong>只有DSO才能访问SEVIS系统中的{" "}
            <a
              href="https://studyinthestates.dhs.gov/sevis-help-hub/student-records/fm-student-employment/unemployment-counter"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              失业计数器
            </a>
            ，他们可以准确告诉您已使用的天数。
          </li>
          <li>
            <strong>在SEVP系统中核对自己的雇主记录：</strong>
            从EAD上标注的OPT起始日期开始，该期间内任何没有工作的日子都将计为失业天数。请特别注意，
            OPT期间更换工作或遭遇裁员，在您找到新雇主之前，同样会计入失业天数。
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "我的失业天数快用完了，Keystone Strategies能帮忙吗？",
    a: (
      <p>
        可以。我们专门为在OPT期间与失业计时赛跑的客户提供快速匹配服务，最快48小时即可送上offer，
        解决找不到雇主的难题。我们会帮您在身份宽限期内完成入职，确保身份不失效。立即联系我们——
        让我们一起抢救您的失业窗口期。
      </p>
    ),
  },
  {
    q: "如果我计划以后申请STEM OPT，Keystone Strategies能提供STEM OPT身份保障吗？",
    a: (
      <p>
        当然可以。对于计划申请STEM OPT的客户，我们会提前通过雇主网络对接担保资源，
        确保您在首次OPT结束后能够顺利过渡到STEM OPT职位。
      </p>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="OPT申请常见问题" />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-2xl border border-border">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-keystone-ink md:text-base">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform",
                      open && "rotate-180"
                    )}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">
            还有更多问题？获取解答 &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
