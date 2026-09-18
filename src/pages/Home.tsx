import { Link } from 'react-router-dom'
import monkeyLogo from '../assets/silentmonkey.png'
import { projects } from '../data/projects'

import '../App.css'

function Home() {
  return (
    <>
      <div className="logo-container">
        <img src={monkeyLogo} className="logo" alt="Silent Monkey logo" />
      </div>
      <h1 className="heading">Silent Monkey</h1>
      <div className="card">
        <p>-- Building apps and websites since 2025 --</p>
        <p>
          An indie studio by{' '}
          <a
            href="https://www.jatin-puri.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jatin Puri
          </a>
          , full-stack developer in Canterbury, New Zealand.
        </p>
      </div>

      <section className="apps" aria-labelledby="apps-heading">
        <h2 id="apps-heading">Our apps</h2>
        <div className="app-grid">
          {projects.map((p) => (
            <article className="app-card" key={p.slug}>
              <img
                src={p.cover.src}
                alt={p.cover.alt}
                className="app-cover"
                width="1080"
                height="2400"
                loading="lazy"
              />
              <div className="app-body">
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <p className="app-built">Built with {p.builtWith}</p>
                <div className="app-links">
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
                  <Link to={`/projects#${p.slug}`} className="app-more">
                    More about {p.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
