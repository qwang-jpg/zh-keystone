import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import { cn } from "@/lib/utils";

const screenshots = [
  "2-2.png",
  "6-1.png",
  "8-1.png",
  "15-1.png",
  "11-1.png",
  "9-1.png",
  "4-1.png",
  "12-1.png",
  "16-1.png",
  "19-1.png",
];

export default function SuccessCases() {
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((i) => (i + dir + screenshots.length) % screenshots.length);
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <SectionHeading align="left" title="STEM OPT Employer Compliance Training — Sample Deliverables" />

        <div className="relative mx-auto mt-14 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={screenshots[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <ImagePlaceholder
                sourceFile={screenshots[index]}
                label={`Success Story Screenshot ${index + 1} / ${screenshots.length}`}
                aspect="aspect-[4/3]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous case"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {screenshots.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setIndex(i)}
                  aria-label={`Show case screenshot ${i + 1}`}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    i === index ? "w-6 bg-primary" : "bg-border"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-keystone-ink transition-colors hover:border-primary hover:text-primary"
              aria-label="Next case"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
