export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* TOP GRADIENT (same as Skills) */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-black to-black"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
          About{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 text-left shadow-lg hover:shadow-rose-500/10 transition">

            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              I am <span className="text-rose-400 font-semibold">Zainab Tariq</span>,
              a Computer Science graduate passionate about Python programming, AI and Machine Learning.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Possesses foundational knowledge gained through academic projects and practical learning in developing software solutions, data analysis, and basic machine learning models. Strong problem-solving, analytical, and teamwork skills with a passion for learning new technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Eager to begin a professional career and contribute technical skills in a growth-oriented organization.
            </p>

          </div>

          {/* RIGHT SIDE STATS */}
          <div className="flex flex-col justify-center gap-4 max-w-sm mx-auto w-full">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center 
              transition-all duration-300 hover:bg-rose-500/10 hover:border-rose-400/40 
              hover:shadow-lg hover:shadow-rose-500/20 cursor-pointer">

              <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                10+
              </h3>
              <p className="text-gray-400 text-sm mt-2">Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center 
              transition-all duration-300 hover:bg-rose-500/10 hover:border-rose-400/40 
              hover:shadow-lg hover:shadow-rose-500/20 cursor-pointer">

              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                500+
              </h3>
              <p className="text-gray-400 text-sm mt-2">Commits</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}