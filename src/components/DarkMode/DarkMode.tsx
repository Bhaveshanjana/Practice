"use client"

import React, { useEffect } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'

// Define the possible theme values for better type safety
type Theme = 'light' | 'dark';

const DarkMode = () => {
    // Initialize theme from localStorage, defaulting to "light" if not found
    // or if localStorage is not available (e.g., during SSR initial render).
    const [theme, setTheme] = React.useState<Theme>(() => {
        // This function only runs once during the initial render.
        // It helps prevent errors on the server side where localStorage is not defined.
        if (typeof window !== 'undefined' && localStorage.getItem("theme")) {
            const storedTheme = localStorage.getItem("theme");
            // Ensure the stored theme is one of the valid types, otherwise default to "light"
            return (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 'light';
        }
        return "light";
    });

    useEffect(() => {
        // Access document.documentElement only when on the client side
        // and after the component has mounted.
        const element = document.documentElement;

        if (theme === "dark") {
            element.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove('dark');
            localStorage.setItem("theme", 'light');
        }
    }, [theme]); 

    return (
        <div>
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="cursor-pointer rounded-full text-gray-700 dark:text-white transition-all duration-200 hover:text-blue-600"
            >
                {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
        </div>
    );
}

export default DarkMode;