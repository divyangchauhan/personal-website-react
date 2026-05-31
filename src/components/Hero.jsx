export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-name">
      <div className="container">
        <h1 className="hero-name" id="hero-name">Divyang Chauhan</h1>
        <p className="hero-tagline">
          Backend engineer specializing in distributed systems, scalable APIs, and getting things shipped.
        </p>
        <p className="hero-description">
          I build the backend systems that keep products running —{' '}
          <em>event-driven architectures</em>, <em>serverless infrastructure</em>,
          and APIs that hold up under real workloads.
          Currently shipping blockchain infrastructure; on the side
          building <em>ResumeForge</em>, a resume intelligence tool
          because job hunting deserved better tooling.
          Looking for my next role at a startup where the engineering
          problems are still being figured out.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#projects">View Projects</a>
          <a className="btn-secondary" href="#contact">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
