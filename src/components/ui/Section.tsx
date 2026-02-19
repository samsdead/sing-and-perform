import { cn } from "@/lib/utils";
import { Container } from "./Container";

const sizeToPadding = {
  tight: "py-5 sm:py-6",
  md: "py-6 sm:py-8",
  lg: "py-8 sm:py-12"
} as const;

export function Section({
  children,
  className,
  id,
  size = "md"
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "tight" | "md" | "lg";
}) {
  return (
    <section id={id} className={cn(sizeToPadding[size], className)}>
      <Container>{children}</Container>
    </section>
  );
}
