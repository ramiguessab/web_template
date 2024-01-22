'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

interface SignOutProps {
    children: React.ReactNode
}

export default function SignOut({ children }: SignOutProps) {
    return <button onClick={() => signOut()}>{children}</button>
}
