import { useState, useEffect } from 'react'
import monkeyLogo from '../assets/silentmonkey.png'

import '../App.css'

function Home() {
  const [sliderValue, setSliderValue] = useState(20)
  const speed = 41 - sliderValue
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--progress',
      `${(sliderValue / 40) * 100}%`
    )
  })
  return (
    <>
      <div className="logo-container">
        <img
          src={monkeyLogo}
          style={{
            animationDuration: `${speed === 40 ? '0s' : `${speed}s`}`,
          }}
          className="logo"
          alt="Silent Monkey logo"
        />
        <input
          type="range"
          min="1"
          max="40"
          value={sliderValue}
          onChange={(e) => {
            const value = parseInt(e.target.value)
            setSliderValue(value)
            document.documentElement.style.setProperty(
              '--progress',
              `${(value / 40) * 100}%`
            )
          }}
          className="speed-slider"
        />
        <p className="subtext">You spin my head right round, right round</p>
      </div>
      <h1 className="heading">Silent Monkey</h1>
      <div className="card">
        <p>-- Building apps and websites since 2025 --</p>
      </div>
    </>
  )
}

export default Home
