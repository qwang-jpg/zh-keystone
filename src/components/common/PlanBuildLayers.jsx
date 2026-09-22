import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// Detail copy is masked (letters/digits swapped for "X") and blurred behind a
// lock overlay: full build specifics are only shared by sales after a call.
function maskText(text) {
  return text.replace(/[^\s]/g, "X");
}

// Focus ring shared by the tab triggers and the "Book a Meeting" CTA below —
// matches keystone-teal, same as the rest of the site's focus-visible rings.
const focusRing =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#169898] focus-visible:outline-offset-[5px]";

// Shared "what we build with you" deliverables section used by both the
// H-1B Infinity Plan and STEM OPT Ready Plan pages: a tabbed sequence of
// build layers, each with a masked/locked deliverables list and a "why it
// matters" note. `layers` is [{ title, description, deliverables, why }].
// Pass `locked={false}` for pages that want the same tabbed layout fully
// open instead of teasing the detail behind a "book a call" lock — the
// single-panel-at-a-time layout avoids the uneven card heights a static
// grid gets when one module's list is much shorter than another's.
export default function PlanBuildLayers({ title, intro, layers, note, tabsLabel = "搭建流程", locked = true }) {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);
  function select(index, focus = false) {
    setActive(index);
    if (focus) buttons.current[index]?.focus();
  }
  const layer = layers[active];
  const total = String(layers.length).padStart(2, "0");

  return (
    <section className="bg-white py-[66px] text-keystone-ink min-[801px]:py-24">
      <div className="container">
        <div className="max-w-[810px]">
          <h2 className="text-[clamp(2rem,3.35vw,2.9rem)] font-bold leading-[1.12] tracking-[-0.035em] text-balance">
            {title}
          </h2>
          {intro && (
            <p className="mt-6 max-w-[730px] text-base leading-[1.7] text-[#58675e]">{intro}</p>
          )}
        </div>
        <div className="mt-[45px] block border border-[#dbe2d9] min-[801px]:grid min-[801px]:grid-cols-[295px_1fr] min-[1101px]:grid-cols-[330px_1fr]">
          <div
            className="flex overflow-x-auto bg-keystone-mist p-0 min-[801px]:block min-[801px]:overflow-visible min-[801px]:py-4"
            role="tablist"
            aria-label={tabsLabel}
          >
            {layers.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  ref={(node) => {
                    buttons.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`build-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`build-panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  onKeyDown={(event) => {
                    let next;
                    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (i + 1) % layers.length;
                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (i - 1 + layers.length) % layers.length;
                    if (event.key === "Home") next = 0;
                    if (event.key === "End") next = layers.length - 1;
                    if (next !== undefined) {
                      event.preventDefault();
                      select(next, true);
                    }
                  }}
                  className={cn(
                    "flex w-[230px] min-w-[230px] shrink-0 items-baseline gap-[18px] border-b-[3px] px-5 py-5 text-left text-[.85rem] font-semibold leading-[1.4] text-[#536456] transition-colors hover:bg-[#eaf0e7] motion-reduce:transition-none min-[801px]:w-full min-[801px]:min-w-0 min-[801px]:shrink min-[801px]:border-b-0 min-[801px]:border-l-[3px] min-[801px]:px-[25px] min-[801px]:py-[22px]",
                    focusRing,
                    isActive
                      ? "border-b-[#426647] bg-[#e4ebdf] text-[#163326] min-[801px]:border-l-[#426647]"
                      : "border-b-transparent min-[801px]:border-l-transparent"
                  )}
                >
                  <span className="text-[.69rem] text-[#82937f]">0{i + 1}</span>
                  {item.title}
                </button>
              );
            })}
          </div>
          <div
            className="min-h-[640px] px-[22px] py-[27px] min-[541px]:min-h-[560px] min-[541px]:p-[30px] min-[801px]:min-h-[585px] min-[801px]:p-[35px] min-[1101px]:px-12 min-[1101px]:py-[43px]"
            role="tabpanel"
            id={`build-panel-${active}`}
            aria-labelledby={`build-tab-${active}`}
            tabIndex={0}
          >
            <span className="mb-5 block text-[.65rem] font-bold uppercase leading-[1.4] tracking-[.16em] text-[#426647] min-[541px]:text-[.69rem]">
              第 0{active + 1} 层 / {total}
            </span>
            <h3 className="text-[1.5rem] font-bold leading-[1.3] tracking-[-0.015em] text-balance min-[541px]:text-[1.75rem]">
              {layer.title}
            </h3>
            {locked ? (
              <div className="relative mt-[13px] overflow-hidden rounded-[10px]">
                <div className="select-none text-[.93rem] leading-[1.7] text-[#58675e] blur-[5px]" aria-hidden="true">
                  <p>{maskText(layer.description)}</p>
                  <ul className="my-7 grid gap-[13px]">
                    {layer.deliverables.map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-[.88rem] leading-[1.6]">
                        <Check size={17} className="mt-[3px] shrink-0 text-[#a9bfa0]" aria-hidden="true" />
                        <span>{maskText(text)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[rgba(243,245,241,.78)] p-6 text-center backdrop-blur-[6px]">
                  <Lock size={20} className="text-[#426647]" aria-hidden="true" />
                  <p className="max-w-[320px] text-[.85rem] leading-[1.7] text-[#3a4a3e]">
                    本模块的详细服务内容将在咨询后由团队向您介绍。
                  </p>
                  <Link
                    to="/contact"
                    className={cn(
                      "inline-flex w-full min-h-[54px] items-center justify-center gap-[18px] rounded-xl border border-transparent bg-keystone-forest px-4 py-[11px] text-center text-[.79rem] font-semibold leading-[1.5] text-white transition-colors hover:bg-[#245343] motion-reduce:transition-none min-[541px]:w-auto min-[541px]:min-h-0 min-[541px]:px-5 min-[541px]:text-[.875rem]",
                      focusRing
                    )}
                  >
                    预约咨询
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <p className="mt-[13px] text-[.93rem] leading-[1.7] text-[#58675e]">{layer.description}</p>
                <ul className="my-7 grid gap-[13px]">
                  {layer.deliverables.map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-[.88rem] leading-[1.6]">
                      <Check size={17} className="mt-[3px] shrink-0 text-[#548341]" aria-hidden="true" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {layer.why && (
              <div className="mt-[23px] border-t border-t-[#dbe2d9] pt-[23px]">
                <h4 className="text-[.68rem] font-bold uppercase tracking-[.12em] text-[#426647]">这项服务的作用</h4>
                <p className="mt-[10px] text-[.87rem] leading-[1.7] text-[#506153]">{layer.why}</p>
              </div>
            )}
          </div>
        </div>
        {note && <p className="mt-[26px] max-w-[920px] text-[.77rem] leading-[1.6] text-[#647166]">{note}</p>}
      </div>
    </section>
  );
}
