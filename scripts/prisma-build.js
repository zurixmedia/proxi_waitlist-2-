const { execSync } = require('child_process');
const { env } = process;

function run(cmd) {
  console.log('> ' + cmd);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  // Always generate the client
  run('npx prisma generate');

  // Only run migrations if a DATABASE_URL is present in the environment
  if (env.DATABASE_URL) {
    console.log('DATABASE_URL detected — running migrations');
    run('npx prisma migrate deploy');
  } else {
    console.log('No DATABASE_URL found — skipping migrations (this prevents build failures in preview environments)');
  }

  process.exit(0);
} catch (err) {
  console.error('prisma build helper failed', err);
  process.exit(1);
}
