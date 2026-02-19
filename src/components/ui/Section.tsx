import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-18", className)}>
      <Container>{children}</Container>
    </section>
  );
}
