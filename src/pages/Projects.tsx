import { Link } from 'react-router-dom'

import screenshot1 from '../assets/Questionary1.jpg'
import screenshot2 from '../assets/Questionary2.jpg'
import screenshot3 from '../assets/Questionary3.jpg'
import screenshot4 from '../assets/WordCrate1.jpg'
import screenshot5 from '../assets/WordCrate2.jpg'
import screenshot6 from '../assets/WordCrate3.jpg'
import screenshot7 from '../assets/WordCrate4.jpg'
import screenshot8 from '../assets/WordCrate5.jpg'
import '../App.css'

function Projects() {
  return (
    <>
      <div className="project-container">
        <h2>Questionary</h2>
        <p>
          Questionary is a simple and engaging app designed to spark meaningful
          conversations and improve language skills. Choose a topic - like
          Education, Environment, Sports, Dreams - and receieve a random
          thought-provoking question to discuss or reflect on. Whether you're
          getting to know someone better or practicing English, Questionary
          makes every interaction more interesting and insightful.
        </p>
        <h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.jatinpuri.Questionary&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Available now on Play Store
          </a>
        </h3>
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
        <p>
          <Link to="/questionary/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
      <div className="project-container">
        <h2>Word Crate</h2>
        <p>
          Word Crate is a fast-paced daily word puzzle that challenges your
          speed and vocabulary.
        </p>
        <p>
          🧩 Start with a seed word (5, 6, or 7 letters). Each letter becomes
          the start of a column. Build new words starting with each letter
          before time runs out!
        </p>
        <p>
          ⏳ Race against time You only have 60 seconds to think fast and type
          faster. Earn points for correct words, lose points for repeats or
          mistakes. Daily challenges keep the game fresh.
        </p>
        <p>
          🧠 Why you’ll love Word Crate Daily fresh puzzles. Fun for word lovers
          and speed typers. Simple, clean design — play anytime, anywhere. No
          ads, no distractions. Can you fill your crate before time runs out?
          Download Word Crate today and put your word skills to the test!
        </p>
        <div className="screenshot-container">
          <img
            src={screenshot4}
            className="screenshot screenshot-2"
            alt="Screenshot 4"
          />
          <img
            src={screenshot5}
            className="screenshot screenshot-1"
            alt="Screenshot 5"
          />
          <img
            src={screenshot6}
            className="screenshot screenshot-3"
            alt="Screenshot 6"
          />
          <img
            src={screenshot7}
            className="screenshot screenshot-4"
            alt="Screenshot 7"
          />
          <img
            src={screenshot8}
            className="screenshot screenshot-5"
            alt="Screenshot 8"
          />
        </div>
        <p>
          <Link to="/wordcrate/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </>
  )
}

export default Projects
