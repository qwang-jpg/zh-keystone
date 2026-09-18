import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "一份书面员工手册，真实反映您实际用工所在州的法律要求",
  "配有真实投诉处理流程的反骚扰与EEO制度",
  "法律要求张贴的联邦与州劳工法公示",
  "每一位员工都被正确归类为豁免/非豁免、员工/独立承包商",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="制度，才是招聘之间真正保护您的屏障"
      description="正确完成一位员工的入职只是一次性任务。而此后规范每一位员工、并能在纠纷或劳工部调查出现时经得起考验的制度，恰恰是大多数初创公司容易忽视、直到问题真正出现才后悔莫及的部分。"
      checklist={checklist}
    />
  );
}
