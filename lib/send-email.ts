import nodemailer from "nodemailer";
import type { ContactFormData } from "./validations";

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to   = process.env.CONTACT_EMAIL_TO;

  if (!host || !port || !user || !pass || !to) {
    throw new Error(
      "Email delivery not configured: missing one or more SMTP_* environment variables."
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(port, 10),
    secure: parseInt(port, 10) === 465,
    auth: { user, pass },
  });

  const text = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "Not provided"}`,
    `Service of Interest: ${data.serviceInterest || "Not specified"}`,
    `Message:\n${data.message}`,
  ].join("\n\n");

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email || "Not provided")}</p>
    <p><strong>Service of Interest:</strong> ${escapeHtml(data.serviceInterest || "Not specified")}</p>
    <p><strong>Message:</strong></p>
    <blockquote>${escapeHtml(data.message).replace(/\n/g, "<br>")}</blockquote>
  `;

  try {
    await transporter.sendMail({
      from: `"High Breed Network Website" <${user}>`,
      to,
      subject: `New Enquiry from ${data.name}`,
      text,
      html,
    });
  } catch (err) {
    throw new Error(
      `Failed to deliver contact email: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
