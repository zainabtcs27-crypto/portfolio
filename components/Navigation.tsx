import Link from 'next/link'

export default function Navigation() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] z-40 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link href="#" className="font-bold text-xl text-[var(--primary)]">
          Portfolio
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  )
}
