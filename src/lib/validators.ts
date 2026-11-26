export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferredTime?: string;
};

export const contactLimits = { name: 120, email: 254, phone: 40, preferredTime: 120, message: 3000 };

export function validateContactPayload(input: unknown):
  { ok: true; data: ContactPayload } | { ok: false; errors: Record<string, string> } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: { form: "Please check your details and try again." } };
  }

  const fields = input as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const data = { name: "", email: "", phone: "", preferredTime: "", message: "" };
  for (const key of Object.keys(data) as (keyof typeof data)[]) {
    const value = fields[key];
    if (value === undefined) continue;
    if (typeof value !== "string" || value.length > contactLimits[key]) {
      errors[key] = `Enter at most ${contactLimits[key]} characters.`;
      continue;
    }
    data[key] = value.trim();
  }

  if (data.name.length < 2) errors.name ??= "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email ??= "Please enter a valid email address.";
  }
  if (data.message.length < 10) {
    errors.message ??= "Please tell us a bit more (at least 10 characters).";
  }

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
