import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { siteData } from "@/content/siteData";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";

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
            Tell us your goals and we’ll reply with next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-extrabold">Send a message</h2>
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
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
