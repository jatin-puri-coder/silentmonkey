import monkeyLogo from '../assets/silentmonkey.png'

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
          , full-stack developer in Christchurch, New Zealand.
        </p>
      </div>
    </>
  )
}

export default Home
