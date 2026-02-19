import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { siteData } from "@/src/content/siteData";

export function FinalCTA() {
  return (
    <Section className="pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/35 blur-2xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent2/25 blur-2xl" aria-hidden />

        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to feel proud of your voice?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a consultation and we’ll recommend a simple plan based on your goals.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button href="/contact" size="lg" ariaLabel="Book a quote / Get consultation">
              {siteData.primaryCta}
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="bg-white/10 text-white hover:bg-white/15" ariaLabel="View services">
              Explore services
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
