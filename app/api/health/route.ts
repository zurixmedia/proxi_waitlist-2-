import { NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';

export async function GET() {
  try {
    const prisma = getPrisma();
    // simple connectivity check
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('health check error', err);
    return NextResponse.json({ ok: false, error: 'DB connection failed' }, { status: 503 });
  }
}
