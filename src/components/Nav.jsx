import { useEffect, useState } from 'react'

const SECTIONS = ['hero', 'about', 'projects', 'skills', 'contact']

export default function Nav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 80
      let current = SECTIONS[0]
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav aria-label="Site navigation">
      <div className="nav-inner">
        <a className="nav-logo" href="#hero" aria-label="Divyang Chauhan — home">DC</a>
        <ul className="nav-links" role="list">
          {['about', 'projects', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
