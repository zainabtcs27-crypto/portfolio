"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {

  const roles = ["Python Developer", "AI Enthusiast", "Machine Learning Learner"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (index === roles.length) return

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
      setText(roles[index].substring(0, subIndex))
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-transparent to-black"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Intro */}
        <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/5 border border-white/10 rounded-full">
          👋 Welcome to my portfolio
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Zainab Tariq
          </span>
        </h1>

        {/* Typing */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-10">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          I create intelligent solutions using AI and Machine Learning, 
          focusing on building impactful and user-friendly applications.
        </p>

        {/* BUTTONS (MATCHED STYLE) */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* View Projects */}
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl border border-rose-400/30 
            text-rose-300 hover:text-white hover:bg-rose-500/20 
            transition duration-300"
          >
            🚀 View Projects
          </Link>

          {/* Contact */}
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl border border-rose-400/30 
            text-rose-300 hover:text-white hover:bg-rose-500/20 
            transition duration-300"
          >
            📩 Contact Me
          </Link>

        </div>

        {/* Skills */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {["Python", "AI", "ML", "Data Science"].map((item) => (
            <span 
              key={item} 
              className="px-3 py-1 text-sm bg-rose-400/10 text-rose-300 
              border border-rose-400/20 rounded-full hover:bg-rose-400/20 transition"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}