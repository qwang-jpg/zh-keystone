import ServiceFaqSection from "@/components/common/ServiceFaqSection";

const faqs = [
  {
    question: "申请毕业后OPT，是否需要提前拿到工作offer？",
    answer: [
      "不需要。申请标准的毕业后OPT并不要求提前获得工作offer。",
      "不过，一旦OPT正式开始，失业天数就会开始累积，因此提前规划好您的求职策略，能为您争取更大的灵活空间。",
    ],
  },
  {
    question: "毕业后OPT期间，我有多少天可以失业？",
    answer: [
      "在标准的毕业后OPT授权期内，学生累计可失业的天数通常最多为90天。",
      "如果您不确定自己已经使用了多少失业天数，请向您的DSO核实雇佣记录。",
    ],
  },
  {
    question: "我的OPT雇主需要参与E-Verify吗？",
    answer: "标准的毕业后OPT不需要。只有当符合条件的学生日后申请24个月的STEM OPT延期时，E-Verify才会成为必要条件。",
  },
  {
    question: "我的OPT工作必须与所学专业相关吗？",
    answer: "是的。OPT期间的工作必须与您的主修专业方向直接相关。关键在于您实际承担的工作职责，是否与您在专业学习中获得的知识和技能存在明确关联。",
  },
  {
    question: "如果我在OPT期间被裁员怎么办？",
    answer: "一旦符合条件的雇佣关系终止，失业天数可能会重新开始累积。Keystone可以帮您核算剩余的时间线，并根据您的学术与职业背景，为您匹配相关的工作机会。",
  },
  {
    question: "OPT期间可以自雇吗？",
    answer: "在标准的毕业后OPT期间，如果您所运营的业务真实合法，且工作内容与所学专业直接相关，自雇是可行的。相关的业务活动与工作内容应当妥善记录。",
  },
  {
    question: "我应该多早开始寻找OPT工作？",
    answer: "理想情况下，应在OPT正式开始之前就着手准备。提前行动能让您在失业计时启动之前，有更充裕的时间找到与专业相关的工作机会。",
  },
  {
    question: "Keystone能帮助我从OPT过渡到STEM OPT或H-1B吗？",
    answer: "可以。Keystone可以帮助符合条件的客户规划未来的STEM OPT就业、E-Verify雇主要求、H-1B担保机会，以及更长期的就业与移民策略。",
  },
];

export default function FaqSection() {
  return <ServiceFaqSection title="搭建OPT就业路径前，您应该了解的问题" faqs={faqs} />;
}
