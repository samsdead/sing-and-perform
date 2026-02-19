import { Section } from "@/src/components/ui/Section";
import { siteData } from "@/src/content/siteData";

export function TrustBadges() {
  return (
    <Section className="py-10">
      <div className="grid gap-4 rounded-2xl bg-white/70 p-6 ring-1 ring-black/5 sm:grid-cols-2 lg:grid-cols-4">
        {siteData.trustBadges.map((b) => (
          <div key={b.label} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
            <div className="text-sm font-bold">{b.label}</div>
            <div className="mt-1 text-sm text-muted">{b.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
