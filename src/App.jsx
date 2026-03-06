import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import GoldWaves from './components/GoldWaves'

export default function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  // Lock body scroll on landing page (desktop only — mobile needs to scroll)
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    document.body.style.overflow = (isLanding && isDesktop) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isLanding])

  return (
    <div style={{ backgroundColor: '#F8F4EE', minHeight: '100vh', position: 'relative' }}>
      {/* Hide ribbons on mobile — 300px wide panels destroy small screens */}
      <ScrollToTop />
      <div className="hidden lg:block">
        <GoldWaves />
      </div>
      <Navbar />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>

        {!isLanding && <Footer />}
      </div>
    </div>
  )
}
