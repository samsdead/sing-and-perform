import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/content/siteData";

export function ServicesOverview() {
  const topServices = siteData.services.slice(0, 3);

  return (
    <Section id="services">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-ink/80">
            Pick a starting point — we’ll tailor your plan after a quick consultation.
          </p>
        </div>
        <Button href="/services" variant="ghost" ariaLabel="See all services">
          See all services
        </Button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {topServices.map((s) => (
          <Card key={s.title}>
            <CardHeader title={s.title} subtitle={s.description} />
            <CardContent>
              <ul className="space-y-2 text-sm text-ink/80">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent2" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link className="text-sm font-bold text-accent hover:underline" href="/contact">
                  Ask about this →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
