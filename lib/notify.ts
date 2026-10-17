export async function notifyTeam(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) return { configured: false, sent: false };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text })
  });
  if (!response.ok) {
    console.error("Notification provider returned non-success status:", response.status);
    return { configured: true, sent: false };
  }
  return { configured: true, sent: true };
}
