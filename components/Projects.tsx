export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Retail Superstore (Data Analysis)',
      description: 'Worked on a Retail Superstore Database project involving data pre-processing, cleaning, and transformation to improve data quality and usability.',
      tags: ['Python', 'Pandas', 'NumPy', 'ML'],
      link: 'https://github.com/zainabtcs27-crypto/Project/blob/main/Retail_Superstore_Dataset_Analysis.ipynb',
    },
    {
      id: 2,
      title: 'Flower & Bouquet App',
      description: 'Designed a complete Flower Delivery App UI in Figma including user flow, product pages, and cart system.',
      tags: ['Figma', 'UI/UX', 'Design'],
      link: 'https://www.figma.com/design/Bx6NDpApuMjSuYag7ogvio/flower-and-bouquet-delivery-app',
    },
    {
      id: 3,
      title: 'Stop Watch App',
      description: 'Built a Time Tools web app with stopwatch, timer, and world clock using JavaScript and responsive UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://stop-watch-livid-five.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-black to-black"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-left">
          Featured{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 
              backdrop-blur-md transition duration-300 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10 hover:border-rose-400/30"
            >

              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 rounded-t-2xl"></div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-rose-400 transition">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-rose-500/10 text-rose-300 border border-rose-400/20
                    hover:bg-rose-500/20 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="text-sm text-rose-400 font-medium group-hover:underline">
                View Project →
              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  )
}