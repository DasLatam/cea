const RESEND_API_URL = "https://api.resend.com/emails";

export type ResendEmailPayload = {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}.`);
  }
  return value;
}

export function extractEmailAddress(input: string) {
  const match = input.match(/<([^>]+)>/);
  return match?.[1]?.trim() || input.trim();
}

export async function sendWithResend(payload: ResendEmailPayload) {
  const apiKey = requireEnv("RESEND_API_KEY");
  const from = requireEnv("EMAIL_FROM");

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || data?.error || `Resend respondió ${response.status}.`);
  }

  return data;
}
