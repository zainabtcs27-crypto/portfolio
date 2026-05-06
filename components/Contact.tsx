'use client'

import { useState } from 'react'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-rose-500/10 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Let’s Build{" "}
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>

            <p className="text-gray-400 max-w-md">
              I’m open to internships, freelance work, and collaborations.
              If you have something exciting — let’s talk.
            </p>

            {/* FLOATING CARDS */}
            <div className="mt-10 space-y-4">

              <a
                href="mailto:zainabt.cs27@gmail.com"
                className="block text-white bg-white/5 border border-white/10 p-4 rounded-xl 
                backdrop-blur-md hover:border-rose-400/40 transition"
              >
                📧 zainabt.cs27@gmail.com
              </a>

              <div className="text-white bg-white/5 border border-white/10 p-4 rounded-xl 
              backdrop-blur-md hover:border-pink-400/40 transition ml-6">
                📍 Lahore, Pakistan
              </div>

              <a
                href="https://github.com/zainabtcs27-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white bg-white/5 border border-white/10 p-4 rounded-xl 
                backdrop-blur-md hover:border-fuchsia-400/40 transition ml-12"
              >
                💻 GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/zainab-tariq-3a1580388"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white bg-white/5 border border-white/10 p-4 rounded-xl 
                backdrop-blur-md hover:border-rose-300/40 transition ml-16"
              >
                🔗 LinkedIn Profile
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 blur-2xl rounded-2xl"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

              <h3 className="text-2xl font-semibold mb-6 text-rose-400">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 
                  text-white placeholder-gray-500 focus:outline-none focus:border-rose-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 
                  text-white placeholder-gray-500 focus:outline-none focus:border-rose-400"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 
                  text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 resize-none"
                />

                {/* 🔥 PREMIUM BUTTON */}
                <button
                  type="submit"
                  className="w-full relative overflow-hidden py-3 rounded-xl font-semibold text-white
                  bg-black/40 border border-white/10 backdrop-blur-md
                  shadow-lg shadow-rose-500/10
                  transition-all duration-300 group
                  hover:border-rose-400/40 hover:shadow-rose-500/30 hover:scale-[1.03]
                  active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                     Send Message
                  </span>

                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                  {/* Glow */}
                  <span className="absolute inset-0 rounded-xl bg-rose-500/10 opacity-0 group-hover:opacity-100 transition"></span>
                </button>

                {submitted && (
                  <p className="text-rose-400 text-sm mt-2">
                    ✓ Message sent successfully!
                  </p>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}