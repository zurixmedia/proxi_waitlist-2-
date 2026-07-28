'use server';

import { NextResponse } from 'next/server';
import { createWaitlistEntry, WaitlistServiceError } from '@/services/waitlist.service';

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INVALID_JSON',
          message: 'Request body must be valid JSON.',
        },
      },
      { status: 400 },
    );
  }

  try {
    const entry = await createWaitlistEntry(body);
    return NextResponse.json(
      {
        success: true,
        data: { entry },
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof WaitlistServiceError) {
      const status =
        error.code === 'VALIDATION_ERROR' ? 422 : error.code === 'DUPLICATE_EMAIL' ? 409 : 500;

      return NextResponse.json(
        {
          success: false,
          error: {
            code: error.code,
            message: error.message,
            details: error.details,
          },
        },
        { status },
      );
    }

    console.error('waitlist api error', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: 'We could not process your request. Please try again later.',
        },
      },
      { status: 500 },
    );
  }
}
