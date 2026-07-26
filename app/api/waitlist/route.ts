"use server";

import { NextResponse } from "next/server";
import { z } from "zod";
import { addEntry, findByEmail } from "@/services/waitlist.service";

const bodySchema = z.object({
  fullName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phoneNumber: z.string().trim().optional().or(z.literal("")),
  role: z.enum(["customer", "artisan"]),
  location: z.string().trim().min(2),
  trade: z.string().trim().optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parse = bodySchema.safeParse(json);
    if (!parse.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parse.error.flatten() },
        { status: 422 },
      );
    }

    const { fullName, email, phoneNumber, role, location, trade } = parse.data;

    // Duplicate prevention
    const existing = await findByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "Email already on the waitlist" },
        { status: 409 },
      );
    }

    // Insert
    const newEntry = await addEntry({
      fullName,
      email,
      phoneNumber,
      role,
      location,
      trade,
    });

    return NextResponse.json(
      { success: true, entry: newEntry },
      { status: 201 },
    );
  } catch (err) {
    console.error("waitlist api error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
