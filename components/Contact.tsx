'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socialLinks = [
    { icon: '𝕱', label: 'GitHub', url: ' https://github.com/zainabtcs27-crypto' },
    { icon: '🔗', label: 'LinkedIn', url: 'https://www.linkedin.com/in/zainab-tariq-3a1580388' },
    { icon: '📧', label: 'Email', url: 'mailto:zainabt.cs27@gmail.com' },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
              />
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 text-sm mt-2">
                  ✓ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[var(--muted-foreground)] mb-2">Email</p>
                <a
                  href="mailto:your@email.com"
                  className="text-lg font-medium text-[var(--primary)] hover:opacity-80"
                >
                  zainabt.cs27@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[var(--muted-foreground)] mb-2">Location</p>
                <p className="text-lg font-medium">Lahore, Pakistan</p>
              </div>
              <div>
                <p className="text-[var(--muted-foreground)] mb-3">
                  Follow me on social
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-bold hover:opacity-80 transition-opacity"
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
