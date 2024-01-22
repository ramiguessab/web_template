'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

interface LoginProps {
    children: React.ReactNode
}

export default function Login({ children }: LoginProps) {
    return <button onClick={() => signIn('google')}>{children}</button>
}
