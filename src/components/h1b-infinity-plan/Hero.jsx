import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AssessmentButton } from "./PlanUi";

const layers = [
  { number: "01", title: "企业基础", detail: "可行的商业模式 · 真实的公司" },
  { number: "02", title: "雇主基础设施", detail: "雇佣关系 · 薪资 · 合规" },
  { number: "03", title: "H-1B就绪", detail: "专业职位 · 证明材料 · 律师协调" },
];

export default function Hero() {
  return (
    <section className="bg-[#12352b] pb-[55px] pt-16 text-white min-[801px]:pb-20 min-[801px]:pt-24">
      <div className="container grid grid-cols-1 items-center gap-[35px] min-[801px]:grid-cols-[1.4fr_1fr] min-[801px]:gap-10 min-[1101px]:gap-20">
        <div>
          <h1 className="max-w-[690px] text-[2.7rem] font-bold leading-[1.06] tracking-[-0.045em] text-balance min-[541px]:text-[clamp(2.6rem,6.2vw,3.7rem)] min-[801px]:text-[clamp(2.8rem,4.35vw,4rem)]">
            <span className="mb-5 block text-[.51em] font-normal tracking-[-0.02em] text-[#c4d6c4] min-[541px]:text-[.49em]">
              没有传统担保雇主？
            </span>
            打造您H-1B之路背后的雇主。
          </h1>
          <p className="mt-7 max-w-[615px] text-[.94rem] leading-[1.7] text-[#c8d5cc] min-[541px]:text-base">
            Keystone帮助符合条件的专业人士，将可行的商业构想转化为真正的美国雇主——将公司注册、雇主基础设施建设、合规支持、持续运营与H-1B案件协调整合为一套结构化的服务方案。
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-[23px] min-[541px]:flex-row min-[541px]:flex-wrap min-[541px]:items-center">
            <AssessmentButton light className="w-full min-[541px]:w-auto" />
            <a
              href="#service-process"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm text-[.79rem] font-semibold text-[#e1eadf] underline-offset-[5px] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12352b] min-[541px]:w-auto"
            >
              了解该计划如何运作 <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-[26px] border-t border-t-[#3b594b] pt-[22px] text-[.66rem] tracking-[.015em] text-[#aec2b4] min-[541px]:text-[.7rem] min-[801px]:mt-9">
            企业基础设施 + 雇主合规 + 移民策略
          </p>
        </div>
        <div
          className="mt-[10px] w-full max-w-[520px] border border-[#547363] bg-[#183e32] p-5 shadow-[20px_20px_0_#0c2a212b] min-[801px]:mt-0 min-[801px]:w-auto min-[801px]:max-w-none min-[1101px]:p-[27px]"
          aria-label="企业基础通向雇主基础设施与H-1B就绪"
        >
          <div className="flex justify-between gap-5 pb-[25px] text-[.65rem] uppercase leading-[1.7] tracking-[.12em] text-[#c1d2bf]">
            <span>申请背后的雇主</span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </div>
          <ol className="relative">
            {layers.map((layer, i) => {
              const isLast = i === layers.length - 1;
              return (
                <li
                  key={layer.number}
                  className={
                    "relative mt-[22px] flex items-start gap-[17px] border px-[14px] py-[22px] first:mt-0 min-[1101px]:px-5 min-[1101px]:py-6 " +
                    (isLast
                      ? "border-[#d4e6c4] bg-[#d4e6c4] text-[#163326]"
                      : "border-[#6f8971] bg-[#254a3b] after:absolute after:left-[33px] after:top-full after:text-[20px] after:leading-[22px] after:text-[#b8d49e] after:content-['↓']")
                  }
                >
                  <span className={"pt-[2px] text-[.66rem] " + (isLast ? "text-[#426147]" : "text-[#b8d49e]")}>
                    {layer.number}
                  </span>
                  <div>
                    <p className="text-[1.13rem] font-bold leading-[1.3] tracking-[-0.025em]">{layer.title}</p>
                    <p className={"mt-2 text-[.67rem] " + (isLast ? "text-[#426147]" : "text-[#b7ccbc]")}>
                      {layer.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex justify-between gap-[15px] pt-6 text-[.68rem] text-[#b8cabb]">
            <span>一套结构化方案。</span>
            <span>为运营而生。</span>
          </div>
        </div>
      </div>
    </section>
  );
}
