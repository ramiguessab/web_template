'use client'
import React from 'react'
import { SessionProvider as NextSessionProvider } from 'next-auth/react'

interface SessionProviderProps {
    children: React.ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
    return <NextSessionProvider>{children}</NextSessionProvider>
}
