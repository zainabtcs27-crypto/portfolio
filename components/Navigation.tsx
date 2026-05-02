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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg">

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
              className="px-4 py-2 text-sm font-medium text-gray-100 rounded-full transition duration-300 hover:text-white hover:bg-rose-500/30 hover:shadow-md hover:shadow-rose-500/20"
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white text-2xl hover:text-rose-400 transition">
          ☰
        </button>

      </div>
    </nav>
  )
}