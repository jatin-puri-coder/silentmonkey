import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './pages/Privacy'
import Layout from './Layout'
import Home from './pages/Home'
import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
