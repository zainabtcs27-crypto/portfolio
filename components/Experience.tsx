export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Tech Company Inc',
      period: '2023 - Present',
      description: 'Led development of key features and mentored junior developers.',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      description: 'Built and maintained multiple client projects with modern tech stack.',
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Startup Hub',
      period: '2021 - 2022',
      description: 'Started my career learning full stack development and best practices.',
    },
  ]

  return (
    <section id="experience" className="section bg-[var(--secondary)]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 w-1 h-full bg-[var(--border)]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`md:flex gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="md:w-1/2" />
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--primary)] transform -translate-x-1.5 md:-translate-x-2" style={{ top: `${index * 200 + 60}px` }} />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className="card">
                    <h3 className="text-xl font-bold mb-1 text-[var(--primary)]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm font-medium text-[var(--foreground)] mb-3">
                      {exp.period}
                    </p>
                    <p className="text-[var(--muted-foreground)]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
