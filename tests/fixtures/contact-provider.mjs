const originalFetch = globalThis.fetch;

globalThis.fetch = async (url, init) => {
  if (String(url) !== "https://formspree.io/f/testform") {
    return originalFetch(url, init);
  }

  const payload = JSON.parse(init.body);
  if (
    init.method !== "POST" || init.redirect !== "error" ||
    Object.keys(payload).sort().join() !== "email,message,name,phone,preferredTime"
  ) {
    throw new Error("Unexpected provider request");
  }

  if (payload.message === "Provider limit reached") return new Response(null, { status: 429 });
  if (payload.message === "Provider unavailable") return new Response(null, { status: 500 });
  return new Response(null, { status: 200 });
};
