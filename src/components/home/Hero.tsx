import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteData } from "@/content/siteData";

export function Hero() {
  return (
    <Section className="pt-10 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Badge>Friendly singing lessons • {siteData.locationServed}</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sing with confidence — technique, expression, and performance coaching that feels supportive.
          </h1>
          <p className="mt-4 text-lg text-ink/80">
            Whether you’re a total beginner or preparing for auditions, we’ll build a plan around your voice and goals.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" ariaLabel="Book a quote / Get consultation">
              {siteData.primaryCta}
            </Button>
            <Button href="/services" variant="ghost" size="lg" ariaLabel="View services">
              View services
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
              <div className="text-sm font-bold">Clear progress</div>
              <div className="mt-1 text-sm text-muted">Structured steps each week</div>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
              <div className="text-sm font-bold">Healthy technique</div>
              <div className="mt-1 text-sm text-muted">Sing safely, sound better</div>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
              <div className="text-sm font-bold">Friendly vibe</div>
              <div className="mt-1 text-sm text-muted">Support + honest feedback</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent2/15 to-black/5 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5">
            <Image
              src="/images/hero-placeholder.png"
              alt="Singing lessons and performance coaching"
              width={1600}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
