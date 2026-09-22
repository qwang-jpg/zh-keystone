import PlanAbout from "@/components/common/PlanAbout";

export default function Overview() {
  return (
    <PlanAbout
      heading="员工入职后，仍需完善的职场制度"
      highlight="正确完成一位员工的入职只是一次性任务。而此后规范每一位员工的制度，恰恰是大多数初创公司容易忽视的部分。"
      paragraphs={[
        "入职文书只是让一位员工开始工作。而职场制度，才是此后规范每一位员工的核心，也是纠纷或劳工部调查一旦出现时，真正能够经得起考验的部分。",
        "我们为您制定书面员工手册，真实反映您实际用工所在州的法律要求；一份配有真实投诉处理流程的反骚扰与EEO制度；法律要求张贴的联邦与州劳工法公示；并审核用工分类，确认加班规定豁免状态，以及员工或独立承包商的分类。",
      ]}
    />
  );
}
