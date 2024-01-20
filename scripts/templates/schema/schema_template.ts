/* eslint no-unused-vars: 0  */
import {
    pgTable,
    text,
    varchar,
    boolean,
    bigserial,
    bigint,
    integer,
    pgEnum,
    timestamp
} from 'drizzle-orm/pg-core'

export const schema = pgTable('schema', {
    timestamp: timestamp('timestamp').notNull().defaultNow()
})
