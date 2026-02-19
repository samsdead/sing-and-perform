import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/content/siteData";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore singing lessons and coaching services in Milton Keynes: 1:1 lessons, performance preparation, audition support, and more.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <Section size="md" className="pt-8 sm:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Services that meet you where you are
            </h1>
            <p className="mt-4 text-lg text-ink/80">
              Pick a goal and we’ll tailor the sessions to your voice, schedule, and preferred style.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" ariaLabel="Book a consultation">
                {siteData.primaryCta}
              </Button>
              <Button href="/about" variant="ghost" size="lg" ariaLabel="Learn about us">
                Learn about us
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5">
            <Image
              src="/images/lesson-placeholder.jpg"
              alt="Singing lessons and coaching"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      <Section size="md">
        <div className="grid gap-6 lg:grid-cols-2">
          {siteData.services.map((s) => (
            <Card key={s.title}>
              <CardHeader title={s.title} subtitle={s.description} />
              <CardContent>
                <ul className="space-y-2 text-sm text-ink/80">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button href="/contact" variant="secondary" ariaLabel={`Ask about ${s.title}`}>
                    Ask about {s.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section size="tight" className="bg-white/40">
        <div className="rounded-2xl bg-white p-8 shadow-soft ring-1 ring-black/5">
          <h2 className="text-2xl font-extrabold tracking-tight">Not sure which service fits?</h2>
          <p className="mt-2 text-ink/80">
            Send a message with your goals and we’ll recommend the best starting point.
          </p>
          <div className="mt-6">
            <Button href="/contact" size="lg" ariaLabel="Book a quote / Get consultation">
              {siteData.primaryCta}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
