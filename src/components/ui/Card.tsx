import { cn } from "@/src/lib/utils";

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-surface shadow-soft ring-1 ring-black/5", className)}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="px-6 pt-6">
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}

export function CardContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("px-6 pb-6 pt-4", className)}>{children}</div>;
}
