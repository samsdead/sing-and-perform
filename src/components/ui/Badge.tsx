import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
