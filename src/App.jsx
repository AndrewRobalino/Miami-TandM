import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import GoldWaves from './components/GoldWaves'

export default function App() {
  const [activeSection, setActiveSection] = useState(null)

  const navigate = (section) => setActiveSection(section)
  const goHome = () => setActiveSection(null)

  // Lock body scroll on landing page, restore it on section pages
  useEffect(() => {
    document.body.style.overflow = activeSection === null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeSection])

  return (
    <div style={{ backgroundColor: '#F8F4EE', minHeight: '100vh', position: 'relative' }}>
      {/* Persistent ribbon — visible on all pages */}
      <GoldWaves />

      <Navbar activeSection={activeSection} onNavigate={navigate} onHome={goHome} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {activeSection === null && (
            <Landing key="landing" onNavigate={navigate} />
          )}
          {activeSection === 'services' && (
            <Services key="services" onNavigate={navigate} />
          )}
          {activeSection === 'contact' && (
            <Contact key="contact" onNavigate={navigate} />
          )}
          {activeSection === 'about' && (
            <About key="about" onNavigate={goHome} />
          )}
        </AnimatePresence>

        {activeSection !== null && <Footer />}
      </div>
    </div>
  )
}
