export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'NCBA&E',
      year: '2023 - 2027',
      details: 'Gulberg III 40E, Lahore, Pakistan',
    },
    {
      id: 2,
      degree: 'Certified Web Developer',
      school: 'Online Learning Platform',
      year: '2020 - 2021',
      details: 'Completed comprehensive web development bootcamp',
    },
    {
      id: 3,
      degree: 'Advanced React Specialization',
      school: 'Tech Academy',
      year: '2022',
      details: 'Mastered advanced React patterns and hooks',
    },
  ]

  return (
    <section id="education" className="section bg-[var(--secondary)]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--muted-foreground)] mt-1">
                    {edu.school}
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--foreground)] whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <p className="text-[var(--muted-foreground)]">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
