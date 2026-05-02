export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS'],
      color: 'from-rose-400 to-pink-400',
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      color: 'from-pink-400 to-fuchsia-400',
    },
    {
      name: 'Tools',
      skills: ['Git', 'VS Code'],
      color: 'from-rose-300 to-pink-500',
    },
    {
      name: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Mentoring'],
      color: 'from-fuchsia-400 to-rose-400',
    },
  ]

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] text-white relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-black to-black"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-left">
          My{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* LEFT SIDE INTRO */}
          <div  className="md:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md min-h-[180px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-rose-400">
              What I Work With
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I specialize in building modern web applications using frontend,
              backend, and AI technologies. I continuously improve my skills
              through real-world projects and learning.
            </p>
          </div>

          {/* RIGHT SIDE SKILLS GRID */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">

            {skillCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 
                backdrop-blur-md hover:shadow-rose-500/10 
                hover:border-rose-400/30 transition duration-300"
              >

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-3 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.name}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">

                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-rose-500/10 text-rose-300 border border-rose-400/20
                      hover:bg-rose-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}