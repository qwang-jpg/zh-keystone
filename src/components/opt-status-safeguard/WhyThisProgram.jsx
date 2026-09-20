import PlanAbout from "@/components/common/PlanAbout";

export default function WhyThisProgram() {
  return (
    <PlanAbout
      heading="OPT只给您很短的窗口期，别把它浪费在盲目摸索上"
      highlight="这不只是求职，而是一条贯穿OPT始终、通向未来的系统化路径。"
      paragraphs={[
        "毕业后OPT有一项硬性限制：失业天数存在上限，且从事的工作必须与您的专业方向真正相关。只要触碰其中任何一条红线，都可能危及您的身份，而传统求职方式往往跟不上这个计时器的速度。",
        "Keystone的OPT身份保障计划从雇主端入手解决这个问题。我们不会让您独自摸索求职，而是依托自有的企业网络，为您对接真实的、与专业相关的工作机会，协助您妥善记录雇佣关系，并在您的OPT窗口关闭之前，提前规划好身份的下一步。",
      ]}
    />
  );
}
