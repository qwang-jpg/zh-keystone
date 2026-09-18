import SectionHeading from "@/components/common/SectionHeading";

export default function Overview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container max-w-3xl">
        <SectionHeading align="left" title="Why E-Verify Enrollment Matters" />
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            E-Verify is the federal system employers use to confirm that a new hire is
            authorized to work in the United States. For most companies it&rsquo;s optional, but
            it becomes{" "}
            <strong className="font-semibold text-keystone-ink">mandatory the moment you want to employ a STEM OPT student</strong>
            {" "}— USCIS will not recognize a STEM OPT extension unless the employer is enrolled
            and in good standing with E-Verify.
          </p>
          <p>
            Enrollment itself is a company-level, one-time process: signing the E-Verify
            Memorandum of Understanding, setting up your company profile and hiring
            site(s), assigning user roles, and completing the required program
            orientation. Done incorrectly, it can stall your ability to onboard a new
            employee right when you need to move fast.
          </p>
          <p>
            We handle the enrollment from start to finish, so your company has an active
            E-Verify account and Company ID in hand before you need it. Your very first hire
            also triggers a separate, easy-to-miss obligation: reporting the new employee to
            your state's new hire directory, usually within days of their start date. We set
            that process up alongside your E-Verify enrollment.
          </p>
        </div>
      </div>
    </section>
  );
}
