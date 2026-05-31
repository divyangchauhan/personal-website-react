const LINKS = [
  {
    service: 'email',
    label: 'chauhan.divyang@gmail.com',
    href: 'mailto:chauhan.divyang@gmail.com',
    arrow: '→',
    ariaLabel: 'Send email to chauhan.divyang@gmail.com',
    external: false,
  },
  {
    service: 'github',
    label: 'divyangchauhan',
    href: 'https://github.com/divyangchauhan',
    arrow: '↗',
    ariaLabel: 'GitHub profile, divyangchauhan (opens in new tab)',
    external: true,
  },
  {
    service: 'linkedin',
    label: 'divyangchauhan',
    href: 'https://linkedin.com/in/divyangchauhan',
    arrow: '↗',
    ariaLabel: 'LinkedIn profile, divyangchauhan (opens in new tab)',
    external: true,
  },
  {
    service: 'resume',
    label: 'Download PDF',
    href: '/assets/Divyang Chauhan Software Engineer.pdf',
    arrow: '↓',
    ariaLabel: 'Download resume PDF (opens in new tab)',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section-label">04 / Contact</p>
        <h2 id="contact-heading" className="sr-only">Contact</h2>
        <p className="contact-intro">
          If you're building something interesting and need a backend engineer
          who can move fast and own large parts of the stack — let's talk.
        </p>

        <div className="contact-links" role="list">
          {LINKS.map(({ service, label, href, arrow, ariaLabel, external }) => (
            <a
              key={service}
              className="contact-row"
              href={href}
              role="listitem"
              aria-label={ariaLabel}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-row-left">
                <span className="contact-service">{service}</span>
                <span className="contact-label">{label}</span>
              </span>
              <span className="contact-arrow" aria-hidden="true">{arrow}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
