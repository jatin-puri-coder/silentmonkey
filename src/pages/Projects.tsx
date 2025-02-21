import { Link } from 'react-router-dom'

import screenshot1 from '../assets/Questionary1.jpg'
import screenshot2 from '../assets/Questionary2.jpg'
import screenshot3 from '../assets/Questionary3.jpg'
import '../App.css'

function Projects() {
  return (
    <>
      <div className="questionary">
        <h2>Questionary</h2>
        <p>
          Questionary is a simple and engaging app designed to spark meaningful
          conversations and improve language skills. Choose a topic - like
          Education, Environment, Sports, Dreams - and receieve a random
          thought-provoking question to discuss or reflect on. Whether you're
          getting to know someone better or practicing English, Questionary
          makes every interaction more interesting and insightful.
        </p>
        <div className="screenshot-container">
          <img
            src={screenshot1}
            className="screenshot screenshot-1"
            alt="Screenshot 1"
          />
          <img
            src={screenshot2}
            className="screenshot screenshot-2"
            alt="Screenshot 2"
          />
          <img
            src={screenshot3}
            className="screenshot screenshot-3"
            alt="Screenshot 3"
          />
        </div>
      </div>
      <Link to="/questionary/privacy-policy">Privacy Policy</Link>
    </>
  )
}

export default Projects
