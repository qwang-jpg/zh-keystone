import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Original site images could not be retrieved in this environment (no live
// site / media access yet). This renders a labeled placeholder so every
// image slot is visible and traceable back to the source file for when
// real assets are dropped into public/images/.
//
// Once a real asset is available, pass it as `src` and this renders the
// actual image instead of the placeholder — same slot, no caller changes
// beyond adding `src`.
export default function ImagePlaceholder({
  src,
  alt,
  label,
  sourceFile,
  className,
  aspect = "aspect-[4/3]",
  dark = false,
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", aspect, className)}>
        <img src={src} alt={alt ?? label ?? ""} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl text-center",
        dark
          ? "bg-gradient-to-br from-keystone-teal/25 to-keystone-green/20"
          : "bg-gradient-to-br from-keystone-teal/10 to-keystone-green/10",
        aspect,
        className
      )}
    >
      <ImageIcon className={cn("h-8 w-8", dark ? "text-white/40" : "text-primary/40")} strokeWidth={1.5} />
      {label && (
        <p className={cn("max-w-[80%] text-xs font-medium", dark ? "text-white/60" : "text-keystone-ink/40")}>
          {label}
        </p>
      )}
      {sourceFile && (
        <p className={cn("max-w-[85%] break-all text-3xs", dark ? "text-white/40" : "text-keystone-ink/25")}>
          {sourceFile}
        </p>
      )}
    </div>
  );
}
