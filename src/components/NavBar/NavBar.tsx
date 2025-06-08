"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }
    return (
        <nav className="w-full bg-gray-200 shadow-lg dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center -space-x-2.5">
                                <span>
                                    <span className="px-2 py-0.5 bg-transparent"></span>To-Do
                                </span>
                            </h1>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-lg bg-[#6a7bd1]  dark:bg-[#6a7bd1] text-white hover:bg-[#6975b3] dark:hover:bg-[#6975b3] transition-colors"
                        >
                            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar