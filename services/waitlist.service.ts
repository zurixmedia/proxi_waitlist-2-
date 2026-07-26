import fs from "fs/promises";
import path from "path";

export type WaitlistEntry = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: "customer" | "artisan";
  location: string;
  trade?: string;
  createdAt: string;
};

const DB_DIR = path.resolve(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "waitlist.json");

async function ensureDb(): Promise<void> {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify([]));
    }
  } catch (err) {
    // Let errors bubble to caller
    throw err;
  }
}

export async function readAll(): Promise<WaitlistEntry[]> {
  await ensureDb();
  const raw = await fs.readFile(DB_FILE, "utf-8");
  try {
    const data = JSON.parse(raw || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function findByEmail(
  email: string,
): Promise<WaitlistEntry | null> {
  const all = await readAll();
  const found = all.find((e) => e.email.toLowerCase() === email.toLowerCase());
  return found ?? null;
}

export async function addEntry(
  entry: Omit<WaitlistEntry, "id" | "createdAt">,
): Promise<WaitlistEntry> {
  await ensureDb();
  const all = await readAll();
  const id = String(Date.now()) + Math.random().toString(36).slice(2, 8);
  const createdAt = new Date().toISOString();
  const newEntry: WaitlistEntry = { id, createdAt, ...entry };
  all.push(newEntry);
  await fs.writeFile(DB_FILE, JSON.stringify(all, null, 2));
  return newEntry;
}
