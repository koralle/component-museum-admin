import { defineConfig } from "drizzle-kit"
import type { Config } from "drizzle-kit"

export default defineConfig({
  dialect: 'turso',
  schema: './src/db/schema',
  out: './migrations',
  dbCredentials: {
    url: process.env['TURSO_DATABASE_URL']!,
    authToken: process.env['TURSO_AUTH_TOKEN']!,
  }
}) satisfies Config
