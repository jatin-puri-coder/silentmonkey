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
      </div>
    </>
  )
}

export default Home
