export default {
  content: [
    {
      type: `paragraph`,
      html: `<strong>"H-1B最低工资要求是多少？"</strong>是H-1B申请过程中最常被问到的问题之一。实际上，美国移民法规并没有设定一个固定的"最低工资"数字——大家通常所说的<strong>"H-1B最低工资要求"</strong>，在官方层面对应的其实是<strong>市场工资（Prevailing Wage）</strong>这一概念，也就是USCIS要求申请人薪资必须达到的标准。<strong>对于在美国开展H-1B自雇的申请人而言，市场工资不仅仅是一项硬性合规要求——它还是USCIS用来判断雇佣关系是否真实的关键因素。</strong>与传统雇佣不同，自雇申请人既是雇主又是雇员，必须在公司真实运营的前提下，向自己支付不低于劳工部（DOL）所设定工资标准的薪资。如果工资设定过低，或缺乏支付凭证，很容易引发USCIS对岗位真实性以及公司是否真的有能力支付该薪资的质疑。本文将说明<strong>什么是市场工资、如何在自雇架构下查询自己的工资标准，以及设定合理薪资的策略</strong>，帮助您在递交申请前打好扎实的合规基础，降低收到补件通知或被拒的风险。`,
    },
    { type: `paragraph`, html: `<strong>要点速览：</strong>` },
    {
      type: `list`,
      ordered: true,
      items: [
        `<strong>什么是市场工资：</strong>由劳工部（DOL）根据岗位类型、所在地点与技能水平设定的"行业最低工资标准"。递交H-1B申请时，您必须在LCA（劳工条件申请）中承诺支付不低于该工资的薪资，否则申请无法继续推进。`,
        `<strong>为什么H-1B自雇申请人需要特别关注市场工资：</strong>因为自雇申请人既是雇主又是雇员，工资设定是否合理、是否真实支付，直接影响LCA能否获批，也直接影响USCIS对雇佣关系真实性的判断。`,
        `<strong>如何准确查询市场工资？</strong>大多数人会使用劳工部的官方数据库（OES工资数据）——详见下文。`,
        `<strong>薪资结构应如何设定才合规？</strong>关键在于工资等级要与岗位描述及经验要求相匹配，同时薪酬发放流程要留有完整记录，每一笔支付都可查证——这正是向USCIS证明您是真实雇员的关键。`,
        `<strong>哪些合规风险容易被忽视？</strong>包括低估岗位级别、岗位与工资不匹配、只分红不发工资等——这些错误已经在USCIS审理中多次导致拒签或补件通知；详见下文。`,
      ],
    },
    { type: `heading`, level: 2, html: `什么是市场工资（Prevailing Wage）？` },
    {
      type: `paragraph`,
      html: `<strong><a href="https://www.dol.gov/agencies/eta/foreign-labor/wages" rel="noopener noreferrer" target="_blank">市场工资</a></strong><strong>是美国劳工部（DOL）针对特定地点、特定技能水平的某一特定岗位所设定的最低工资标准。</strong>它是递交H-1B的LCA（劳工条件申请）时的必填项。其主要目的是：`,
    },
    {
      type: `list`,
      ordered: false,
      items: [
        `防止雇主以过低薪资雇佣外籍员工，从而扰乱当地劳动力市场`,
        `保护外籍员工的合法权益与就业利益`,
      ],
    },
    {
      type: `paragraph`,
      html: `根据<a href="https://uscode.house.gov/view.xhtml?req=(title:8%20section:1182%20edition:prelim)&num=0&edition=prelim" rel="noopener noreferrer" target="_blank">《移民与国籍法》</a>，雇主在为员工递交LCA之前，必须确保该岗位所提供的工资，不低于该地区的市场工资，也不低于公司为类似岗位其他员工所支付的实际工资（Actual Wage）。`,
    },
    { type: `heading`, level: 2, html: `为什么市场工资对H-1B自雇如此重要？` },
    {
      type: `paragraph`,
      html: `在传统H-1B雇佣关系中，雇主在递交LCA（劳工条件申请）时，必须参照两项工资标准：`,
    },
    {
      type: `list`,
      ordered: false,
      items: [
        `<strong>实际工资（Actual Wage）</strong>：公司为具有相似资历的类似岗位员工所支付的真实工资。`,
        `<strong>市场工资（Prevailing Wage）</strong>：劳工部（DOL）针对该岗位、地点与技能水平所设定的行业标准工资。`,
      ],
    },
    {
      type: `paragraph`,
      html: `<a href="https://www.law.cornell.edu/cfr/text/20/655.731#:~:text=The%20first%20LCA%20requirement%20shall,specified%20in%20paragraph%20(a)(" rel="noopener noreferrer" target="_blank">法律要求</a>雇主支付这两者中<strong>较高的一个</strong>——这一数字被称为<strong>"法定要求工资"（Required Wage）</strong>，是H-1B申请的关键合规门槛。在自雇架构下，适用的工资标准与传统H-1B雇佣完全相同。区别在于，申请人既是公司的创始人或高管，同时又是公司的受雇员工。正因为这两种身份集于一身，USCIS会更加严格地审查岗位的真实性与工资的合理性——这意味着工资的设定必须做到：<strong>真实反映该岗位的市场价值</strong>，避免被质疑为"人为捏造的岗位"，同时又要<strong>是公司真正负担得起的</strong>，并与公司的实际运营情况相符。这正是为什么确定合理的市场工资，是H-1B自雇申请中较为棘手的环节之一。因此，对于<strong>H-1B自雇申请人</strong>而言，<strong>市场工资绝不仅仅是一个参考数字</strong>。即便您本人既是公司的创始人或高管，又是受雇员工，公司仍然必须：`,
    },
    {
      type: `list`,
      ordered: false,
      items: [
        `在LCA（劳工条件申请）中明确承诺<strong>支付不低于市场工资的薪资</strong>；`,
        `以W-2工资的形式<strong>真实支付</strong>该薪资；`,
        `保留<strong>可审计、可追溯的支付记录</strong>——例如公司的薪酬系统、银行流水、W-2表格与报税记录。`,
      ],
    },
    {
      type: `paragraph`,
      html: `这不仅是对外籍员工权益的保护，也是USCIS后续用来确认岗位真实存在、公司具备支付能力的核心证据。<a href="/contact">不确定您的公司是否达到抽签标准？联系我们获取免费咨询。</a>`,
    },
    { type: `heading`, level: 2, html: `如何查询自己的市场工资？` },
    {
      type: `paragraph`,
      html: `在H-1B申请流程中，<strong>市场工资通常由您的律师负责确定</strong>——律师会根据您的工作职责、工作地点以及岗位复杂程度，选择合适的工资等级，并将其填入LCA（劳工条件申请）。<strong>但这并不意味着申请人可以完全不管这件事。</strong>了解市场工资的运作原理、确定方式，以及如何自行查询，能帮助您<strong>从一开始就合理设定岗位</strong>，并在撰写商业计划书、准备岗位描述，或回应补件通知时，提出更有力、更具体的论证——从源头上降低被拒的风险。<strong>1. 在哪里查询：</strong>劳工部的<strong><a href="https://flag.dol.gov/wage-data/wage-search" rel="noopener noreferrer" target="_blank">外国劳工认证数据中心</a></strong>提供了一个工资查询工具，可以按岗位与地点查询市场工资。<strong>2. 查询流程：</strong>`,
    },
    {
      type: `paragraph`,
      html: `<strong>第一步：</strong>前往<a href="https://www.flcdatacenter.com" rel="noopener noreferrer" target="_blank">外国劳工认证数据中心</a>的"OFLC工资查询"页面。`,
    },
    { type: `paragraph`, html: `<strong>第二步：</strong>选择最新可用年份。` },
    {
      type: `paragraph`,
      html: `<strong>第三步：</strong>输入您的职业代码与职位名称——如果不确定，可以点击"不知道"进行搜索，再根据显示结果填写。`,
    },
    {
      type: `paragraph`,
      html: `<strong>第四步：</strong>无论是在岗工作还是远程办公，都请选择您<strong>实际工作地点</strong>所在的州——例如，如果公司注册在得克萨斯州，但您在纽约远程办公，应选择纽约。`,
    },
    {
      type: `paragraph`,
      html: `<strong>第五步：</strong>如果您的实际工作地点位于某个城市或大都市通勤圈内，选择BLS；如果不是，选择另一个选项。`,
    },
    { type: `paragraph`, html: `<strong>第六步：</strong>"地区"一项，同样选择您实际工作地点所在的区域。` },
    {
      type: `paragraph`,
      html: `<strong>第七步：</strong>提交后，系统会显示一级至四级工资等级对应的年薪与时薪。`,
    },
    {
      type: `paragraph`,
      html: `<strong>请注意，您所选择的工资等级必须与您的岗位描述及职责复杂程度相匹配。一级工资最低，但如果您的职责涉及管理、独立判断或监督他人，将岗位设定为一级很可能会被USCIS质疑前后不一致。</strong>`,
    },
    { type: `heading`, level: 2, html: `H-1B自雇如何设定合理的薪资结构并支付` },
    { type: `heading`, level: 3, html: `1. 确定您的工资下限` },
    { type: `paragraph`, html: `根据劳工部规定，您必须支付以下两者中较高的一个：` },
    {
      type: `list`,
      ordered: false,
      items: [`<strong>市场工资（Prevailing Wage）</strong>`, `<strong>实际工资（公司为同岗位其他员工实际支付的工资）</strong>`],
    },
    {
      type: `paragraph`,
      html: `对于H-1B自雇而言，公司通常没有其他同岗位员工可供比较，因此<strong>市场工资实际上就成为了您的工资下限。</strong>`,
    },
    { type: `heading`, level: 3, html: `2. 选择合适的工资等级` },
    { type: `paragraph`, html: `根据劳工部的<strong>市场工资认定政策指引</strong>，工资等级由以下四个因素决定：` },
    {
      type: `list`,
      ordered: true,
      items: [
        `<strong>经验（Experience）</strong>——要求具备多少年的工作经验`,
        `<strong>教育（Education）</strong>——要求何种学历`,
        `<strong>监督程度（Level of Supervision）</strong>——该岗位的独立运作程度`,
        `<strong>判断与责任（Judgment and Responsibility）</strong>——该岗位所承担的决策权限`,
      ],
    },
    {
      type: `paragraph`,
      html: `即使您是创始人/CEO，您的H-1B申请仍然需要根据<strong>您作为员工所实际承担的具体职责</strong>来设定工资等级。`,
    },
    { type: `heading`, level: 3, html: `3. 遵循合规的薪酬发放流程` },
    {
      type: `paragraph`,
      html: `工资必须通过公司正式的薪酬系统，按月或双周发放。请妥善保存所有关键记录——W-2表格、工资单、银行流水与雇佣合同。这些不仅是税务合规的要求，也是USCIS用来确认您的岗位真实存在、工资真实发放的核心证据。`,
    },
    { type: `paragraph`, html: `推荐使用的薪酬工具：` },
    { type: `list`, ordered: false, items: [`Gusto`, `ADP`, `QuickBooks Payroll`, `Paychex`, `Rippling`] },
    {
      type: `paragraph`,
      html: `<a href="/contact">不确定如何进行合规薪酬发放？联系我们获取免费咨询。</a>`,
    },
    { type: `heading`, level: 3, html: `4. 准备清晰的岗位描述与职责拆解` },
    {
      type: `paragraph`,
      html: `您的岗位描述必须真实反映日常工作内容，最好与律师共同起草，使用符合USCIS与劳工部标准的措辞。`,
    },
    {
      type: `list`,
      ordered: false,
      items: [
        `该描述会直接决定系统为您分配的SOC职业代码与工资等级；`,
        `避免使用"战略决策"或"全面管理"这类措辞，因为这类表述通常对应更高的工资等级；`,
        `用具体、可衡量的任务来描述日常职责——例如"分析数据"或"设计产品流程"，而不是"负责公司运营"这类笼统的表述。`,
      ],
    },
    {
      type: `paragraph`,
      html: `这样不仅能让您的工资等级更加站得住脚，也能降低因岗位描述过于宽泛或定级过高而引发补件通知的风险。`,
    },
    { type: `heading`, level: 2, html: `常见问题：H-1B自雇申请人关于市场工资的常见疑问` },
    { type: `heading`, level: 3, html: `1. 薪资需要从什么时候开始支付？` },
    {
      type: `paragraph`,
      html: `工资必须从您的H-1B生效日期（通常是10月1日）开始，按照LCA中申报并经劳工部确认的市场工资数字，持续发放。持续支付是核心要求——如果USCIS在审查中发现，公司自获批生效日起并未按该工资标准支付薪资，申请人可能会被视为处于失业状态，从而导致H-1B失效。`,
    },
    { type: `heading`, level: 3, html: `2. LCA中申报的工资，可以与我实际支付给自己的工资不同吗？` },
    {
      type: `paragraph`,
      html: `不可以。您必须实际支付不低于LCA中申报金额的工资，否则将被视为不符合H-1B合规要求。工资必须按照LCA中申报的"薪资标准"（无论是年薪还是时薪）发放，并通过工资单及W-2等税表进行记录。即使您本人是公司的所有者，也不能仅象征性地支付工资，或以"计划支付"作为解释——一旦USCIS日后审查您的案件，这种做法会引发对岗位真实性的质疑。如果您的职责发生变化、工资也需要相应调整，具体情况可能需要递交H-1B修改申请。`,
    },
    { type: `heading`, level: 3, html: `3. 选择最高工资等级会更容易获批吗？` },
    {
      type: `paragraph`,
      html: `不一定。USCIS关注的重点是，工资等级是否与岗位的实际职责及技能要求相匹配。只有当岗位的复杂程度、独立性与经验要求确实达到中高级水平时，申报较高等级才是合适的；如果等级与岗位不匹配——无论定得过高还是过低——都可能引发合规质疑或触发补件通知。`,
    },
    { type: `heading`, level: 3, html: `4. 奖金或股权激励是否计入市场工资？` },
    {
      type: `paragraph`,
      html: `您的律师会在准备I-129与支持信时说明您的薪酬结构，但USCIS明确规定，只有以W-2工资形式支付的基本工资才计入市场工资要求。奖金、分红与股权激励可以作为薪酬的补充，但不能替代基本工资义务本身。`,
    },
    { type: `heading`, level: 3, html: `5. H-1B岗位可以是兼职吗，还是必须全职？` },
    {
      type: `paragraph`,
      html: `可以是兼职。如果H-1B岗位是兼职性质，雇主必须在LCA中以时薪的形式申报市场工资——如果官方公布的市场工资数字是以年薪形式给出的，可以将其除以2080小时（标准的全年工作小时数），换算成LCA所需的时薪。`,
    },
    {
      type: `paragraph`,
      html: `在H-1B自雇申请中，工资等级与LCA材料的设定方式，直接决定了USCIS是否认可您的雇佣关系及工资合规性。即便全程有律师协助，岗位设置、工资发放、公司运营与组织架构方面的<strong>事实基础</strong>，依然由申请人自己承担——这些事实是任何律师都无法替您捏造或承担的。律师的职责，是通过岗位描述、I-129、支持信、LCA等文件，以合规的方式将真实的岗位、工资与运营事实呈现给USCIS，但以下这些基础性事实，需要由您自己去建立并把控：`,
    },
    {
      type: `list`,
      ordered: false,
      items: [
        `公司是否真实运营；`,
        `H-1B签证生效后，工资是否真实发放、薪酬流程是否真实运行。`,
      ],
    },
    {
      type: `paragraph`,
      html: `这些核心事实一旦出现问题，<strong>并不是律师能够"包装"或替您承担的法律责任</strong>。如果您不确定如何搭建符合H-1B要求的合规公司架构、岗位体系、运营记录与薪酬机制，欢迎联系Keystone Strategies——我们专注于帮助H-1B自雇创业者，<strong>从雇主架构设计、岗位设置到合规薪酬发放</strong>，全流程落地执行。<a href="/contact">联系我们获取免费咨询。</a>`,
    },
  ],
};
