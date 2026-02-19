import { buildMetadata } from "@/src/lib/seo";
import { Section } from "@/src/components/ui/Section";
import { Card, CardContent } from "@/src/components/ui/Card";
import { siteData } from "@/src/content/siteData";
import { ContactForm } from "@/src/components/forms/ContactForm";
import { Badge } from "@/src/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a consultation for singing lessons in Milton Keynes. Send a message and we’ll recommend the best starting point.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <div className="max-w-2xl">
          <Badge>Book a consultation • {siteData.locationServed}</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {siteData.primaryCta}
          </h1>
          <p className="mt-4 text-lg text-ink/80">
            Tell us your goals and we’ll reply with next steps. (Replace dummy phone/email in{" "}
            <code className="rounded bg-black/5 px-1 py-0.5">src/content/siteData.ts</code>.)
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Send a message</h2>
              <p className="mt-2 text-sm text-muted">
                Prefer email delivery? Use Formspree (free) by setting{" "}
                <code className="rounded bg-black/5 px-1 py-0.5">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code>.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Direct contact</h2>
              <div className="mt-3 space-y-3 text-sm text-ink/80">
                <p>
                  <span className="font-semibold">Phone:</span> {siteData.phoneDisplay}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {siteData.email}
                </p>
                <p>
                  <span className="font-semibold">Location served:</span> {siteData.locationServed}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-black/5 p-4 text-sm text-ink/80">
                <p className="font-semibold">Formspree setup (free-first)</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Create a Formspree form</li>
                  <li>Copy your endpoint URL</li>
                  <li>Set it as <code className="rounded bg-white px-1 py-0.5">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> in Vercel</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
