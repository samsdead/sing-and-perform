import { NextResponse } from "next/server";

// Small security headers (safe defaults for marketing sites)
export function proxy() {
  const res = NextResponse.next();

  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // Content-Security-Policy is intentionally not set here to avoid breaking embeds.
  // If you add embeds later, set a CSP carefully.

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"]
};
