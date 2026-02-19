"use client";

import { useMemo, useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { ContactPayload } from "@/lib/validators";
import { validateContactPayload } from "@/lib/validators";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: ""
  });

  const canSubmit = useMemo(() => status !== "submitting", [status]);

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setStatus("idle");

    const validation = validateContactPayload(form);
    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // Free-first option:
      // If NEXT_PUBLIC_FORMSPREE_ENDPOINT is set, send directly to Formspree.
      if (formspreeEndpoint) {
        const resp = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(form)
        });

        if (!resp.ok) throw new Error("Formspree request failed");
        setStatus("success");
        return;
      }

      // Default: hit internal API route (validates + returns success).
      // Replace this with Resend/SMTP later if you prefer.
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!resp.ok) throw new Error("API request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function setField<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold" htmlFor="name">Name</label>
          <div className="mt-2">
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name ? (
              <p id="name-error" className="mt-1 text-sm text-accent">{errors.name}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold" htmlFor="email">Email</label>
          <div className="mt-2">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-sm text-accent">{errors.email}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold" htmlFor="phone">Phone (optional)</label>
          <div className="mt-2">
            <Input
              id="phone"
              name="phone"
              autoComplete="tel"
              value={form.phone ?? ""}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="07xxx xxxxxx"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold" htmlFor="preferredTime">Preferred time (optional)</label>
          <div className="mt-2">
            <Input
              id="preferredTime"
              name="preferredTime"
              value={form.preferredTime ?? ""}
              onChange={(e) => setField("preferredTime", e.target.value)}
              placeholder="e.g., weekday evenings"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold" htmlFor="message">Message</label>
        <div className="mt-2">
          <Textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="Tell us what you’d like help with (goals, style, deadlines, etc.)"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-accent">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" ariaLabel="Submit contact form">
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>

      <div id="contact-form-status" className="text-sm" aria-live="polite">
        {status === "success" ? (
          <p className="rounded-xl bg-accent2/15 p-3 text-ink">
            Thanks! Your message has been sent. We’ll get back to you soon.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="rounded-xl bg-accent/15 p-3 text-ink">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
