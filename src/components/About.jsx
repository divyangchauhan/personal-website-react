export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label">01 / About</p>
        <h2 id="about-heading" className="sr-only">About</h2>
        <div className="about-body">
          <p>
            I'm a backend engineer with five years of experience building
            distributed systems, scalable APIs, and SaaS products from the
            ground up. My work has ranged from serverless infrastructure at a
            cybersecurity startup — cutting infrastructure costs by{' '}
            <strong>$200K/year</strong> and reducing system downtime by{' '}
            <strong>90%</strong> — to blockchain event pipelines at Kleros, where I
            re-architected a monolith into horizontally scalable services.
          </p>
          <p>
            Outside of my day job, I'm genuinely excited about AI — not just
            as a buzzword but as a practical lever. I use AI tools heavily in
            my own workflow, I'm constantly turning over ideas for where AI
            can make real products more useful, and that curiosity feeds
            directly into the SaaS products I'm building on the side.
          </p>
          <p>
            I'm actively looking for a software engineering role at a
            product-focused startup — as an individual contributor or
            engineering lead — somewhere the technical problems are still
            being defined and good engineering decisions actually move the
            needle.
          </p>
        </div>

        <div className="currently-building">
          <span className="cb-label">Currently building</span>
          <p>
            <code>ResumeForge</code> — an AI-powered resume intelligence tool that helps job seekers tailor their resume for specific roles.
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <code>AI Penetration Tester</code> — automates security reconnaissance, discovers vulnerabilities, and reviews code.
          </p>
        </div>
      </div>
    </section>
  )
}
