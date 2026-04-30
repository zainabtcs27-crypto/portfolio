export default function About() {
  return (
    <section id="about" className="section bg-[var(--secondary)]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4 text-[var(--muted-foreground)] leading-relaxed">
              Recent Computer Science graduate with a strong interest in Python programming, AI, and Machine Learning.             </p>
            <p className="text-lg mb-4 text-[var(--muted-foreground)] leading-relaxed">
              Possesses foundational knowledge gained through academic projects and practical learning in developing software solutions, data analysis, and basic machine learning models. Strong problem-solving, analytical, and teamwork skills with a passion for learning new technologies.            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              Eager to begin a professional career and contribute technical skills in a growth-oriented organization.            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Projects Completed', value: '3+' },
              { label: 'Years Experience', value: '0+' },
              { label: 'Happy Clients', value: '0+' },
              { label: 'Code Commits', value: '1000+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card text-center"
              >
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
