import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to="/">Home</Link>
        <Link to="/projects">Apps</Link>
        <a href="mailto:admin@silentmonkey.co.nz">Contact Me</a>
        <a
          href="https://www.jatin-puri.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About the developer
        </a>
      </div>
    </>
  )
}

export default Footer
