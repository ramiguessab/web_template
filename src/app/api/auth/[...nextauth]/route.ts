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
        jwt(params) {
            const { account, token, user, profile, session, trigger } = params //eslint-disable-line

            return token
        },
        redirect({ baseUrl, url }) {
            console.log('\n REDIRECT---------')
            console.log('baseUrl', baseUrl)
            console.log('url', url)
            return baseUrl
        },
        session({ newSession, session, token, trigger, user }) {
            console.log('\n SESSION---------')
            console.log('newSession', newSession)
            console.log('session', session)
            console.log('token', token)
            console.log('trigger', trigger)
            console.log('user', user)

            return session
        },
        signIn({ account, user, credentials, email, profile }) {
            console.log('\n SIGNIN---------')
            console.log('account', account)
            console.log('user', user)
            console.log('credentials', credentials)
            console.log('email', email)
            console.log('profile', profile)
            return true
        }
    }
}
/* eslint-disable-next-line */
const handler: any = NextAuth(authOptions)

export { handler as GET, handler as POST }
