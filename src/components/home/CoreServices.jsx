import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";
import { serviceGroups, featuredServices } from "@/data/services";

export default function CoreServices() {
  const [openIndexes, setOpenIndexes] = useState(() => new Set([0]));

  const toggleGroup = (i) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <SectionHeading
            title="我们的服务"
            description="从公司注册到长期身份保障，我们提供专业指导与执行支持，衔接各阶段的需求。"
            align="left"
            className="max-w-xl"
          />
          <Button asChild>
            <Link to="/contact">
              告诉我们您的需求
              <MessageCircle className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {featuredServices.map((service, i) => (
              <Link
                key={service.href}
                to={service.href}
                className="group relative flex flex-col gap-4 overflow-hidden bg-white p-8 transition-colors hover:bg-keystone-mist"
              >
                <span className="absolute -right-12 top-6 w-44 rotate-45 bg-keystone-green py-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  核心服务
                </span>
                <span className="text-sm font-bold tracking-wide text-keystone-ink/35">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold leading-snug text-keystone-ink sm:text-2xl">
                    {service.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <span className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary">
                  查看详情
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-border">
          {serviceGroups.map((group, i) => {
            const open = openIndexes.has(i);
            return (
              <div key={group.heading} className="border-b border-border">
                <button
                  onClick={() => toggleGroup(i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-7 text-left"
                >
                  <span
                    className={cn(
                      "text-sm font-bold tracking-wide",
                      open ? "text-primary" : "text-keystone-ink/35"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block text-xl font-bold leading-tight tracking-tight text-keystone-ink sm:text-2xl">
                      {group.heading}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {group.summary}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-4">
                    <span className="hidden text-xs font-semibold uppercase tracking-wide text-primary sm:inline">
                      {group.count}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
                        open ? "border-primary bg-primary text-white" : "border-border text-primary"
                      )}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </span>
                </button>

                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-8"
                  >
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="group flex flex-col justify-between gap-2 bg-white p-5 transition-colors hover:bg-keystone-mist"
                        >
                          <span className="flex items-start justify-between gap-3">
                            <span className="text-sm font-bold leading-snug text-keystone-ink">
                              {item.label}
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
                          </span>
                          <span className="text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="mt-4">
                      <Link to="/contact">
                        {group.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
