import { Settings2, MapPinned, ClipboardCheck, FileStack } from "lucide-react";
import ServiceCoreDeliverables from "@/components/common/ServiceCoreDeliverables";

const deliverables = [
  {
    icon: Settings2,
    title: "薪资系统搭建",
    description:
      "我们根据您实际的招聘与发薪周期规划薪资系统搭建，确保公司从第一天起就能合法发放W-2薪资。",
    items: ["薪资系统开通激活", "从一开始就正确设置发薪周期与员工分类"],
  },
  {
    icon: MapPinned,
    title: "州税务与失业保险注册",
    description:
      "员工实际工作所在的每一个州，都有各自的薪资税与失业保险账户要求。我们会精准识别并为您注册所需的账户。",
    items: [
      "注册适用的州薪资税账户",
      "注册州失业保险（SUI）账户",
      "覆盖多州及远程办公员工的相关注册",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "薪酬与代扣流程",
    description:
      "我们搭建可重复执行的薪资发放机制：计算薪酬、发放工资、正确代扣税款，并保留经得起审计的记录。",
    items: [
      "《员工薪酬发放指南》文档",
      "《公司银行账户 — 员工薪资设置》文档",
      "每一次发薪的记录留存流程",
    ],
  },
  {
    icon: FileStack,
    title: "工资单与W-2准备",
    description:
      "无论是报税季，还是签证申请或租房申请需要提供工资单时，您的文件都已准备就绪、准确无误。",
    items: [
      "工资单准备指导",
      "年终W-2准备指导",
      "关键申报截止日期提醒",
    ],
  },
];

export default function CoreDeliverables() {
  return (
    <ServiceCoreDeliverables
      description="从第一次发薪到年终W-2办理，以下每一项服务都致力于确保您的薪资准确、及时、合规。"
      items={deliverables}
      columns="sm:grid-cols-2"
    />
  );
}
