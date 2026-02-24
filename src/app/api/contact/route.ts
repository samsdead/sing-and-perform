import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/validators";
import { validateContactPayload } from "@/lib/validators";

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload;
  const validation = validateContactPayload(body);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  // Keep API lightweight by default.
  // Add a provider here (Resend/SMTP) if you want server-side delivery.
  return NextResponse.json({ ok: true }, { status: 200 });
}
