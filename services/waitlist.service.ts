import { Prisma, type WaitlistEntry as PrismaWaitlistEntry } from '@prisma/client';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

export type WaitlistRole = 'customer' | 'artisan';

export type WaitlistEntry = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: WaitlistRole;
  location: string;
  trade?: string;
  source?: string;
  createdAt: string;
  updatedAt: string;
};

export type WaitlistServiceErrorCode = 'VALIDATION_ERROR' | 'DUPLICATE_EMAIL' | 'INTERNAL_SERVER_ERROR';

export class WaitlistServiceError extends Error {
  constructor(
    public readonly code: WaitlistServiceErrorCode,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'WaitlistServiceError';
  }
}

const waitlistInputSchema = z
  .object({
    fullName: z.string().trim().min(2, 'Please enter your full name.').max(80).transform(sanitizeText),
    email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(254),
    phoneNumber: z
      .string()
      .trim()
      .max(20)
      .optional()
      .or(z.literal(''))
      .transform((value) => optionalSanitizedText(value)),
    role: z.enum(['customer', 'artisan'], { message: 'Please select your role.' }),
    location: z.string().trim().min(2, 'Please enter your location.').max(120).transform(sanitizeText),
    trade: z
      .string()
      .trim()
      .max(100)
      .optional()
      .or(z.literal(''))
      .transform((value) => optionalSanitizedText(value)),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.role === 'artisan' && !value.trade) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['trade'],
        message: 'Please select your service category.',
      });
    }
  });

export type WaitlistEntryInput = z.infer<typeof waitlistInputSchema>;

function sanitizeText(value: string): string {
  return value.replace(/[<>]/g, '').replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim();
}

function optionalSanitizedText(value: string | undefined): string | undefined {
  if (value === undefined || value === '') {
    return undefined;
  }

  return sanitizeText(value);
}

function mapPrismaEntry(entry: PrismaWaitlistEntry): WaitlistEntry {
  return {
    id: entry.id,
    fullName: entry.fullName,
    email: entry.email,
    phoneNumber: entry.phoneNumber ?? undefined,
    role: entry.role as WaitlistRole,
    location: entry.location,
    trade: entry.trade ?? undefined,
    source: entry.source ?? undefined,
    createdAt: entry.createdAt.toISOString(),
    updatedAt: entry.updatedAt.toISOString(),
  };
}

export async function findByEmail(email: string): Promise<WaitlistEntry | null> {
  const entry = await prisma.waitlistEntry.findUnique({
    where: { email },
  });
  return entry ? mapPrismaEntry(entry) : null;
}

export async function createWaitlistEntry(input: unknown): Promise<WaitlistEntry> {
  const parsed = waitlistInputSchema.safeParse(input);
  if (!parsed.success) {
    throw new WaitlistServiceError(
      'VALIDATION_ERROR',
      'Invalid waitlist submission.',
      parsed.error.flatten(),
    );
  }

  const { fullName, email, phoneNumber, role, location, trade } = parsed.data;

  const existing = await findByEmail(email);
  if (existing) {
    throw new WaitlistServiceError('DUPLICATE_EMAIL', 'Email already on the waitlist.');
  }

  try {
    const created = await prisma.waitlistEntry.create({
      data: {
        fullName,
        email,
        phoneNumber: phoneNumber ?? null,
        role,
        location,
        trade: trade ?? null,
        source: 'waitlist',
      },
    });

    return mapPrismaEntry(created);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new WaitlistServiceError('DUPLICATE_EMAIL', 'Email already on the waitlist.');
    }

    throw new WaitlistServiceError('INTERNAL_SERVER_ERROR', 'We could not process your request. Please try again later.');
  }
}
