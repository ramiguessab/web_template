import React from 'react'

import { getServerSession } from 'next-auth'
import SignOut from '@components/visual/Auth/SignOut'
import Login from '@components/visual/Auth/Login'

interface AuthButtonProps {
    onLoggedIn: React.ReactNode
    onLoggedOut: React.ReactNode
}

export default async function AuthButton({
    onLoggedIn,
    onLoggedOut
}: AuthButtonProps) {
    const session = await getServerSession()
    if (session === null) {
        return <Login>{onLoggedOut}</Login>
    } else {
        return <SignOut>{onLoggedIn}</SignOut>
    }
}
