import { contactEndpoint } from "@/lib/contact-delivery";
import { validateContactPayload } from "@/lib/validators";

const maxBodyBytes = 40 * 1024;

async function readContactBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return "";

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let text = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) return text + decoder.decode();
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      text += decoder.decode(value, { stream: true });
    }
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request: Request) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  const wantsJson = type === "application/json" || request.headers.get("accept")?.includes("application/json");
  function respond(status: number, result: "sent" | "invalid" | "unavailable" | "busy", errors?: Record<string, string>) {
    const headers = { "Cache-Control": "no-store" };
    if (wantsJson) return Response.json({ ok: result === "sent", result, errors }, { status, headers });
    return new Response(null, { status: 303, headers: { ...headers, Location: `/contact?status=${result}` } });
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return respond(403, "invalid");
  if (type !== "application/json" && type !== "application/x-www-form-urlencoded") return respond(415, "invalid");
  if (Number(request.headers.get("content-length")) > maxBodyBytes) return respond(413, "invalid");

  let input: unknown;
  try {
    const body = await readContactBody(request);
    if (body === null) return respond(413, "invalid");
    input = type === "application/json" ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
  } catch {
    return respond(400, "invalid");
  }

  const validation = validateContactPayload(input);
  if (!validation.ok) return respond(400, "invalid", validation.errors);

  const endpoint = contactEndpoint();
  if (!endpoint) return respond(503, "unavailable");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(validation.data),
      redirect: "error",
      cache: "no-store",
      signal: AbortSignal.timeout(5000)
    });
    if (response.status === 429) return respond(429, "busy");
    if (response.ok) return respond(200, "sent");
  } catch {
    // Respond generically without logging contact details or provider responses.
  }
  return respond(503, "unavailable");
}
