export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'NCBA&E',
      year: 'Oct 2023 - Jun 2027',
      details: 'Gulberg III, Lahore, Pakistan',
    },
    {
      id: 2,
      degree: 'Certified Artificial Intelligence',
      school: 'NAVTTC',
      year: 'Feb 2026 - May 2026',
      details: 'Cyber Pulse Institute of Technology',
    },
    {
      id: 3,
      degree: 'Certified Artificial Intelligence',
      school: 'Online Platform',
      year: 'Mar 2026 - Jun 2026',
      details: 'Digi Skills',
    },
  ]

  return (
    <section id="education" className="py-24 bg-[#0a0a0a] text-white relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-black to-black"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
          My{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-rose-500/20 ml-4 space-y-10">

          {education.map((edu) => (
            <div key={edu.id} className="ml-6 relative">

              {/* Dot */}
              <span className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-rose-500 shadow-lg shadow-rose-500/40"></span>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 
              backdrop-blur-md hover:border-rose-400/30 
              hover:shadow-lg hover:shadow-rose-500/10 transition duration-300">

                {/* Top Row */}
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">

                  <div>
                    <h3 className="text-xl font-semibold text-rose-400">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {edu.school}
                    </p>
                  </div>

                  <span className="text-xs bg-rose-500/10 text-rose-300 px-3 py-1 rounded-full border border-rose-400/20">
                    {edu.year}
                  </span>

                </div>

                {/* Details */}
                <p className="text-gray-400 text-sm mt-2">
                  {edu.details}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}