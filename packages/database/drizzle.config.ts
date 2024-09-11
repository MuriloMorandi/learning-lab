import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    schema: "./src/schema.ts",
    out: "./drizzle",
    dialect: 'sqlite',
    driver: 'turso',
    dbCredentials: {
      url: process.env.DATABASE_URL|| '',
      authToken:  process.env.DATABASE_AUTH || ''
    },
    verbose: true,
    strict: true,
})