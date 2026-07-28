Deployment checklist for Vercel

- Ensure the production database connection string is set in Vercel project settings:
  - Key: `DATABASE_URL`
  - Value: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE` (include any query params required by your provider)

- Build command (Vercel default): runs `package.json` `build` script. We added Prisma steps to the build so migrations will run:

  ```bash
  npx prisma generate && npx prisma migrate deploy && next build
  ```

- If you prefer to run migrations outside the build step (recommended for controlled deploys), remove `prisma migrate deploy` from the build and run migrations from CI or manually before promoting a deployment.

- Recommended environment variables in Vercel:
  - `DATABASE_URL` (required)
  - Any external API keys used by the app

- Troubleshooting:
  - Check Vercel function logs for `waitlist api error` or `health check error` to see the underlying error stack.
  - Use the `/api/health` endpoint to quickly verify DB connectivity from a running deployment.
