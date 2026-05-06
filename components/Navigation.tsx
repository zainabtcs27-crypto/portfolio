'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {

  const [darkMode, setDarkMode] = useState(true)

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl 
    bg-black/70 border-b border-white/10 shadow-lg">

      <div className="container mx-auto flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <Link
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-100 rounded-full transition 
              hover:text-white hover:bg-rose-500/30 hover:shadow-md hover:shadow-rose-500/20"
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full text-sm font-medium 
            border border-white/10 bg-white/5 text-white
            hover:bg-rose-500/20 hover:border-rose-400/40 transition"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* Mobile Button */}
          <button className="md:hidden text-white text-2xl hover:text-rose-400 transition">
            ☰
          </button>

        </div>

      </div>
    </nav>
  )
}