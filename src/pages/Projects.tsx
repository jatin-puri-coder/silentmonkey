import { useTitle } from '../useTitle'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'

import '../App.css'

function Projects() {
  useTitle('Apps')
  useEffect(() => {
    const id = window.location.hash.split('#')[2]
    const target = id ? document.getElementById(id) : null
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      {projects.map((p) => (
        <section className="project-container" id={p.slug} key={p.slug}>
          <h2>{p.name}</h2>
          <p className="project-tagline">{p.tagline}</p>
          {p.description.map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p>
            <i>-- Built with {p.builtWith} --</i>
          </p>
          <div className="app-links project-links">
            {p.stores.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="app-store"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="screenshot-row">
            {p.screenshots.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="screenshot"
                width="480"
                height="1066"
                loading="lazy"
              />
            ))}
          </div>
          <p>
            <Link to={p.privacyPath}>Privacy Policy</Link>
          </p>
        </section>
      ))}
    </>
  )
}

export default Projects
