import ServiceOverview from "@/components/common/ServiceOverview";

const checklist = [
  "根据您真实的资历与职位，匹配正确的类别——EB-2或EB-3",
  "职位与岗位描述设计经得起PERM招聘流程与市场工资审查的考验",
  "雇主架构能够证明其具备支付所提供薪资的能力",
  "为PERM、I-140及身份调整申请，清晰地对接移民律师",
];

export default function Overview() {
  return (
    <ServiceOverview
      title="每一个EB-2或EB-3案件背后的雇主端基础工作"
      description="PERM劳工证与I-140申请，都取决于雇主必须在递交前正确回答的几个问题：这是否是一个真实岗位？薪资是否符合市场工资水平？公司是否真的负担得起？无论您的担保方是现有雇主，还是您自己创办、用于延续H-1B路径的公司，我们都会为您搭建好这一基础。"
      checklist={checklist}
    />
  );
}
