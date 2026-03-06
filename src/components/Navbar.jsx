import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import logoSrc from '../assets/logo.jpg'

const sections = [
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact'  },
  { label: 'About Us', path: '/about'    },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2 sm:px-8 sm:py-3"
      style={{
        background: 'linear-gradient(to top, #F8F4EE 0%, #C9A84C 100%)',
      }}
    >
      {/* Logo — eggshell side, keeps gold ring */}
      <button
        onClick={() => navigate('/')}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', lineHeight: 0 }}
        aria-label="Go to home"
      >
        <img
          src={logoSrc}
          alt="Miami T&M"
          className="h-8 sm:h-12 w-auto block transition-opacity duration-200 hover:opacity-80"
          style={{ objectFit: 'contain', borderRadius: '4px', boxShadow: '0 0 0 2px #C9A84C' }}
        />
      </button>

      {/* Nav links — gold side, white text */}
      <nav className="flex items-center gap-1.5 sm:gap-6">
        {sections.map(({ label, path }) => {
          const active = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="text-[10px] sm:text-xs uppercase px-2 py-1 sm:px-3.5 sm:py-1.5"
              style={{
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.10em',
                color: 'white',
                fontWeight: active ? 600 : 500,
                background: active ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = active ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)' }}
            >
              {label}
            </button>
          )
        })}
      </nav>
    </motion.nav>
  )
}
