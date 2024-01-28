import { authOptions } from '@next-api/auth/[...nextauth]/route'
import { getServerSession, NextAuthOptions } from 'next-auth'

export async function getDbSession() {
    return getServerSession(authOptions as NextAuthOptions)
}
