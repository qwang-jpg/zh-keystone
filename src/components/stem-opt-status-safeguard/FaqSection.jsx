import ServiceFaqSection from "@/components/common/ServiceFaqSection";

// The WordPress export duplicated every accordion answer as flat trailing
// text right after each accordion widget (an editor-rendering artifact, not
// separate content) — deduplicated to one entry per question here.
const faqs = [
  {
    question: "STEM OPT最早什么时候可以申请？整个流程什么时候结束？",
    answer: (
      <>
        <p>申请STEM OPT延期时，必须同时满足以下三项时间限制：</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            最早可在初次OPT到期前<strong>90天</strong>向USCIS递交申请；
          </li>
          <li>
            必须在学校签发新I-20之日起<strong>60天内</strong>向USCIS递交申请；
          </li>
          <li>
            USCIS必须在<strong>初次OPT到期之前</strong>收到您完整的申请材料。
          </li>
        </ul>
        <p className="mt-3">如果USCIS在OPT到期后，或超出建议的60天窗口期后才收到申请，该申请将被拒收，不予受理。</p>
      </>
    ),
  },
  {
    question: "STEM OPT期间允许多少天失业？",
    answer: (
      <p>
        STEM OPT期间累计的失业天数，会与常规OPT（毕业后OPT）期间已使用的天数合并计算。
        <strong>整个OPT加STEM OPT期间的累计失业天数不得超过150天</strong>，否则将被视为违反F-1身份规定。
      </p>
    ),
  },
  {
    question: "STEM OPT期间是否允许自雇？",
    answer: (
      <p>
        STEM OPT期间的自雇受到限制。STEM OPT政策的核心是"受监管的雇佣关系"与"以培训为导向的雇主监督"，
        因此所有形式的自雇（包括自己创办公司并自我雇佣、单人所有制公司、远程咨询等类似安排）均被排除在外。
        不过，USCIS并未明确禁止申请人持有公司股权——
        <strong>
          只要申请人不是雇主本人、不是I-983的签署方，也不是自己监督自己的工作，
          就有可能搭建出一种被USCIS认可为合规的"自雇"形式
        </strong>
        。请直接联系我们，探讨如何搭建合规架构。
      </p>
    ),
  },
  {
    question: "Keystone Strategies是否能在未来协助办理H-1B、绿卡申请等其他移民服务？",
    answer: <p>当然可以。我们为有H-1B及移民需求的客户提供持续服务，依托我们的雇主资源网络及顶尖顾问与律师团队，为您规划顺利合规的留美路径。</p>,
  },
  {
    question: "申请STEM OPT需要满足哪些条件？",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>必须目前持有有效的初次OPT（毕业后OPT）身份</strong>。
        </li>
        <li>
          <strong>学位必须符合STEM OPT要求</strong>，具体而言：
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>所使用的学位必须是学士、硕士或博士学位；</li>
            <li>
              该学位必须来自<strong>获美国教育部认可机构认证的学校</strong>，并
              <strong>
                通过{" "}
                <a
                  href="https://sevp.ice.gov/opt/#/login"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  SEVP
                </a>
                {" "}（学生与交流访问者项目）认证
              </strong>
              ；
            </li>
            <li>
              该学位的专业方向必须列于DHS的{" "}
              <a
                href="https://www.ice.gov/doclib/sevis/pdf/stemList2024.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                STEM指定学位项目清单
              </a>
              中。
            </li>
          </ul>
          <p className="mt-2">
            <strong>注意：此前获得的STEM学位同样可以使用。</strong>
            {" "}如果您目前的OPT基于非STEM专业，但您<strong>此前曾获得符合条件的STEM学位</strong>
            ，只要满足以下条件，仍可使用该学位申请STEM OPT：
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>您当前与此前的学位均来自符合认证要求的学校；</li>
            <li>
              您目前的岗位职责与该STEM学位<strong>直接相关</strong>；
            </li>
            <li>该学位此前从未被用于申请STEM OPT延期。</li>
          </ul>
        </li>
        <li>
          <strong>雇主要求</strong>：
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              雇主已注册<strong>E-Verify</strong>；
            </li>
            <li>该职位必须为有薪岗位，每周至少20小时，且与STEM学位直接相关；</li>
            <li>雇主必须与申请人共同完成并签署I-983表格，明确指定主管并制定详细的培训计划。</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    question: "STEM OPT失业期是如何计算的？",
    answer: (
      <>
        <p>
          根据政策规定，STEM OPT阶段的累计失业时长不得超过60天。需要特别注意的是，
          {" "}<strong>如果您在此前的OPT阶段已使用部分失业天数，STEM阶段剩余可用天数会相应减少</strong>——
          {" "}即<strong>150天减去已使用的天数</strong>。以下是我们建议的两种确认剩余失业天数的方式：
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>在向DSO报告失业时确认累计失业天数：</strong>只有DSO才能访问SEVIS系统中的{" "}
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
            <strong>通过SEVP系统核对自己的雇主记录：</strong>查看SEVP系统中的就业记录，自行计算。
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "我的失业计时快到期了，Keystone Strategies能帮我吗？",
    answer: (
      <p>
        可以。如果您的雇主职位尚未合规，或者您需要迅速搭建自己的公司作为真实的STEM OPT雇主，
        我们会优先加快完成岗位描述、监督架构与I-983基础工作，让您能在身份宽限期内完成入职。
      </p>
    ),
  },
  {
    question: "Keystone的STEM OPT雇主合规培训与其他STEM OPT服务有何不同？",
    answer: (
      <p>
        我们拒绝任何形式的非法挂靠就业。我们不是把您匹配给第三方岗位，而是专注于让您具体职位背后的
        雇主一方——无论雇主是谁——真正合规：与学位挂钩的真实岗位职责、真实的主管，以及经得起审查的
        文件记录。
        {" "}<strong>我们还会与公司注册及移民申请团队直接协调，确保同一套架构能够延续应用到H-1B阶段。</strong>
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <ServiceFaqSection
      title="STEM OPT申请常见问题"
      faqs={faqs}
      ctaLabel="还有更多问题？点击获取解答 >>"
    />
  );
}
