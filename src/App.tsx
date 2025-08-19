import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PrivacyQuestionary from './pages/Privacy-questionary'
import Layout from './Layout'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import PrivacyWordCrate from './pages/Privacy-wordcrate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="questionary/privacy-policy"
            element={<PrivacyQuestionary />}
          />
          <Route
            path="wordcrate/privacy-policy"
            element={<PrivacyWordCrate />}
          />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
