import ServiceFaqSection from "@/components/common/ServiceFaqSection";

export const faqs = [
  {
    question: "如果我现在的雇主没有注册E-Verify，我还能申请STEM OPT吗？",
    answer: [
      "STEM OPT雇主必须参与E-Verify。",
      "如果您现在的雇主尚未注册，第一步是确认他们是否愿意注册并支持您的STEM OPT申请。",
      "如果他们无法或不愿意这样做，Keystone可以根据您的时间线与实际情况，帮您评估其他雇佣方案。",
    ],
  },
  {
    question: "如果我被裁员、失业计时已经启动了怎么办？",
    answer: [
      "首要任务是了解您还剩多少失业时间，以及需要多快搭建出新的合规雇佣架构。",
      "Keystone会评估您当前的身份、时间线与雇主情况，然后确定最合适的推进路径。",
      "越早行动，您可能拥有的灵活空间就越大。",
    ],
  },
  {
    question: "初创公司或新成立的公司能支持STEM OPT吗？",
    answer: [
      "可以，只要该雇主满足适用的STEM OPT要求。",
      "公司成立时间长短或规模大小，本身并非决定性因素。",
      "雇主必须能够支撑真实合法的STEM OPT雇佣关系，包括参与E-Verify、符合条件的雇佣、适当的监督与培训、充足的资源与人员，以及遵守I-983表格培训计划的相关要求。",
    ],
  },
  {
    question: "我能用自己的公司申请STEM OPT吗？",
    answer: [
      "有可能，但架构必须满足STEM OPT的相关要求。",
      "仅仅拥有或创办一家公司是不够的。该公司必须能够真正作为雇主运作，提供真实的监督与培训，并由学生本人以外的授权雇主代表完成雇主端的各项认证。",
      "Keystone可以根据您的具体情况评估并搭建相应的雇佣安排。",
    ],
  },
  {
    question: "我应该多早开始准备STEM OPT？",
    answer: [
      "越早越好，尤其是如果您的雇主尚未注册E-Verify，或者您的雇佣架构还有待搭建。",
      "更早启动能让您有更多时间在截止日期变得紧迫之前，处理好雇主、职位、监督、文件与申请等各项要求。",
    ],
  },
  {
    question: "如果STEM OPT期间我的雇主或雇佣情况发生变化怎么办？",
    answer: [
      "更换雇主，以及培训安排中的某些重大变更，可能需要更新申报或重新提交I-983表格。",
      "Keystone可以帮您评估这些变化，并在必要时更新雇佣与合规架构。",
    ],
  },
  {
    question: "Keystone会提供保障直到我的STEM OPT获批吗？",
    answer: [
      "会的。",
      "对于加入相应计划的客户，我们的服务协议会提供保障，直至STEM OPT获批，具体以合同中列明的条款与责任为准。",
      "我们的支持不会在公司搭建、E-Verify注册、I-983表格准备或申请递交后就结束。我们会持续支持相关流程，直至STEM OPT获批。",
    ],
  },
  {
    question: "Keystone能帮我规划STEM OPT之后的H-1B吗？",
    answer: [
      "可以。",
      "STEM OPT能为您争取宝贵的时间，用于积累美国工作经验，并为移民策略的下一阶段做准备。",
      <>
        Keystone还提供独立的H-1B与职业类绿卡规划服务，包括{" "}
        <strong className="font-semibold text-keystone-ink">H-1B无限续航计划</strong>。
      </>,
      "STEM OPT保障的是您当下的路径。而正确的策略，也应该为下一步做好准备。",
    ],
  },
];

export default function StemFaq() {
  return (
    <ServiceFaqSection
      title="搭建STEM OPT路径之前，您应该了解的事项"
      faqs={faqs}
      background="mist"
      ctaLabel="还有更多问题？获取解答 >>"
    />
  );
}
