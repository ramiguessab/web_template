import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv"
dotenv.config()

export default defineConfig({
    schema: "./backend/schemas/*",
    out: "./backend/migrations",
    driver: "pg",
    dbCredentials: { connectionString: process.env.POSTGRES_URL! },
    verbose: true,
    strict: true,
    breakpoints: true,
})
