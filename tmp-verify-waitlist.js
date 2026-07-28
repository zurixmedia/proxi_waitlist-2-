const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const rows = await prisma.waitlistEntry.findMany({
    where: {
      OR: [
        { email: { contains: 'playwright' } },
        { email: { contains: 'test.user' } },
        { fullName: { contains: 'Playwright' } },
        { fullName: { contains: 'Test User' } },
      ],
    },
    orderBy: { createdAt: 'desc' },
  });

  console.log(JSON.stringify(rows, null, 2));
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
