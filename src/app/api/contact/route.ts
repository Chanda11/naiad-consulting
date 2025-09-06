/**
 * Simple contact API endpoint.
 * - Accepts POST JSON { name, email, message }
 * - In production you would forward this to email, a database, or a helpdesk tool.
 */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // For now, we just echo the payload. Replace with email/DB integration as needed.
    console.log("Contact form submission:", data);
    return NextResponse.json({ ok: true, received: data });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
