import * as dotenv from 'dotenv'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

dotenv.config()

const schema = {}

export const db = drizzle(sql, { schema })
