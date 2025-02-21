import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="mailto:admin@silentmonkey.co.nz">Contact Me</a>
        <a
          href="https://jatin-puri.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about me
        </a>
      </div>
    </>
  )
}

export default Footer
