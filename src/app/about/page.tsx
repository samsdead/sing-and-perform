import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/content/siteData";

export const metadata = buildMetadata({
  title: "About",
  description:
    "A friendly music school in Milton Keynes focused on healthy technique, confidence, and real performance skills.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Section size="md" className="pt-6 sm:pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Coaching that feels supportive — and gets results
            </h1>
            <p className="mt-4 text-lg text-ink/80">
              Sing and Perform is built around a simple idea: a friendly environment + clear technique = real progress.
              We focus on healthy vocal habits, confidence, and musical expression you can actually feel.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" ariaLabel="Book a consultation">
                {siteData.primaryCta}
              </Button>
              <Button href="/services" variant="ghost" size="lg" ariaLabel="Explore services">
                Explore services
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5">
            <Image
              src="/images/studio-placeholder.jpeg"
              alt="Singing lesson studio"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      <Section size="md">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Friendly, not intimidating</h2>
              <p className="mt-2 text-sm text-ink/80">
                Lessons should feel safe. We coach with clarity and encouragement — no harsh judgement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Technique you can trust</h2>
              <p className="mt-2 text-sm text-ink/80">
                We prioritise healthy vocal habits, breath control, and consistency so you can sing more freely.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Performance-ready skills</h2>
              <p className="mt-2 text-sm text-ink/80">
                Stage presence, nerves, interpretation — we’ll help you perform with confidence, not panic.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section size="tight" className="bg-white/40">
        <div className="rounded-2xl bg-white p-8 shadow-soft ring-1 ring-black/5">
          <h2 className="text-2xl font-extrabold tracking-tight">Your first consultation</h2>
          <p className="mt-2 text-ink/80">
            We’ll discuss your goals, identify quick wins, and suggest a plan that fits your schedule. No pressure.
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
