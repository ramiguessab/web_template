import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!
        })
    ],
    callbacks: {
        jwt({ token }) {
            return token
        },
        redirect({ baseUrl }) {
            return baseUrl
        },
        session({ session }) {
            return session
        },
        signIn() {
            return true
        }
    }
}
/* eslint-disable-next-line */
const handler: any = NextAuth(authOptions)

export { handler as GET, handler as POST }
