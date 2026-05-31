const SKILLS = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'OutSystems'],
  },
  {
    category: 'Frameworks',
    items: ['NestJS', 'Django', 'Django REST', 'Express', 'Angular', 'React', 'Next.js', 'GraphQL', 'CASL.js', 'TypeORM'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS Lambda', 'AWS ECS', 'S3', 'RDS', 'CloudFront', 'Cognito', 'Docker', 'Terraform'],
  },
  {
    category: 'Tools',
    items: ['Git', 'CI/CD', 'Apache Kafka', 'Celery', 'Microservices', 'REST APIs', 'Event-Driven Arch', 'Cypress'],
  },
  {
    category: 'Web3',
    items: ['Ethers.js', 'Viem', 'The Graph', 'Multi-chain'],
  },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label">03 / Skills</p>
        <h2 id="skills-heading" className="sr-only">Skills</h2>
        <div className="skills-grid" role="list">
          {SKILLS.map(({ category, items }) => (
            <div className="skill-row" role="listitem" key={category}>
              <span className="skill-category">{category}</span>
              <div className="skill-items">
                {items.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
