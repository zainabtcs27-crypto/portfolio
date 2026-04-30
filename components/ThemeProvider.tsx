'use client'

import { useEffect, useState } from 'react'

const THEMES = [
  { id: 'blue', name: 'Blue' },
  { id: 'purple', name: 'Purple' },
  { id: 'green', name: 'Green' },
  { id: 'orange', name: 'Orange' },
  { id: 'red', name: 'Red' },
  { id: 'pink', name: 'Pink' },
  { id: 'cyan', name: 'Cyan' },
  { id: 'indigo', name: 'Indigo' },
]

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<string>('blue')
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('portfolio-theme') || 'blue'
    const savedDarkMode = localStorage.getItem('portfolio-dark') === 'true'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setTheme(savedTheme)
    setIsDark(savedDarkMode || prefersDark)
  }, [])

  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('portfolio-dark', isDark ? 'true' : 'false')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark, mounted])

  if (!mounted) return <>{children}</>

  return (
    <>
      {children}
      <ThemeSwitcher
        theme={theme}
        isDark={isDark}
        onThemeChange={setTheme}
        onDarkModeChange={setIsDark}
        themes={THEMES}
      />
    </>
  )
}

function ThemeSwitcher({
  theme,
  isDark,
  onThemeChange,
  onDarkModeChange,
  themes,
}: {
  theme: string
  isDark: boolean
  onThemeChange: (theme: string) => void
  onDarkModeChange: (isDark: boolean) => void
  themes: Array<{ id: string; name: string }>
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[var(--primary)] text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center font-bold text-lg"
        aria-label="Open theme settings"
      >
        ⚙️
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-[var(--secondary)] border border-[var(--border)] rounded-lg shadow-xl p-4 min-w-max">
          <div className="space-y-4">
            {/* Dark Mode Toggle */}
            <div>
              <p className="text-sm font-medium mb-2">Dark Mode</p>
              <button
                onClick={() => onDarkModeChange(!isDark)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  isDark
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--border)] text-[var(--foreground)]'
                }`}
              >
                {isDark ? '🌙 On' : '☀️ Off'}
              </button>
            </div>

            {/* Theme Colors */}
            <div>
              <p className="text-sm font-medium mb-2">Color Theme</p>
              <div className="grid grid-cols-4 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onThemeChange(t.id)
                      setIsOpen(false)
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      theme === t.id
                        ? 'border-[var(--foreground)] scale-110'
                        : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor: getThemeColor(t.id),
                    }}
                    title={t.name}
                    aria-label={`${t.name} theme`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function getThemeColor(theme: string): string {
  const colors: Record<string, string> = {
    blue: '#2563eb',
    purple: '#9333ea',
    green: '#16a34a',
    orange: '#ea580c',
    red: '#dc2626',
    pink: '#db2777',
    cyan: '#0891b2',
    indigo: '#4f46e5',
  }
  return colors[theme] || colors.blue
}
