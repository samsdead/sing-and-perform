import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { siteData } from "@/content/siteData";

export function Process() {
  return (
    <Section id="process">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight">How it works</h2>
        <p className="mt-2 text-ink/80">
          Simple steps, clear progress. We keep it friendly — and focused.
        </p>
      </div>

      <ol className="mt-8 grid gap-6 lg:grid-cols-4">
        {siteData.processSteps.map((step, idx) => (
          <li key={step.title}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-sm font-extrabold text-ink">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-extrabold">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink/80">{step.description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
