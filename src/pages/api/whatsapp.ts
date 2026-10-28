import type { APIRoute } from "astro";

export const prerender = false;

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Private vars are not inlined at build time, so fall back to the runtime environment.
const env = (key: string): string | undefined =>
  import.meta.env[key] ?? process.env[key];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const secret = env("TURNSTILE_SECRET_KEY");
  const number = env("WHATSAPP_NUMBER");
  if (!secret || !number) return json({ error: "Not configured" }, 500);

  const { token } = (await request.json().catch(() => ({}))) as {
    token?: string;
  };
  if (!token) return json({ error: "Missing token" }, 400);

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  body.set("remoteip", clientAddress);

  const result = (await fetch(VERIFY_URL, { method: "POST", body })
    .then((res) => res.json())
    .catch(() => null)) as { success?: boolean } | null;

  if (!result?.success) return json({ error: "Verification failed" }, 403);

  return json({ url: `https://wa.me/${number.replace(/\D/g, "")}` });
};
