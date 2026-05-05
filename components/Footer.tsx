import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-rose-500/10 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-pink-500/10 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">

        {/* TOP SECTION */}
        <div className="text-center mb-12">

          <h3 className="text-2xl font-bold mb-3 
          bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 
          bg-clip-text text-transparent">
            Zainab Tariq
          </h3>

          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Passionate Computer Science graduate focused on building modern web applications and AI-based solutions.
          </p>

        </div>

        {/* NAV LINKS */}
        <div className="flex justify-center flex-wrap gap-6 mb-10 text-sm">

          <a href="#about" className="text-gray-400 hover:text-rose-400 transition">
            About
          </a>

          <a href="#skills" className="text-gray-400 hover:text-pink-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-400 hover:text-fuchsia-400 transition">
            Projects
          </a>

          <a href="#contact" className="text-gray-400 hover:text-rose-300 transition">
            Contact
          </a>

        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4 mb-10">

          <a
            href="https://github.com/zainabtcs27-crypto"
            target="_blank"
            className="px-4 py-2 rounded-full border border-white/10 
            hover:border-rose-400/40 hover:bg-rose-500/10 transition text-sm"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zainab-tariq-3a1580388"
            target="_blank"
            className="px-4 py-2 rounded-full border border-white/10 
            hover:border-pink-400/40 hover:bg-pink-500/10 transition text-sm"
          >
            LinkedIn
          </a>

          <a
            href="mailto:zainabt.cs27@gmail.com"
            className="px-4 py-2 rounded-full border border-white/10 
            hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 transition text-sm"
          >
            Email
          </a>

        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-400/40 to-transparent mb-6"></div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm">
          © {currentYear} Zainab Tariq — Built with ❤️ using modern web technologies
        </div>

      </div>
    </footer>
  )
}