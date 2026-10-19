import { NextResponse } from "next/server";
import { z } from "zod";

const deleteRequestSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  registeredIdentifier: z
    .string()
    .min(5, "Registered mobile number or email required"),
  reason: z.string().optional(),
  permanentConsent: z
    .boolean()
    .refine((val) => val === true, "You must confirm that deletion is permanent"),
  honeypot: z.string().max(0, "Bot detected"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = deleteRequestSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { reason } = result.data;

    // Generate unique verification reference number
    const referenceId = `DEL-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Clean log without leaking mobile numbers/passwords
    console.log(
      `[Account Deletion Request Created] Ref: ${referenceId}, Reason: ${reason || "Not specified"}`
    );

    return NextResponse.json({
      success: true,
      message:
        "Your account deletion request has been registered. Our verification team will verify ownership and permanently erase your account data within 72 hours.",
      referenceId,
      expectedTimeline: "Within 72 hours (backup cycle purge in 30 days)",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error processing deletion request." },
      { status: 500 }
    );
  }
}
