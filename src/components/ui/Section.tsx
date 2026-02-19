import { cn } from "@/lib/utils";
import { Container } from "./Container";

const sizeToPadding = {
  tight: "py-8 sm:py-10",
  md: "py-12 sm:py-14",
  lg: "py-16 sm:py-20"
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
