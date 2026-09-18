import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComplianceClosing() {
  return (
    <section className="relative overflow-hidden bg-keystone-ink py-24">
      <div className="absolute inset-0 bg-keystone-gradient opacity-15" />
      <div className="container relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">合规的STEM OPT就业</h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
          STEM OPT雇主合规培训专为即将雇佣STEM OPT员工的企业，以及需要让自己公司真正作为合规雇主运作的
          创始人打造。我们专注于USCIS与DSO真正审查的核心环节：契合学位的岗位描述、真实的主管，
          以及真实反映工作实际情况的文件记录。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          我们的支持不会在I-983递交后就结束。我们会通过定期跟进与持续答疑保持全程参与，
          确保雇佣关系在整个STEM OPT延期期间，乃至后续在此基础上递交的H-1B申请中，都经得起考验。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          我们拒绝任何形式的非法挂靠就业。我们协助搭建的每一套架构，都力求真实、有据可查，
          并经得起审查。
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-keystone-ink hover:bg-white/90">
          <Link to="/contact">
            预约合规咨询
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
