import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  topic: z.string().min(1, "Please select an inquiry topic"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot must be empty
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { fullName, email, topic } = result.data;

    // Simulate sending email notification or logging cleanly without exposing PII
    const referenceId = `KM-MSG-${Date.now().toString().slice(-6)}`;

    console.log(`[Contact Form Received] Ref: ${referenceId}, Topic: ${topic}, From: ${fullName} <${email}>`);

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will get back to you shortly.",
      referenceId,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error handling your message." },
      { status: 500 }
    );
  }
}
