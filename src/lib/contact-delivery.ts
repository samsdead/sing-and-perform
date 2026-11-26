export function contactEndpoint() {
  const value = process.env.FORMSPREE_ENDPOINT ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  return value && /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(value) ? value : null;
}
