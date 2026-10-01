import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { first, last, email, phone, format, heard, message } = body;

  if (!first || !last || !email || !phone || !format || !heard) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error: dbError } = await supabase.from("bookings").insert({
    first_name: first,
    last_name: last,
    email,
    phone,
    format,
    heard_about: heard,
    message: message || null,
  });

  if (dbError) {
    console.error(dbError);
    return NextResponse.json({ error: "Could not save booking" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Booking Requests <onboarding@resend.dev>",
      to: process.env.DOCTOR_EMAIL!,
      subject: `New consultation request from ${first} ${last}`,
      text: `
Name: ${first} ${last}
Email: ${email}
Phone: ${phone}
Preferred format: ${format}
Heard about us via: ${heard}
Message: ${message || "(none)"}
      `.trim(),
    });
  } catch (emailError) {
    console.error(emailError);
  }

  return NextResponse.json({ success: true });
}