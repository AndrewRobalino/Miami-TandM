import { motion } from 'framer-motion'
import logoSrc from '../assets/logo.jpg'

const sections = [
  { label: 'Services', key: 'services' },
  { label: 'Contact',  key: 'contact'  },
  { label: 'About Us', key: 'about'    },
]

export default function Navbar({ activeSection, onNavigate, onHome }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3"
      style={{
        background: 'linear-gradient(to top, #F8F4EE 0%, #C9A84C 100%)',
      }}
    >
      {/* Logo — eggshell side, keeps gold ring */}
      <button
        onClick={onHome}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', lineHeight: 0 }}
        aria-label="Go to home"
      >
        <img
          src={logoSrc}
          alt="Miami T&M"
          className="h-12 w-auto block transition-opacity duration-200 hover:opacity-80"
          style={{ objectFit: 'contain', borderRadius: '4px', boxShadow: '0 0 0 2px #C9A84C' }}
        />
      </button>

      {/* Nav links — gold side, white text */}
      <nav className="flex items-center gap-6">
        {sections.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.14em',
              color: 'white',
              fontWeight: activeSection === key ? 600 : 500,
              background: activeSection === key ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: '4px',
              cursor: 'pointer',
              padding: '6px 14px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = activeSection === key ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)' }}
          >
            {label}
          </button>
        ))}
      </nav>
    </motion.nav>
  )
}
