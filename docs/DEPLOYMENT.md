Deployment checklist for Vercel

- Ensure the production database connection string is set in Vercel project settings:
  - Key: `DATABASE_URL`
  - Value: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE` (include any query params required by your provider)

Build command (Vercel default): runs `package.json` `build` script. To avoid failing builds when a database is not configured for preview deployments, the repo now uses a small helper script that always generates the Prisma client and only runs migrations when `DATABASE_URL` is present.

Recommended build (already configured):

```bash
node scripts/prisma-build.js && next build
```

Notes:
- The helper runs `npx prisma generate` unconditionally.
- It runs `npx prisma migrate deploy` only when `DATABASE_URL` is set in the environment — this prevents Vercel preview builds from failing when you don't want to apply migrations there.
- For production, set `DATABASE_URL` in Vercel and migrations will run during the build step. If you prefer to run migrations out-of-band, run `npx prisma migrate deploy` from CI or manually before promoting.

- Recommended environment variables in Vercel:
  - `DATABASE_URL` (required)
  - Any external API keys used by the app

- Troubleshooting:
  - Check Vercel function logs for `waitlist api error` or `health check error` to see the underlying error stack.
  - Use the `/api/health` endpoint to quickly verify DB connectivity from a running deployment.
