import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Lazily initialize PrismaClient to avoid executing it at module import time.
 * This prevents build-time failures when Next.js collects page data during build
 * (e.g. when environment variables like DATABASE_URL are not available).
 */
export function getPrisma(): PrismaClient {
  if (globalThis.prisma) return globalThis.prisma;

  const client = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = client;
  }

  return client;
}
