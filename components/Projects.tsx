export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Retail Superstore (Data Analysis)',
      description: 'Worked on a Retail Superstore Database project involving data pre-processing, cleaning, and transformation to improve data quality and usability. Handled missing values, removed duplicates, corrected inconsistencies, and organised structured data for accurate analysis and reporting. Demonstrated strong skills in database management, data handling, and problem-solving using modern data processing techniques.',
      tags: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      link: 'https://github.com/zainabtcs27-crypto/Project/blob/main/Retail_Superstore_Dataset_Analysis.ipynb',
    },
    {
      id: 2,
      title: 'Flower and Bouquet Delivery App',
      description: 'Designed a Flower Bouquet Delivery App UI in Figma with complete user flow including login, product browsing, cart, and profile screens.',
      tags: ['Figma', 'UI/UX Design', 'Prototyping'],
      link: 'https://www.figma.com/design/Bx6NDpApuMjSuYag7ogvio/flower-and-bouquet-delivery-app?node-id=192-349&t=Wicd35OW6KNRBHKw-1',
    },
    {
      id: 3,
      title: 'Stop Watch',
      description: 'Designed and developed an interactive Time Tools web application with features like stopwatch, countdown timer, calendar, and world clock, emphasizing responsive design and real-time updates using JavaScript.',
      tags: ['React', 'OpenAI API', 'Express', 'MongoDB'],
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social accounts.',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'AWS'],
      link: '#',
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking with workout routines.',
      tags: ['React Native', 'Firebase', 'Node.js'],
      link: '#',
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Complete LMS with video streaming and interactive courses.',
      tags: ['Next.js', 'PostgreSQL', 'Video.js', 'Docker'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="card cursor-pointer group"
            >
              <div className="h-40 bg-[var(--primary-light)] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)]">
                {project.title}
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-[var(--border)] text-[var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
