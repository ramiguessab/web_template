import React from 'react'

interface ShowIfProps {
    when: boolean[]
    fallback?: React.ReactNode
    children: React.ReactNode
}

export default function Show({ when, children, fallback }: ShowIfProps) {
    if (when.find((condition) => condition === true)) {
        return children
    } else {
        return fallback
    }
}
