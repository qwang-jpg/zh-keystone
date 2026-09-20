import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  description,
  align = "left",
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        // A title alone stays tight; once a description paragraph joins it,
        // the block gets more room so the body copy doesn't wrap too early.
        description ? "max-w-3xl" : "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold leading-tight md:text-4xl",
          light ? "text-white" : "text-keystone-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
