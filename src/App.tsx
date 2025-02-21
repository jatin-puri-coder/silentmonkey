import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './pages/Privacy'
import Layout from './Layout'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="questionary/privacy-policy" element={<Privacy />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
