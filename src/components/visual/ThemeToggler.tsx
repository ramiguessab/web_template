'use client'
import React from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggler() {
    const { setTheme, theme, systemTheme } = useTheme()

    return (
        <button
            onClick={() => {
                if (typeof theme === 'undefined') {
                    if (systemTheme === 'light') {
                        setTheme('dark')
                    } else {
                        setTheme('light')
                    }
                } else if (theme === 'light') {
                    setTheme('dark')
                } else {
                    setTheme('light')
                }
            }}
            className="text-white"
        >
            Toggle
        </button>
    )
}
