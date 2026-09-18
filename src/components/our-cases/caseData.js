// Case data behind the /our-cases matcher, grid, and drawer. Each case's
// `problem` / `plan` / `result` / `timeline` are a condensed version of its
// `paragraphs` (the full story). Client names are anonymized as "Client A",
// "Client B", etc., ordered most-recent-first. Cases O-R are adapted from
// the original WordPress export (see SuccessStories.jsx history for
// provenance notes); cases A-N are written from internal FY2026-FY2027
// case-tracking notes.
//
// `goals` tags each case with the goal(s) from the homepage's "What is your
// goal?" picker it's actually relevant to, so the two sections share one
// vocabulary. A case can carry more than one: "Get initial H-1B" is any
// lottery entry (win or not, first try or fourth), "Transfer H-1B" is only
// cases whose pathway includes an H-1B Transfer, and "Start up a business"
// marks cases where the company is a real, ongoing operating business
// (partners, clients, revenue) rather than a structure built solely to
// support the immigration filing.
export const GOALS = [
  "Active/Maintain OPT",
  "Active/Maintain STEM-OPT",
  "Get initial H-1B",
  "Transfer H-1B",
  "Start up a business",
];

export const CASES = [
  {
    num: "01",
    name: "Client A",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B", "Start up a business"],
    meta: "Rutgers University · Supply Chain Analytics · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "7 weeks",
    outcome: "Selected in H-1B lottery",
    summary: "She was already running a real logistics business during her first year of OPT, and we designed the company structure around both her STEM OPT extension and H-1B — she was selected in the FY2027 lottery and is now waiting on her H-1B petition.",
    chips: [
      "Self-employment entity",
      "Logistics business",
      "STEM OPT",
      "FY2027 lottery",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "Her first year of OPT was set to expire July 14, and she was already running a real logistics business with other partners. Because she needed to solve both her STEM OPT extension and H-1B at the same time — while making sure the company structure worked for partners who also had valid status — the company needed to be carefully structured from the start.",
    plan: "She signed our H-1B Infinity Plan9. We designed the company structure around both her STEM OPT and H-1B strategy, taking into account the ownership and immigration status of her other partners. The company registration was completed February 19, with the bank account open by February 27, putting everything in place for the FY2027 H-1B lottery.",
    result: "She was selected in the FY2027 H-1B lottery on March 29. Her H-1B petition was submitted in June and is currently pending. While waiting for the H-1B decision, she completed her STEM OPT extension in July and received the receipt notice, allowing her to maintain her STEM OPT process while the H-1B remains pending.",
    timeline: [
      {
        when: "Feb 2026",
        what: "Signed the H-1B Infinity Plan on Feb 9; company registration completed Feb 19 and bank account opened Feb 27.",
      },
      {
        when: "Mar 2026",
        what: "Selected in the FY2027 H-1B lottery on March 29.",
      },
      {
        when: "Jun 2026",
        what: "H-1B petition submitted and entered pending status.",
      },
      {
        when: "Jul 2026",
        what: "Completed STEM OPT extension and received the receipt notice while the H-1B petition remained pending.",
      },
    ],
  },
  {
    num: "02",
    name: "Client B",
    goals: ["Get initial H-1B"],
    meta: "University of Chicago · Social Science · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "3 weeks",
    outcome: "Selected in H-1B lottery",
    summary: "One of the fastest turnarounds on record — signed, registered, banked, and selected in the FY2027 lottery all within three weeks.",
    chips: [
      "Self-employment entity",
      "Rush registration",
      "FY2027 lottery",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
    ],
    problem: "She was already working through her first year of OPT through self-employment, but with her OPT set to expire on August 7, 2026, she needed to make sure she could enter the H-1B lottery in time.",
    plan: "Because her immediate goal was to get into the H-1B lottery, we recommended our $3,980 starter package to get the company structure and registration in place first. She signed on March 9, and we pushed the company registration and EIN through on an expedited basis, completed by March 13, with the bank account following on March 16. After she was selected, she upgraded to our H-1B Infinity plan for the full petition preparation.",
    result: "She was selected in the FY2027 H-1B lottery on March 28 — less than three weeks after signing — and then upgraded to our H-1B Infinity plan to prepare her petition.",
    timeline: [
      {
        when: "Mar 2026",
        what: "Signed on March 9 for our $3,980 starter package; company registration and EIN completed on an expedited basis by March 13, with the bank account opened March 16.",
      },
      {
        when: "Mar 28, 2026",
        what: "Selected in the FY2027 H-1B lottery and upgraded to our H-1B Infinity plan for petition preparation.",
      },
    ],
    paragraphs: [
      "Client B was already using self-employment during her first year of OPT, which was set to expire on August 7, 2026. Her immediate goal was to make sure she could enter the H-1B lottery, so we recommended our $3,980 starter package to get the company structure and registration in place first.",
      "She signed on March 9, and we pushed the registration through on an expedited basis: the company and EIN were completed by March 13, followed by the bank account on March 16. She was selected in the FY2027 H-1B lottery on March 28 — less than three weeks after signing — and then upgraded to our H-1B Infinity plan to prepare the full H-1B petition.",
    ],
  },
  {
    num: "03",
    name: "Client C",
    goals: ["Active/Maintain OPT", "Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "University of the Cumberlands · Project Management · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "1 month",
    outcome: "Selected in H-1B lottery",
    summary: "With only one year of OPT and her unemployment clock already running, her self-registered single-member LLC didn't meet H-1B requirements — so we rebuilt her company from scratch in under two weeks, in time for the FY2027 lottery.",
    chips: [
      "Self-employment entity re-formed",
      "Washington business license",
      "FY2027 lottery",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "She had only one year of OPT, which began on February 2, 2026, and she was already into her unemployment clock when she reached out. She had registered her own single-member LLC to create a self-employment option, but the structure didn't meet what STEM OPT and H-1B would require. With limited time left on her OPT, she needed the company rebuilt correctly — and quickly.",
    plan: "She signed on for our H-1B package on February 26. We rebuilt the company structure and completed its EIN and Washington State business license by March 4 — getting everything in place in time for the FY2027 H-1B lottery.",
    result: "She was selected in the FY2027 H-1B lottery on March 28, about a month after signing on. She is now waiting for her H-1B petition approval.",
    timeline: [
      {
        when: "Feb 2026",
        what: "OPT began Feb 2 with only one year of OPT; her unemployment clock was already running when she reached out. Signed on Feb 26 after her self-registered LLC was found not to meet H-1B requirements.",
      },
      {
        when: "Mar 2026",
        what: "Company was rebuilt with the required structure, EIN, and Washington State business license by March 4.",
      },
      {
        when: "Mar 2026",
        what: "Selected in the FY2027 H-1B lottery on March 28.",
      },
      {
        when: "Current",
        what: "Waiting for H-1B petition approval.",
      },
    ],
    paragraphs: [
      "Client C had only one year of OPT, beginning February 2, 2026, and was already into her unemployment clock when she reached out. She had tried to get ahead of it herself by registering a single-member LLC, but the structure didn't meet what STEM OPT and H-1B would require. With her OPT clock already running, the company needed to be rebuilt from the ground up — and quickly.",
      "She signed our H-1B half-service package on February 26, and within about a week we had the company properly re-formed with its EIN and Washington State business license. She was selected in the FY2027 H-1B lottery on March 28, roughly a month after signing on. She is now waiting for her H-1B petition approval.",
    ],
  },
  {
    num: "04",
    name: "Client D",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B", "Start up a business"],
    meta: "Dallas Baptist University · Information Technology & Management · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "2.5 months",
    outcome: "Selected in H-1B lottery",
    summary: "She already had a profitable operating business when she came to us, but with only about a month left before her STEM OPT extension deadline, every step had to land on time — we built the company structure around a long-term green card strategy, secured her STEM OPT, and got her selected in the FY2027 H-1B lottery.",
    chips: [
      "Self-employment entity",
      "Green card",
      "FY2027 lottery",
      "STEM OPT extension",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "She was already running a real, profitable business during her first year of OPT, but with only about one month left before her STEM OPT extension deadline, the timeline was extremely tight. She wanted a long-term green card strategy built around the business, while also making sure she could maintain valid status through STEM OPT and then H-1B. Because the company structure would matter for the future green card case, the ownership and employer-employee relationship had to be set up carefully from the beginning.",
    plan: "We built the company structure with the green card strategy as the long-term framework, while using STEM OPT and H-1B as the immigration steps along the way. A critical part of the structure was ensuring that she herself was not a shareholder of the company, while establishing a compliant employer-employee relationship. With only about a month before her STEM OPT extension deadline, we coordinated each step closely and secured her STEM OPT extension in February. We then prepared her to participate in the FY2027 H-1B lottery in March, while continuing to work with immigration counsel on the next stage of her green card process through PERM.",
    result: "Her STEM OPT extension was completed in February, and she was selected in the FY2027 H-1B lottery in March. She is now working with immigration counsel to move forward with the PERM application as part of her longer-term green card strategy.",
    timeline: [
      {
        when: "Jan 2026",
        what: "Signed on and began restructuring the company around her long-term green card strategy, with only about one month remaining before the STEM OPT extension deadline.",
      },
      {
        when: "Feb 2026",
        what: "STEM OPT extension completed, securing her next stage of employment authorization.",
      },
      {
        when: "Mar 2026",
        what: "Participated in the FY2027 H-1B lottery and was selected.",
      },
      {
        when: "Current",
        what: "Working with immigration counsel to move forward with the PERM application for her long-term green card strategy.",
      },
    ],
    paragraphs: [
      "Client D already had a real, profitable operating business when she came to us. But the timing was tight: she had only about one month left before her STEM OPT extension deadline. At the same time, she wasn't looking for a short-term solution — she wanted to build a long-term green card strategy around the business, while using STEM OPT and H-1B to maintain a stable immigration path along the way.",
      "We therefore treated the company structure as the foundation of the entire strategy rather than simply setting up an entity for STEM OPT. The ownership structure was particularly important: she could not be a shareholder of the company, while the company still needed to establish a credible employer-employee relationship for her employment. With every step needing to land on time, we coordinated the company setup and STEM OPT process closely and completed her STEM OPT extension in February.",
      "In March, she participated in the FY2027 H-1B lottery and was selected. With the immediate STEM OPT and H-1B milestones secured, she is now working with immigration counsel on the PERM application, continuing the longer-term green card strategy we built around her business.",
    ],
  },
  {
    num: "05",
    name: "Client E",
    goals: ["Active/Maintain OPT", "Get initial H-1B"],
    meta: "UCLA · Mathematics & Economics · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "5.5 months",
    outcome: "Selected in H-1B lottery",
    summary: "Her father called us before she'd even graduated, worried that a tough job market could make her job search take longer and put her status at risk — we had her self-employment plan built before her diploma arrived, and she was selected in the FY2027 lottery.",
    chips: [
      "Self-employment entity",
      "Pre-graduation planning",
      "FY2027 lottery",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
    ],
    problem: "She hadn't graduated yet when her father first reached out to us in late September, worried that if her job search stalled after graduation, her status could be put at risk. The family wanted a self-employment option in place early as a backup, while also keeping open a path to the H-1B lottery.",
    plan: "We signed her ahead of her December 2025 graduation, and established her company before she finished school. Her OPT was approved in November and set to begin February 2, 2026. By late January, she decided to enter the H-1B lottery through her own company, since the traditional employer she had found did not sponsor H-1B, and she upgraded to our full H-1B service.",
    result: "She was selected in the FY2027 H-1B lottery on March 30 through her own company. She is currently waiting for her H-1B petition to be approved.",
    timeline: [
      {
        when: "Oct 2025",
        what: "company registered by November 20, EIN the next day.",
      },
      {
        when: "Nov 2025",
        what: "OPT approved, effective February 2, 2026.",
      },
      {
        when: "Jan 2026",
        what: "Upgraded to full H-1B service to enter the FY2027 lottery through her own company.",
      },
      {
        when: "Mar 2026",
        what: "Selected in the FY2027 H-1B lottery through her own company.",
      },
      {
        when: "Current",
        what: "Waiting for H-1B petition approval.",
      },
    ],
    paragraphs: [
      "Client E's father reached out to us in late September 2025, before she'd even finished her Mathematics/Economics degree at UCLA. He was worried that if her job search after graduation didn't work out, her status could be left without a backup plan. The family wanted to get ahead of the issue and have a self-employment option ready before graduation, while keeping a longer-term H-1B strategy open.",
      "We signed her on October 13, more than two months before her December graduation, and had the company registered by November 20 with an EIN the next day. Her OPT was approved by the end of November and set to begin February 2, 2026. By late January, she had found a traditional job, but that employer did not sponsor H-1B. So rather than relying on an employer-sponsored path, she upgraded to our full H-1B service and entered the FY2027 lottery through her own company.",
      "She was selected in the H-1B lottery on March 30 through her own company. She is now waiting for her H-1B petition to be approved.",
    ],
  },
  {
    num: "06",
    name: "Client F",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "Columbia University · Data Science · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "3.5 months",
    outcome: "Selected in H-1B lottery",
    summary: "With 40+ days left before his STEM OPT extension deadline and no employer willing to sponsor him, she built his own company to support both STEM OPT and a long-term H-1B strategy — and ultimately had her H-1B approved.",
    chips: [
      "Self-employment entity",
      "STEM OPT extension",
      "RFE biometrics",
      "H-1B lottery",
      "H-1B approval",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "With only 40+ days left before her STEM OPT extension deadline, she didn't have an employer willing to sponsor his STEM OPT. At the same time, he wanted to remain in the U.S. long term, which meant he needed to plan for the H-1B lottery as well — making both the immediate STEM OPT extension and the longer-term H-1B strategy time-sensitive.",
    plan: "We helped her establish a company structured to meet the requirements for both STEM OPT and a future H-1B petition. A key part of the process was establishing a credible employer-employee relationship within the company, so we worked with her to determine the appropriate company structure and EIN setup. We secured the USCIS receipt for his STEM OPT extension before his existing authorization expired, then prepared her to participate in the H-1B lottery in March. Hhe was selected and subsequently filed her H-1B petition through premium processing.",
    result: "Her STEM OPT extension was approved, allowing her to continue working through his company. He was then selected in the FY2027 H-1B lottery, and his H-1B petition was subsequently approved through premium processing.",
    timeline: [
      {
        when: "Dec 2025",
        what: "Started planning for a self-employment structure to support both STEM OPT and a future H-1B.",
      },
      {
        when: "Jan 2026",
        what: "Company structure and EIN strategy established; STEM OPT extension filed and USCIS receipt obtained before the existing authorization expired.",
      },
      {
        when: "Feb 2026",
        what: "STEM OPT extension approved.",
      },
      {
        when: "Mar 2026",
        what: "Selected in the FY2027 H-1B lottery.",
      },
      {
        when: "Aug 2026",
        what: "H-1B petition filed through premium processing and approved.",
      },
    ],
    paragraphs: [
      "Client F came to us with only 40+ days left before her STEM OPT extension deadline. He didn't have an employer willing to sponsor her STEM OPT, but he also wanted to remain in the U.S. long term. That meant solving her immediate STEM OPT situation while simultaneously building a path toward the H-1B lottery.",
      "We helped his establish a company designed to support both STEM OPT and a future H-1B petition. Because the employer-employee relationship is particularly important when the company is also owned by the beneficiary, we worked with her to determine the appropriate company structure and EIN setup. We secured the USCIS receipt for his STEM OPT extension before his existing authorization expired, then entered his into the H-1B lottery in March.",
      "He was selected in the FY2027 H-1B lottery and subsequently filed his H-1B petition through premium processing. The petition was approved, giving him a successful transition from STEM OPT into H-1B through the company she had built.",
    ],
  },
  {
    num: "07",
    name: "Client G",
    goals: ["Active/Maintain OPT", "Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "University of Sydney · Data Science · FY2027",
    season: "FY2027",
    attemptShort: "Selected in FY2027 lottery",
    duration: "9 months",
    outcome: "Selected in H-1B lottery",
    summary: "Started with us to protect her OPT unemployment clock, later used her own company for STEM OPT, and then entered the FY2027 H-1B lottery through the same company — where she was selected on her first entry and is now waiting for approval.",
    chips: [
      "Self-employment entity",
      "OPT unemployment-clock protection",
      "STEM OPT self-employment",
      "FY2027 lottery",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "With her first OPT year ending June 30, 2026, she came to us in June 2025 mainly to protect her unemployment clock while continuing to look for a job. She hadn't used much of her unemployment allowance yet, but getting a company registered and operational would take time, and she still had no employer. She also needed a longer-term plan for STEM OPT and eventually the H-1B lottery.",
    plan: "We registered her company in July, but a missing SSN delayed the EIN application by about a month, with the EIN coming through on July 29. We completed her OPT employment reporting on August 11, by which point roughly a month of her unemployment clock had been used. When her first OPT year ended, she transitioned her STEM OPT employment to the company we'd built for her. In January 2026, with no traditional job offer materializing, she upgraded to our full H-1B Infinity Plan and entered the FY2027 lottery through her own company.",
    result: "She was selected in the FY2027 H-1B lottery on her first entry through her own company. She is currently waiting for her H-1B petition to be approved, while continuing to maintain her status through her self-employment on STEM OPT.",
    timeline: [
      {
        when: "Jun 2025",
        what: "Signed on for OPT unemployment-clock protection while continuing her job search.",
      },
      {
        when: "Jul–Aug 2025",
        what: "Company registration completed; EIN was delayed by a missing SSN and received July 29. OPT employment reporting was completed August 11.",
      },
      {
        when: "Jan 2026",
        what: "Upgraded to full H-1B service and entered the FY2027 lottery through her company.",
      },
      {
        when: "Mar 2026",
        what: "Selected in the FY2027 H-1B lottery on her first entry.",
      },
      {
        when: "Jul 2026",
        what: "Transitioned her STEM OPT employment to her own company.",
      },
      {
        when: "Current",
        what: "Waiting for H-1B petition approval while continuing STEM OPT through her company.",
      },
    ],
    paragraphs: [
      "Client G came to us in June 2025 with her first OPT year set to expire the following June. At the time, she was mainly looking to protect her unemployment clock while continuing her job search. She hadn't used much of her unemployment allowance yet, but getting a company registered and operational would take time, and she still didn't have an employer. We helped her establish the company and work through the OPT employment reporting process. A missing SSN delayed the EIN application by about a month, and by the time her employment report was filed in mid-August, roughly a month of unemployment time had been used.",
      "When her first OPT year ended, she transitioned her STEM OPT employment to the company we'd already built for her, giving her a continued employment structure while she pursued a longer-term immigration strategy. By January 2026, with no traditional job offer materializing, she upgraded to our full H-1B service and entered the FY2027 lottery through her own company.",
      "Later that month, she was selected in the H-1B lottery on her first entry. She is now waiting for her H-1B petition to be approved while continuing her STEM OPT through her own company.",
    ],
  },
  {
    num: "08",
    name: "Client H",
    goals: ["Transfer H-1B", "Start up a business"],
    meta: "Columbia University · Strategic Communication · FY2026",
    season: "FY2026",
    attemptShort: "No lottery (transfer)",
    duration: "5 months",
    outcome: "H-1B Transfer approved",
    summary: "Left a marketing and PR job to build her own e-commerce company with family resources and a business partner behind her — navigating a federal government shutdown along the way to an approved H-1B transfer.",
    chips: [
      "E-commerce entity",
      "H-1B Transfer",
      "Weathered a government shutdown",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
      "H-1B Transfer",
    ],
    problem: "She was working in marketing and PR, but wanted out — she had a business partner, family resources in e-commerce, and a real plan to build her own company. The challenge was doing it lawfully: transferring her existing H-1B to a company she was starting from scratch, while also keeping an eye toward a future green card.",
    plan: "We signed her on in mid-August and moved fast: company registration and an EIN within three weeks, a business bank account three weeks after that, then a real website and operating handbook while we lined up an attorney for the transfer filing. When a federal government shutdown hit in mid-October and put LCA processing at risk, we got ahead of it — USCIS's guidance allowed extra supporting evidence and delayed submission for shutdown-affected filings, and we coordinated directly with her attorney to keep the case moving instead of stalling.",
    result: "Despite the shutdown, every piece — job duties documentation, the company website and handbook, the state's annual report deadline, even an office lease — came together on schedule, and the attorney filed the H-1B Transfer petition on December 22. The approval came back on January 14, and by January 19 we were preparing her for onboarding and payroll at the company she'd built.",
    timeline: [
      {
        when: "Aug 2025",
        what: "Signed on; company registered with an EIN within three weeks.",
      },
      {
        when: "Sep–Oct 2025",
        what: "Bank account opened; website, handbook, and attorney search underway.",
      },
      {
        when: "Oct 2025",
        what: "Federal government shutdown threatened LCA processing — coordinated with her attorney on the workaround USCIS allowed.",
      },
      {
        when: "Nov 2025",
        what: "Job duties, website, and office lease finalized; state annual report handled.",
      },
      {
        when: "Dec 2025 – Jan 2026",
        what: "H-1B Transfer petition filed December 22; approved January 14.",
      },
    ],
    paragraphs: [
      "Client H had built a career in marketing and PR, but she was ready to leave it behind. She had a business partner, family resources in e-commerce, and a concrete plan — she just needed a lawful way to transfer her existing H-1B to the company she was about to start, with an eye eventually toward a green card too.",
      "We signed her on August 18 and moved through the fundamentals quickly: the company was registered with its EIN by September 5, the bank account was open by September 26, and by October 1 we were building out her website and business handbook while lining up an attorney for the transfer petition. She made this easier than most — she was responsive and easy to coordinate with at every step.",
      "The one real obstacle was outside anyone's control: a federal government shutdown hit in mid-October, threatening to delay LCA processing across the board. USCIS's guidance allowed filers to submit extra supporting evidence and delay submission instead of missing the window, and we walked her through exactly how to coordinate that with her attorney. Everything else stayed on schedule — job duties documentation by the end of October, the finished website and handbook in early November, the state's annual report deadline flagged in time, and an office lease arranged by late November. The attorney filed the H-1B Transfer petition on December 22, and the approval came back on January 14, 2026 — five months after she'd first signed on.",
    ],
  },
  {
    num: "09",
    name: "Client I",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "University of Maryland · Supply Chain Management · FY2026",
    season: "FY2026",
    attemptShort: "Selected in FY2026 lottery",
    duration: "3 months",
    outcome: "H-1B approved",
    summary: "A detail-focused supply chain professional who cared deeply about doing every step by the book, approved in a straightforward filing with no surprises.",
    chips: [
      "Self-employment entity",
      "Compliance-focused",
      "Clean approval",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "His academic and professional background is built entirely in supply chain — a bachelor's from Macau University of Science and Technology, a master's from the University of Maryland — and he came to us on STEM OPT wanting a self-employment path to H-1B that she could trust was fully compliant, down to the smallest detail.",
    plan: "His own concerns pointed the process: because he asked detailed, precise questions about every step, we made sure his company filing and H-1B petition were airtight before anything was submitted, filed on his behalf in late June.",
    result: "The approval notice came back on September 29 — the same day we began preparing his for employee onboarding and payroll. We met the next day to walk through the details of onboarding, payroll setup, and purchasing the required labor insurance.",
    timeline: [
      {
        when: "Jun 2025",
        what: "H-1B petition filed.",
      },
      {
        when: "Sep 2025",
        what: "Approval notice received; onboarding and payroll preparation began the same day.",
      },
      {
        when: "Sep 2025",
        what: "Follow-up meeting on payroll details and labor insurance.",
      },
    ],
    paragraphs: [
      "Client I's background is built entirely around supply chain: a bachelor's degree from Macau University of Science and Technology and a master's from the University of Maryland, both in the field. he came to us on STEM OPT for a self-employment path to H-1B, and she cared, more than most clients, about making sure every step of the process was done correctly and compliantly.",
      "We filed her petition in late June, and the approval came back on September 29 — the same day we started preparing his for employee onboarding and payroll. A follow-up meeting the next day walked through the specifics of payroll setup and the labor insurance her new status required.",
    ],
  },
  {
    num: "10",
    name: "Client J",
    goals: ["Active/Maintain OPT", "Get initial H-1B"],
    meta: "Temple University · Violin Performance · FY2026",
    season: "FY2026",
    attemptShort: "Selected in FY2026 lottery",
    duration: "4 months",
    outcome: "H-1B approved (after RFE)",
    summary: "A classically trained violinist whose entire career lived in performance and teaching, not paperwork, needed help turning lesson plans and studio photos into evidence USCIS would accept for her OPT status.",
    chips: [
      "Self-employment entity",
      "RFE response",
      "OPT status evidence",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
    ],
    problem: "She built her training entirely around the violin — a bachelor's in performance from Soochow University, a master's from Temple — and her work since graduating has been teaching and performing. When her H-1B petition, filed in June, came back with an RFE in September, the ask was one USCIS could only answer with paperwork she'd never had to think about before: proof she'd properly maintained F-1 status during her OPT year, beyond what her I-20 already showed.",
    plan: "We walked her through exactly what would count as evidence — an offer letter and employment verification letter to confirm her work was real, lesson plans and photos from her teaching sessions to document what she was actually doing day to day, and a SEVP portal screenshot to tie it back to her official record. Given how many moving pieces she was juggling and how easily details slipped past her, we kept the requests specific and sequenced one at a time rather than handing her one long list.",
    result: "The full RFE response went to the attorney's office on October 8, and the case was approved just over two weeks later, on October 23. She shared the news with us on October 27, and we moved straight into preparing her for payroll.",
    timeline: [
      {
        when: "Jun 2025",
        what: "H-1B petition filed.",
      },
      {
        when: "Sep 2025",
        what: "RFE issued over F-1/OPT status maintenance; formal reasoning received the same day materials work began.",
      },
      {
        when: "Sep–Oct 2025",
        what: "About two and a half weeks assembling offer letter, employment verification, lesson plans, teaching photos, and SEVP records.",
      },
      {
        when: "Oct 2025",
        what: "RFE response mailed; approved roughly two weeks later.",
      },
    ],
    paragraphs: [
      "Client J's entire academic and professional life has run through one instrument: a Bachelor of Music in violin from Soochow University, a Master of Music in violin performance from Temple University, and a career since graduation built on teaching lessons and performing. None of that prepared her for the kind of documentation USCIS wanted when her H-1B petition, filed in June, drew a Request for Evidence in September.",
      "The RFE centered on a narrow but consequential question: USCIS said her I-20 alone wasn't enough to establish that she'd properly maintained F-1 status during her OPT year, and asked for additional proof. Because the issue was really about her past status rather than her current job, our role was mostly to translate \"maintain your status\" into a concrete checklist she could act on — an offer letter, an employment verification letter, lesson plans from her teaching work, photos documenting her classes, and a screenshot of her SEVP portal record.",
      "Client J is, by her own account, an anxious client who juggles a lot of small, scattered questions at once — cooperative, but prone to losing track of details. We kept the RFE response moving by working through the checklist piece by piece over about two and a half weeks. The attorney mailed the completed response on October 8, and the approval came back on October 23 — good news she shared with us within days, before we moved on to getting her ready for payroll.",
    ],
  },
  {
    num: "11",
    name: "Client K",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "California Lutheran University · Information Technology · FY2026",
    season: "FY2026",
    attemptShort: "Selected in FY2026 lottery",
    duration: "2.5 months",
    outcome: "H-1B approved (after RFE)",
    summary: "Ten years of CS experience and three degrees weren't enough to stop USCIS from questioning his CPT history and his employer's need for the role — a detailed RFE response turned it around in under two months.",
    chips: [
      "Self-employment entity",
      "RFE response",
      "Premium processing",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "Day 1 CPT",
      "H-1B",
    ],
    problem: "With a decade of CS experience and three academic credentials behind him, he filed his H-1B on premium processing in early July — and two weeks later received a Request for Evidence questioning two things at once: whether his multiple rounds of Day-1 CPT meant he'd failed to maintain lawful F-1 status, and whether the position itself was a bona fide job with a genuine business need behind it.",
    plan: "We built the RFE response in two parallel tracks. For the status question, we assembled his course registration records, transcripts, and a DSO letter confirming his CPT authorization and enrollment each term. For the bona fide position question, we worked with him to gather the offer letter, business contracts, workplace documentation, and hiring records that proved the role was real. After he uploaded USCIS's notice and the attorney's to-do list, we ran a scoping call to divide the material list between what he needed to supply and what we'd prepare, then began drafting on August 7.",
    result: "After three rounds of internal review and revision, the package went to the attorney for final review in late August and was mailed to USCIS on September 16. The approval came back on September 23 — and we immediately moved into payroll setup.",
    timeline: [
      {
        when: "Jul 2025",
        what: "Filed on premium processing; RFE issued two weeks later citing CPT status maintenance and bona fide position.",
      },
      {
        when: "Aug 2025",
        what: "Three rounds of material review and revision, working from a joint task list with the client.",
      },
      {
        when: "Late Aug 2025",
        what: "Final package reviewed by the attorney.",
      },
      {
        when: "Sep 2025",
        what: "RFE response mailed; approval received about a week later.",
      },
    ],
    paragraphs: [
      "Client K came to the H-1B process with an unusually strong profile: ten years of hands-on CS work and three separate academic credentials, including two U.S. master's degrees. He filed on premium processing on July 7 — but on July 22, USCIS issued a Request for Evidence, and by July 28 we had the specifics: two distinct concerns, bundled into one RFE.",
      "The first was a status question. Because he had gone through several rounds of Day-1 CPT, USCIS wanted proof he'd maintained lawful F-1 status throughout — course registration records, transcripts, and a letter from his school's DSO confirming his CPT was properly authorized each term. The second was a bona fide position question: USCIS wasn't convinced the employer had a genuine, ongoing need for the role, and asked for the offer letter, business contracts, workplace evidence, and hiring documentation to prove it.",
      "We started on July 29, the day after he shared the full RFE notice and his attorney's to-do list. A scoping call the next day split the material list between what he'd supply and what we'd draft, and by August 7 we were building the response in earnest — three rounds of review calls checked everything from document formatting to whether the company's described business structure matched a real operating business, and whether his own materials as an employee made the case for his professional background and the role's staying power.",
      "The finished package went to the attorney for a final check in late August, was mailed to USCIS on September 16, and came back approved on September 23 — at which point we moved straight into helping him prepare for payroll.",
    ],
  },
  {
    num: "12",
    name: "Client L",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B"],
    meta: "U.S. master's · Computer Science · FY2026",
    season: "FY2026",
    attemptShort: "Selected in FY2026 lottery",
    duration: "3 months",
    outcome: "H-1B approved",
    summary: "A software engineer stuck renewing short-term status through recruiters who couldn't sponsor H-1B, he built his own company to file through — and had his approval within weeks.",
    chips: [
      "Tech consulting entity",
      "STEM OPT bridge",
      "Fast approval",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
    ],
    problem: "Working as a software engineer at an AI startup, he kept his job search running through recruiters, but every offer he found could only extend his short-term status — not sponsor an H-1B. It was clear that path had no long-term future.",
    plan: "We helped him register his own technology company to serve as his H-1B petitioner, keeping him on STEM OPT (valid to February 2027) while the petition moved through USCIS.",
    result: "USCIS confirmed receipt of his H-1B materials in mid-June, and the approval notice arrived less than three weeks later, in early July. By mid-September we were guiding him through onboarding and payroll for his own company.",
    timeline: [
      {
        when: "Jun 2025",
        what: "H-1B petition receipted by USCIS.",
      },
      {
        when: "Jul 2025",
        what: "Approval notice received.",
      },
      {
        when: "Sep 2025",
        what: "Employee onboarding and payroll set up.",
      },
    ],
    paragraphs: [
      "Client L graduated with a Computer Science master's degree after an Informatics bachelor's in China, and went to work as a software engineer at an AI startup. He'd tried working with recruiters to find his next role, but kept running into the same wall: every offer could only keep him on short-term status, not get him sponsored for H-1B. With STEM OPT set to run until February 2027, he needed a path that didn't depend on someone else's willingness to sponsor.",
      "We recommended he register his own technology consulting company and file his H-1B petition through it, giving him a sponsor he controlled. USCIS confirmed receipt of the materials in mid-June, and the approval came back in early July — one of the faster turnarounds we've seen. By September, we were helping him set up employee onboarding and payroll for the company he'd built.",
    ],
  },
  {
    num: "13",
    name: "Client M",
    goals: ["Transfer H-1B", "Start up a business"],
    meta: "U.S. master's · Business Analytics · FY2026",
    season: "FY2026",
    attemptShort: "No lottery (transfer)",
    duration: "1 month",
    outcome: "H-1B Transfer approved",
    summary: "After her H-1B was terminated with only 40+ days left in her grace period, she chose to pursue the business she had already started — with VC investment, partners, signed contracts, and paying clients — and transferred her H-1B to her own company from abroad.",
    chips: [
      "H-1B grace period",
      "Consulting entity",
      "Active real business",
      "H-1B Transfer",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
      "H-1B Transfer",
    ],
    problem: "Her H-1B employment was terminated, leaving her with only 40+ days in her grace period. The timeline was extremely tight, but she genuinely wanted to build her own company and already had a strong foundation — including VC investment, business partners, signed contracts, and paying clients. The challenge was finding a lawful way to transfer her H-1B to her own company without running out of time in the U.S.",
    plan: "Given the limited time remaining in her grace period, we recommended that she return to her home country rather than continue using the remaining grace period in the U.S. We then structured the case around an H-1B transfer through her own company using consular processing abroad. We guided her in documenting the company's business activity, VC investment, partnerships, contracts, clients, and public-facing materials, and prepared her for the consular interview.",
    result: "Her H-1B transfer petition was successfully approved, and she passed her consular interview on the first try. She arrived back in the U.S. on July 24 and transitioned into her own business. We also followed up with onboarding, payroll, labor insurance, and a CPA referral to help keep the company compliant as she continued operating.",
    timeline: [
      {
        when: "Jun 2025",
        what: "H-1B employment was terminated, leaving her with 40+ days remaining in her grace period. We assessed the timeline and recommended consular processing from abroad.",
      },
      {
        when: "Jun 2025",
        what: "H-1B Transfer petition mailed June 23 through her own company.",
      },
      {
        when: "Jul 2025",
        what: "Consular interview preparation and coaching completed; H-1B transfer approved July 8 and interview passed on the first try.",
      },
      {
        when: "Jul 2025",
        what: "Returned to the U.S. on July 24; onboarding, payroll, labor insurance, and CPA referral followed.",
      },
    ],
    paragraphs: [
      "Client M came to us after her H-1B employment was terminated, with only 40+ days left in her grace period. The timeline was extremely tight. At the same time, she wasn't simply looking for another job — she genuinely wanted to build her own company, and she already had the foundation to do it: VC investment, business partners, signed contracts, paying clients, and real business activity. The challenge was finding a lawful way to move her H-1B to the company she had built without letting the grace period run out.",
      "Because of the limited time available, we recommended that she return to her home country instead of continuing to use her remaining grace period in the U.S. We then pursued the H-1B transfer through consular processing abroad. She was highly hands-on throughout the process, and we helped her organize the evidence behind the business — including her VC connection, partnerships, contracts, client activity, payments, website, and other company materials — to demonstrate that this was a real operating business rather than a company created only for immigration purposes.",
      "We mailed her H-1B transfer petition on June 23 and prepared her for the consular interview. The petition was approved on July 8, and she passed the interview on her first try. She arrived back in the U.S. on July 24 and transitioned into running her own business. We continued supporting the post-approval setup with onboarding, payroll, labor insurance guidance, and a CPA referral so she could move forward with the company's operations.",
    ],
  },
  {
    num: "14",
    name: "Client N",
    goals: ["Active/Maintain OPT", "Get initial H-1B"],
    meta: "U.S. master's · Environmental Science · FY2026",
    season: "FY2026",
    attemptShort: "Selected in FY2026 lottery",
    duration: "4 months",
    outcome: "H-1B approved",
    summary: "A consular-processing case that started with no employer and an approaching OPT unemployment deadline — and required solving his employment gap while getting him ready for the H-1B lottery, followed by consular processing and a last-minute DS-160 correction.",
    chips: [
      "Self-employment entity",
      "OPT unemployment",
      "Consular processing",
      "DS-160 correction",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
    ],
    problem: "He graduated in December 2024 and had entered his OPT period without an employer, putting him at risk of exceeding the allowed unemployment days. When he came to us at the end of January, we needed to solve his OPT employment situation quickly while also preparing him to participate in the March H-1B lottery — all within a very short window.",
    plan: " We completed the company registration within seven days and structured his employment through the new entity, addressing his OPT unemployment situation while preparing his H-1B case for the March lottery. After he was selected, he chose consular processing and returned to China in June. His H-1B was approved in July, but while preparing for the visa interview, we discovered that the company information on his DS-160 was incorrect. We helped him correct the information at the time of the consular interview and provided guidance on how to explain the discrepancy.",
    result: "His H-1B was successfully approved, and he completed the consular process and received his visa. Then, on September 19, USCIS announced a new $100,000 fee for certain H-1B petitions filed from abroad. We confirmed with him the following day that the new fee did not apply to his already-filed petition. He re-entered the U.S. on October 6.",
    timeline: [
      {
        when: "Jan 2025",
        what: "Client came to us without an employer after graduating in December 2024, with his OPT unemployment period already underway.",
      },
      {
        when: "Jan–Feb 2025",
        what: "We completed the company registration within seven days and addressed his OPT employment situation while preparing for the H-1B lottery.",
      },
      {
        when: "Mar 2025",
        what: "H-1B lottery selection received; he chose consular processing for his H-1B.",
      },
      {
        when: "Jun 2025",
        what: "Returned to China to complete the consular processing.",
      },
      {
        when: "Jul 2025",
        what: "H-1B approved. Before the consular interview, we discovered incorrect company information on his DS-160 and helped him correct it during the interview process.",
      },
      {
        when: "Sep–Oct 2025",
        what: "A new $100K fee for certain H-1B petitions filed from abroad was announced; we confirmed that it did not apply to his already-filed case. He re-entered the U.S. on October 6.",
      },
    ],
    paragraphs: [
      "Client N graduated in December 2024 and entered his OPT period without an employer. By the time he came to us at the end of January, his unemployment clock was already running, and he also needed to be ready for the March H-1B lottery. That meant we had to solve two problems at once: address his immediate OPT employment situation and get his case structured in time for the lottery.",
      "We moved quickly. Within seven days, we completed the company registration and structured his employment through the new entity, allowing us to address his OPT employment situation while preparing his H-1B case. He was selected in the March lottery and chose consular processing. He returned to China in June, and his H-1B was approved in July.",
      "The next challenge came during the visa interview preparation. We discovered that the company information on his DS-160 was incorrect. We helped him correct the information as part of the consular interview process and guided him on how to explain the discrepancy. The interview was completed successfully and his visa was issued.",
      "Then came another unexpected development. On September 19, USCIS announced a new $100,000 fee for certain H-1B petitions filed from abroad. We confirmed with him the following day that the new fee did not apply to his already-filed petition. He ultimately re-entered the U.S. on October 6, completing the process successfully.",
    ],
  },
  {
    num: "15",
    name: "Client O",
    goals: ["Active/Maintain OPT", "Get initial H-1B", "Start up a business"],
    meta: "Northeastern · Global Studies & International Relations · FY2024",
    season: "FY2024",
    attemptShort: "Won 1st try",
    duration: "9 months",
    outcome: "H-1B approved",
    summary: "One year of OPT, won the lottery on the first attempt, and completed her status transition entirely inside the U.S.",
    chips: [
      "Cross-border trade entity",
      "Relative as legal rep",
      "In-country transition",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
    ],
    problem: "Unable to find a proper job, she had been holding OPT through a fee-for-sponsorship arrangement while supporting herself reselling. Her OPT year was ending, and the paid lottery-entry services she found raised real legality and fraud concerns.",
    plan: "We structured a new cross-border trade and cultural consulting company matched to her skills, with her San Francisco cousin serving as the company's legal representative — a lawful path to status rather than a purchased one. Registration, bank account, and compliance were completed that same month, plus operational strategy guidance.",
    result: "Selected in March 2023, filed in June, approved in August — status stabilized without leaving the U.S. We later connected her with an accountant for the company's tax matters and ongoing financial compliance while she searches for a full-time role.",
    timeline: [
      {
        when: "Dec 2022",
        what: "Entity structured with a relative as legal rep; registration, bank account, compliance completed.",
      },
      {
        when: "Mar 2023",
        what: "Entered the lottery and was selected on her first attempt.",
      },
      {
        when: "Jun–Aug 2023",
        what: "Petition filed in June, approved in August — status stabilized in-country.",
      },
      {
        when: "Ongoing",
        what: "Accountant engaged for company tax matters and financial compliance.",
      },
    ],
    paragraphs: [
      "Client O graduated from Northeastern in May 2022 with a degree in International Relations. After graduating, unable to find a proper job, she relied on a fee-for-sponsorship arrangement to maintain her OPT status in the U.S. from May to December 2022, supporting herself through personal shopping/reselling work.",
      "After several months, Client O still hadn't found a company willing to sponsor her status. With her one year of OPT nearing its end, she began considering what to do next. She looked into some paid H-1B lottery-entry services, but had doubts about their legality and safety and worried about the risk of being scammed.",
      "In December 2022, Client O learned about our program through a friend's referral. After a detailed assessment, we developed a solution for her: we recommended she register a new cross-border trade and cultural consulting company, with a friend or relative serving as the company's legal representative — a structure that not only matched her professional skills but also gave her a lawful path to status. Client O quickly reached out to her cousin living in San Francisco, who agreed to serve as the new company's legal representative.",
      "That same month, we helped Client O complete company registration, bank account setup, and other procedures to ensure the company was fully compliant. In the early stages of the company's formation, we also provided her with operational strategy guidance to help her launch the business smoothly.",
      "In March 2023, Client O entered the H-1B lottery and was fortunate enough to be selected. In June 2023, she filed her H-1B petition, which was approved in August, stabilizing her status. This past March, we continued supporting Client O by helping her connect with a professional accountant to manage the company's tax matters and ensure ongoing financial compliance. Client O currently continues to support herself through personal shopping/reselling work while actively searching for a new full-time job.",
    ],
  },
  {
    num: "16",
    name: "Client P",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B", "Transfer H-1B", "Start up a business"],
    meta: "UIUC · Computer Science · FY2024 & FY2025",
    season: "FY2024 · FY2025",
    attemptShort: "Won 2nd try",
    duration: "2 lottery cycles",
    outcome: "H-1B approved",
    summary: "Laid off during his OPT Extension with the unemployment clock running, he won the H-1B lottery on his second attempt.",
    chips: [
      "Tech consulting entity",
      "E-Verify registration",
      "Cap-Gap + transfer",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "H-1B",
      "H-1B Transfer",
    ],
    problem: "A business restructuring cut his software engineering role mid-extension. The one offer he secured was rescinded because the company would have had to sponsor him, and his 150 days of unemployment time were running out.",
    plan: "We recommended he use his CS background to found a technology consulting company serving small and medium businesses — maintaining STEM OPT status and creating an H-1B petitioner at the same time. We handled formation, E-Verify registration, and day-to-day operations so he could keep interviewing.",
    result: "Not selected in 2023, but he kept the company running and was selected in 2024 with a successful adjudication. Freed from sponsor-only job searching, he had already joined a new employer; he now works under Cap-Gap while an H-1B transfer to that employer is underway.",
    timeline: [
      {
        when: "During OPT ext.",
        what: "Laid off in a restructuring; an offer rescinded over sponsorship.",
      },
      {
        when: "Formation",
        what: "Technology consulting company formed; E-Verify and operations handled for him.",
      },
      {
        when: "2023",
        what: "Not selected — company kept running and compliant for the next cycle.",
      },
      {
        when: "2024",
        what: "Selected and approved; Cap-Gap employment while an H-1B transfer proceeds.",
      },
    ],
    paragraphs: [
      "Client P graduated from UIUC with a degree in Computer Science in 2021, and within two months of graduating found a job as a Software Engineer at a tech company. He completed his first year of OPT there and successfully applied for the OPT Extension, but during his extension period the company underwent a business restructuring and Client P was unfortunately laid off.",
      "After being laid off, Client P believed he still had 150 days of unemployment time to find a new job and was confident he could find one, so he didn't initially worry much about his status. However, the job market was in the middle of mass layoffs, competition was fierce, and open positions were scarce. His job search hit obstacle after obstacle — interview opportunities were few and far between, and the one offer he finally secured was rescinded because the company would have needed to sponsor his H-1B. With his unemployment clock running out, Client P grew increasingly anxious and reached out to us through our STEM OPT Status Protection Plan.",
      "We conducted a detailed assessment of his situation and proposed a solution tailored to his advantage. We recommended he leverage his computer science background and work experience to found a technology consulting company focused on providing software development and technical support services to small and medium-sized businesses. Through this company, Client P could continue maintaining his STEM OPT status while also applying for an H-1B visa — accomplishing two goals at once.",
      "In the early stages, since Client P's primary focus remained on preparing for interviews and finding a new job, we helped establish the company, prepare E-Verify registration and other materials, and assisted with day-to-day operations. Because Client P wasn't limiting himself to sponsor-only job opportunities, he quickly landed an offer and joined a new company.",
      "In the 2023 H-1B lottery, Client P unfortunately wasn't selected, but he didn't give up and kept the company running. In 2024, Client P used the company he had established to win the lottery and successfully passed adjudication. Client P used Cap-Gap extension status to remain in the U.S. and keep working while waiting for his H-1B to take effect. During this time, Client P has also been negotiating an H-1B transfer with the manager at his current company, and the transfer process is now underway.",
    ],
  },
  {
    num: "17",
    name: "Client Q",
    goals: ["Active/Maintain STEM-OPT", "Get initial H-1B", "Start up a business"],
    meta: "UT Dallas · Data Science · FY2025",
    season: "FY2025",
    attemptShort: "Won 4th try",
    duration: "11 months",
    outcome: "H-1B approved",
    summary: "Laid off during Day 1 CPT, then won the H-1B lottery on her fourth attempt through her own data consulting firm.",
    chips: [
      "Data consulting entity",
      "Cap Gap bridge",
      "Laid off mid-program",
    ],
    pathway: [
      "F1",
      "OPT",
      "STEM OPT",
      "Day 1 CPT",
      "H-1B",
    ],
    problem: "Three years, three lottery attempts, no selection — and then the economic downturn wiped out her entire team while she was holding status through a Day 1 CPT program. A tough market plus student status made the job search nearly impossible.",
    plan: "Our immigration planning experts recommended founding a data consulting firm matched to her professional background. In November 2023 we completed company registration, the tax ID application, and the business bank account, then focused on operations planning, business development guidance, and preparing petition materials while she finished coursework.",
    result: "Selected in March 2024 on her fourth attempt. We designed a Data Scientist role with her attorney, filed in May, and she bridged lawfully through H-1B Cap Gap — no need to continue Day 1 CPT — transitioning to H-1B status in October 2024.",
    timeline: [
      {
        when: "Sep 2023",
        what: "Enrolled in Day 1 CPT to hold status while waiting for another lottery chance.",
      },
      {
        when: "Nov 2023",
        what: "Data consulting firm registered: entity, tax ID, business bank account.",
      },
      {
        when: "Mar 2024",
        what: "Selected on her fourth lottery attempt.",
      },
      {
        when: "May–Oct 2024",
        what: "Data Scientist petition filed, Cap Gap bridge, H-1B status in October.",
      },
    ],
    paragraphs: [
      "Client Q graduated from UT Dallas in 2020 with a degree in Data Science. After graduating, she worked as a junior data analyst at a tech company under STEM OPT status, and the company was willing to sponsor her H-1B. However, despite three years and three lottery attempts — and no shortage of hot pot dinners along the way — she still hadn't landed H-1B status. Still, Client Q was firmly committed to building her future in the U.S.",
      "So, determined to stay in the U.S., Client Q enrolled in a Day 1 CPT program in September 2023 while waiting for her next lottery chance. Unfortunately, her company was hit by the economic downturn and carried out major layoffs, eliminating her entire team. She was nearly overwhelmed, facing enormous job-search pressure — the tough job market combined with her current Day 1 CPT student status both stood as obstacles to finding work. After learning about our program through a help post she'd made online, and following several rounds of discussion, she ultimately chose the path of starting her own company to enter the H-1B lottery. Based on her professional background, our immigration planning experts recommended she found a data consulting firm, and in November 2023 we helped her complete company registration, tax ID application, and business bank account setup.",
      "After the company was set up, since she still needed to complete her Day 1 CPT coursework to maintain status, from November 2023 onward we primarily helped her plan company operations, provided business development guidance, and prepared materials for her future application.",
      "In March 2024, Client Q finally won the H-1B lottery on her fourth attempt. She immediately began preparing for her H-1B status transition. Working with an attorney, we designed a role matching her background: Data Scientist. After successfully filing her petition in May, Client Q maintained lawful status in the U.S. through H-1B Cap Gap, avoiding the need to continue on Day 1 CPT, and ultimately transitioned to H-1B status in October 2024.",
    ],
  },
  {
    num: "18",
    name: "Client R",
    goals: ["Get initial H-1B", "Transfer H-1B", "Start up a business"],
    meta: "UC Irvine · Business Administration · FY2025",
    season: "FY2025",
    attemptShort: "Won 1st try",
    duration: "10 months",
    outcome: "H-1B approved",
    summary: "Returned home during OPT, won the lottery on the first attempt, and re-entered the U.S. after a visa interview abroad.",
    chips: [
      "Management consulting entity",
      "Filed from abroad",
      "Consular processing",
    ],
    pathway: [
      "F1",
      "OPT",
      "H-1B",
      "H-1B Transfer",
    ],
    problem: "Her Los Angeles advertising internship gave her real industry experience but the company would not sponsor an H-1B. With three months left before the lottery opened, repeated conversations with her boss and HR had gone nowhere.",
    plan: "We built a customized entrepreneurship plan around her business background: register a management consulting company and petition through it. She returned home in December 2023 to cut status and financial pressure, and we completed registration, the bank account, the company website, and marketing materials while she was abroad.",
    result: "Selected in March 2024. Because materials were prepared in advance, her petition was mailed by early May and approved by USCIS in mid-August. She booked a consular interview in September and re-entered the U.S. in October — now transferring her H-1B to a full-time employer.",
    timeline: [
      {
        when: "Dec 2023",
        what: "Left the internship, returned home; company registered and bank account opened remotely.",
      },
      {
        when: "Mar 2024",
        what: "Selected in the H-1B lottery on her first entry.",
      },
      {
        when: "May 2024",
        what: "Complete petition package mailed with attorney support.",
      },
      {
        when: "Aug–Oct 2024",
        what: "Approved mid-August, consular interview in September, re-entered the U.S. in October.",
      },
    ],
    paragraphs: [
      "Client R graduated from UC Irvine in May 2023 with a major in Business Administration. After graduating, she found an internship at a small advertising company in Los Angeles as a Digital Marketing Coordinator, primarily responsible for market research and social media promotion. The role gave her valuable industry experience, but the company said it couldn't sponsor her H-1B, leaving her stuck on her path to stay in the U.S.",
      "With just three months left before the lottery opened, Client R had repeatedly discussed the situation with her boss and the company's HR without any progress, leaving her feeling lost. She confided in a friend, who suggested the possibility of starting her own company to apply for H-1B — an option worth exploring. Client R then reached out to us, and after a detailed consultation, decided to pursue her H-1B application through this program.",
      "Based on Client R's academic background and internship experience, we designed a customized entrepreneurship plan for her, recommending she register a management consulting company and apply for H-1B through it. In December 2023, Client R left her internship and chose to return to her home country to reduce the status and financial pressure of remaining in the U.S. Even while she was abroad, we efficiently helped her complete company registration, bank account setup, and other necessary steps to keep the company running smoothly.",
      "In March 2024, Client R won the H-1B lottery. Thanks to the company website and marketing materials we had helped prepare in advance, along with the full H-1B processing timeline we had provided her, she asked us to help connect her with an attorney as soon as she learned of her win. All required H-1B application materials were ready and mailed by early May, and her petition was approved by USCIS in mid-August. Once she learned her H-1B had been approved, Client R quickly booked a visa interview at the embassy in September and successfully re-entered the U.S. in October. Client R plans to find her ideal full-time job within the next three months and transfer her H-1B to the new employer!",
    ],
  },
];

export function matchesGoal(c, goal) {
  if (!goal) return true;
  return c.goals.includes(goal);
}

export function filterCases(goal) {
  const out = CASES.filter((c) => matchesGoal(c, goal));
  return out.length ? out : CASES;
}
