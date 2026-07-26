import { WaitlistEntry as PrismaWaitlistEntry } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export type WaitlistEntry = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: 'customer' | 'artisan';
  location: string;
  trade?: string;
  source?: string;
  createdAt: string;
  updatedAt: string;
};

function mapPrismaEntry(entry: PrismaWaitlistEntry): WaitlistEntry {
  return {
    id: entry.id,
    fullName: entry.fullName,
    email: entry.email,
    phoneNumber: entry.phoneNumber ?? undefined,
    role: entry.role as 'customer' | 'artisan',
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

export async function addEntry(
  entry: Omit<WaitlistEntry, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<WaitlistEntry> {
  const created = await prisma.waitlistEntry.create({
    data: {
      fullName: entry.fullName,
      email: entry.email,
      phoneNumber: entry.phoneNumber ?? null,
      role: entry.role,
      location: entry.location,
      trade: entry.trade ?? null,
      source: entry.source ?? 'waitlist',
    },
  });
  return mapPrismaEntry(created);
}
