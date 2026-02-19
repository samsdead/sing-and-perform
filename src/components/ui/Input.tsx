import { cn } from "@/src/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={cn(
        "w-full rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50",
        className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      className={cn(
        "w-full rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50",
        className
      )}
    />
  );
}
