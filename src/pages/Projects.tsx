import { useTitle } from '../useTitle'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projects, webApps, clientWork } from '../data/projects'

import '../App.css'

function Projects() {
  useTitle('Projects')
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
      <h1 className="projects-heading">Projects</h1>

      <h2 className="projects-group">Apps</h2>
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

      <h2 className="projects-group">Web apps</h2>
      {webApps.map((w) => (
        <section className="project-container" id={w.slug} key={w.slug}>
          <h2>{w.name}</h2>
          <p className="project-tagline">{w.tagline}</p>
          {w.description.map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p>
            <i>-- Built with {w.builtWith} --</i>
          </p>
          <div className="app-links project-links">
            <a
              href={w.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store"
            >
              {w.link.label}
            </a>
          </div>
          <img
            src={w.cover.src}
            alt={w.cover.alt}
            className="project-wide-shot"
            width="960"
            height="640"
            loading="lazy"
          />
        </section>
      ))}

      <h2 className="projects-group">Client work</h2>
      {clientWork.map((c) => (
        <section className="project-container" id={c.slug} key={c.slug}>
          <h2>{c.name}</h2>
          <p className="project-tagline">{c.tagline}</p>
          <p className="app-built">Client: {c.client}</p>
          {c.description.map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p>
            <i>-- Built with {c.builtWith} --</i>
          </p>
          <div className="app-links project-links">
            <a
              href={c.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store"
            >
              {c.link.label}
            </a>
          </div>
          <img
            src={c.cover.src}
            alt={c.cover.alt}
            className="project-wide-shot"
            width="960"
            height="640"
            loading="lazy"
          />
        </section>
      ))}
    </>
  )
}

export default Projects
