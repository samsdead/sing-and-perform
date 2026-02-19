import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/validators";
import { validateContactPayload } from "@/lib/validators";

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload;
  const validation = validateContactPayload(body);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  // This is intentionally "free-first": no paid email provider baked in.
  // Options to send emails in production:
  // 1) Formspree (free tier) — easiest: send directly from the client (already supported)
  // 2) Resend (free tier) — add server-side sending here
  // 3) Any SMTP provider — send from here using nodemailer (not included to keep dependencies minimal)

  return NextResponse.json({ ok: true }, { status: 200 });
}
