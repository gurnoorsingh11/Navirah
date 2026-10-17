import { NextResponse } from "next/server";
import { z } from "zod";
import { saveContact, countRecentSubmissions } from "@/lib/db";
import { notifyTeam } from "@/lib/notify";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(10).max(2500),
  consent: z.union([z.literal(true), z.literal("true")]),
  website: z.string().max(0).optional().default("")
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = schema.safeParse(raw);
    if (!parsed.success) return NextResponse.json({ok:false,message:"Please check the required fields and try again."},{status:400});
    const data = parsed.data;
    if (data.website) return NextResponse.json({ok:true,message:"Thanks. Your enquiry has been received."});
    if (!process.env.POSTGRES_URL) return NextResponse.json({ok:false,message:"The enquiry service is not configured yet. Please email tech.navirahinnovations@gmail.com directly."},{status:503});
    if (await countRecentSubmissions("contact_submissions", data.email) >= 5) return NextResponse.json({ok:false,message:"Too many submissions from this email. Please try again later."},{status:429});
    const id = crypto.randomUUID();
    await saveContact({id,name:data.name,email:data.email.toLowerCase(),phone:data.phone,message:data.message});
    const notification = await notifyTeam("New Navirah website enquiry",`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`);
    return NextResponse.json({ok:true,message:notification.sent?"Your enquiry has been recorded and the team has been notified.":"Your enquiry has been recorded. Email notification is not configured or could not be delivered, so the team should review the database lead store."});
  } catch (error) {
    console.error("Contact submission failed", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json({ok:false,message:"We could not record your enquiry. Please try again or email the team directly."},{status:500});
  }
}
