import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a className="skip-to-content" href="#hero">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <div className="footer-inner">
            <span className="footer-copy">© 2026 Divyang Chauhan</span>
            <span className="footer-host">divyangchauhan.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}
