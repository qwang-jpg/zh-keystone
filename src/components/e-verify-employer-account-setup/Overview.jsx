import SectionHeading from "@/components/common/SectionHeading";

export default function Overview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <SectionHeading align="left" title="为什么E-Verify注册至关重要" />
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            E-Verify是雇主用来确认新员工是否具备在美国合法工作资格的联邦系统。对大多数公司而言，
            这项注册是可选的，但{" "}
            <strong className="font-semibold text-keystone-ink">一旦您想雇佣STEM OPT学生，这就成为强制要求</strong>
            ——除非雇主已完成E-Verify注册并保持良好状态，否则USCIS不会认可STEM OPT延期申请。
          </p>
          <p>
            注册本身是公司层面的一次性流程：签署E-Verify谅解备忘录、搭建公司档案与雇佣地点信息、
            分配用户角色，并完成必要的项目培训引导。一旦操作不当，恰恰会在您急需快速推进时，
            拖慢新员工的入职进程。
          </p>
          <p>
            我们端到端负责整个注册流程，确保您的公司在需要之前就已拥有有效的E-Verify账户与公司ID。
            您的第一位新员工入职，还会触发一项容易被忽略的独立义务：通常需要在入职后几天内，
            向所在州的新员工申报系统报备该员工信息。我们会在完成E-Verify注册的同时，一并搭建好这一流程。
          </p>
        </div>
      </div>
    </section>
  );
}
