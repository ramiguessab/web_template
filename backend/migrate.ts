import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { db } from '@database'

migrate(db, { migrationsFolder: './backend/migrations' })
    .then(() => {
        console.log('migrations finished succesfully')
    })
    .catch((err) => {
        console.error(err)
    })
