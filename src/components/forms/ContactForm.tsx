"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { ContactPayload } from "@/lib/validators";
import { contactLimits, validateContactPayload } from "@/lib/validators";

export type ContactStatus = "sent" | "invalid" | "unavailable" | "busy";
type Status = "idle" | "submitting" | ContactStatus;

export function ContactForm({ available, initialStatus }: { available: boolean; initialStatus?: ContactStatus }) {
  const [status, setStatus] = useState<Status>(initialStatus ?? "idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: ""
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!available || status === "submitting") return;
    setErrors({});

    const validation = validateContactPayload(form);
    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(validation.data)
      });
      if (resp.ok) {
        setForm({ name: "", email: "", phone: "", preferredTime: "", message: "" });
        setStatus("sent");
      } else if (resp.status === 429) {
        setStatus("busy");
      } else {
        setStatus("unavailable");
      }
    } catch {
      setStatus("unavailable");
    }
  }

  function setField<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form action="/api/contact" method="post" onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-form-status">
      <fieldset disabled={!available || status === "submitting"} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold" htmlFor="name">Name</label>
          <div className="mt-2">
            <Input
              id="name"
              name="name"
              autoComplete="name"
              minLength={2}
              maxLength={contactLimits.name}
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
              maxLength={contactLimits.email}
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
              maxLength={contactLimits.phone}
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
              maxLength={contactLimits.preferredTime}
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
            minLength={10}
            maxLength={contactLimits.message}
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
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          ariaLabel="Submit contact form"
          disabled={!available || status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
      </div>
      </fieldset>

      {available ? (
        <p className="text-xs text-muted">We use Formspree to deliver your details and message so we can reply.</p>
      ) : null}

      <div id="contact-form-status" className="text-sm" aria-live="polite">
        {status === "sent" ? (
          <p className="rounded-xl bg-accent2/15 p-3 text-ink">
            Thanks! Your message has been sent. We’ll get back to you soon.
          </p>
        ) : null}

        {status === "invalid" ? (
          <p className="rounded-xl bg-accent/15 p-3 text-ink">
            Please check your details and try again.
          </p>
        ) : null}
        {status === "busy" ? (
          <p className="rounded-xl bg-accent/15 p-3 text-ink">The form is busy. Please try again in a minute.</p>
        ) : null}
        {!available || status === "unavailable" ? (
          <p className="rounded-xl bg-accent/15 p-3 text-ink">The form is unavailable. Please use the direct contact details if listed.</p>
        ) : null}
      </div>
    </form>
  );
}
