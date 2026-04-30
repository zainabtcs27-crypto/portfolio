import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--secondary)] border-t border-[var(--border)] py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-[var(--primary)] mb-4">
              Portfolio
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm">
              Customizable student portfolio with beautiful themes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-[var(--muted-foreground)] text-sm mb-2">
              Have a question? Feel free to reach out!
            </p>
            <a href="mailto:your@email.com" className="text-[var(--primary)] font-medium hover:opacity-80">
              zainabt.cs27@email.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted-foreground)]">
          <p>
            © {currentYear} Your Name. All rights reserved. | Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
