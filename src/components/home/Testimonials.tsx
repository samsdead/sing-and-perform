import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { siteData } from "@/content/siteData";

export function Testimonials() {
  return (
    <Section className="bg-white/40" id="testimonials">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight">What students say</h2>
        <p className="mt-2 text-ink/80">
          Real confidence comes from consistent wins — technique, clarity, and a supportive space to practice.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {siteData.testimonials.map((t) => (
          <Card key={t.name}>
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed text-ink/80">“{t.blurb}”</p>
              <div className="mt-6">
                <div className="text-sm font-bold">{t.name}</div>
                <div className="text-xs text-muted">{t.title}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
