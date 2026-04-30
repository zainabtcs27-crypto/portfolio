export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML/CSS'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'VS Code'],
    },
    {
      name: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Mentoring'],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="card">
              <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[var(--primary-light)] text-[var(--primary)] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
