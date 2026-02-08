import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const CLIENT_SITE = "jaythatdrainguy.ca";
const CLIENT_EMAIL = "Jay.thatdrainguy@gmail.com";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function validateBody(body: unknown): body is ContactBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    typeof (body as ContactBody).name === "string" &&
    (body as ContactBody).name.trim().length > 0 &&
    "email" in body &&
    typeof (body as ContactBody).email === "string" &&
    (body as ContactBody).email.trim().length > 0 &&
    "message" in body &&
    typeof (body as ContactBody).message === "string" &&
    (body as ContactBody).message.trim().length > 0
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: unknown;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  if (!validateBody(body)) {
    return res.status(400).json({ error: "Missing or invalid required fields: name, email, message" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !supabaseKey || !resendKey) {
    console.error("Missing env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, or RESEND_API_KEY");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { name, email, phone, message } = body;

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase.from("client_form_submissions").insert({
      client_site: CLIENT_SITE,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      message: message.trim(),
    });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return res.status(500).json({ error: "Failed to save submission" });
    }

    const resend = new Resend(resendKey);
    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";

    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: CLIENT_EMAIL,
      subject: `New lead from ${CLIENT_SITE}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      return res.status(500).json({ error: "Failed to send notification" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
