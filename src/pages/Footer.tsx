import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <a
          href="https://jatin-puri.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/">Home</Link>
        <a href="mailto:admin@silentmonkey.co.nz">Contact Me</a>
      </div>
    </>
  )
}

export default Footer
