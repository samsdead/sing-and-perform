import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import test from "node:test";

async function startServer(t, endpoint) {
  const child = spawn(process.execPath, [
    "--import", "./tests/fixtures/contact-provider.mjs", "./node_modules/next/dist/bin/next",
    "start", "--hostname", "127.0.0.1", "--port", "0"
  ], {
    env: { ...process.env, FORMSPREE_ENDPOINT: endpoint, NEXT_PUBLIC_FORMSPREE_ENDPOINT: "", NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  });

  const exited = once(child, "exit");
  t.after(async () => {
    child.kill();
    await exited;
  });

  return new Promise((resolve, reject) => {
    let output = "";
    const timeout = setTimeout(() => reject(new Error(`Next.js did not start: ${output}`)), 15000);
    const collect = (chunk) => {
      output += chunk;
      const localUrl = output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
      if (localUrl && output.includes("Ready")) {
        clearTimeout(timeout);
        resolve(localUrl);
        child.stdout.off("data", collect);
        child.stderr.off("data", collect);
        child.stdout.resume();
        child.stderr.resume();
      }
    };
    child.stdout.on("data", collect);
    child.stderr.on("data", collect);
    exited.then(() => {
      clearTimeout(timeout);
      reject(new Error(`Next.js exited: ${output}`));
    }, (error) => {
      clearTimeout(timeout);
      reject(error);
    });
  });
}

const sample = { name: "Demo Visitor", email: "visitor@example.invalid", message: "Please send lesson information" };
const jsonPost = (origin, data) => fetch(`${origin}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

test("contact page uses local POST and disables entry when delivery is unconfigured", async (t) => {
  const origin = await startServer(t, "");
  const page = await fetch(`${origin}/contact`);
  const html = await page.text();
  assert.match(html, /<form\b[^>]*action="\/api\/contact"[^>]*method="post"/i);
  assert.match(html, /<fieldset\b[^>]*disabled/);
  assert.match(page.headers.get("content-security-policy") ?? "", /form-action 'self'/);

  const response = await jsonPost(origin, sample);
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal((await response.json()).ok, false);
});

test("contact endpoint reports provider outcomes and keeps fallback URLs free of submitted data", async (t) => {
  const origin = await startServer(t, "https://formspree.io/f/testform");
  const accepted = await jsonPost(origin, { ...sample, ignored: "This field must not be forwarded" });
  assert.equal(accepted.status, 200);
  assert.equal((await accepted.json()).ok, true);
  assert.equal((await jsonPost(origin, { ...sample, message: "Provider unavailable" })).status, 503);
  assert.equal((await jsonPost(origin, { ...sample, message: "Provider limit reached" })).status, 429);
  assert.equal((await jsonPost(origin, { ...sample, name: [] })).status, 400);

  const fallback = await fetch(`${origin}/api/contact`, {
    method: "POST", redirect: "manual", body: new URLSearchParams(sample)
  });
  assert.equal(fallback.status, 303);
  assert.equal(fallback.headers.get("location"), "/contact?status=sent");
});
