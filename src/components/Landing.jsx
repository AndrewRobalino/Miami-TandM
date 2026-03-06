import { useRef, useState, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { FileText, Phone, Users, ArrowRight } from 'lucide-react'
import TaxFormAnimation from './TaxFormAnimation'
import Footer from './Footer'
import logoSrc from '../assets/logo.jpg'

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 3,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value])

  const formatted = value >= 1000
    ? `${(display / 1000).toFixed(display >= 1000 ? 0 : 1)}K`
    : display

  return (
    <span ref={ref} className="font-heading text-3xl font-bold text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

const fadeDown = (delay) => ({
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' },
})

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' },
})

const navCards = [
  { label: 'Services', section: 'services', icon: FileText, desc: 'Tax returns, state filing, amendments & more' },
  { label: 'Contact',  section: 'contact',  icon: Phone,    desc: 'Reach Cesar or Ricardo directly' },
  { label: 'About Us', section: 'about',    icon: Users,    desc: '20+ years, family-owned, Miami-based' },
]

export default function Landing({ onNavigate }) {
  return (
    <motion.div
      key="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      // h-screen + overflow-hidden = never scrolls
      // items-start + paddingTop = content anchors to top, not pulled down by centering
      className="h-screen overflow-hidden flex items-start justify-center px-6 relative"
      style={{ paddingTop: '88px' }} // navbar (72px) + 16px breathing room
    >
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

        {/* ── Left column ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Logo */}
          <motion.div {...fadeDown(0)} className="mb-6">
            <img
              src={logoSrc}
              alt="Miami T&M"
              className="h-24 w-auto block"
              style={{ objectFit: 'contain', borderRadius: '6px', boxShadow: '0 0 0 2px #C9A84C' }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeDown(0.12)}
            className="font-heading text-5xl md:text-6xl text-primary leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tax Preparation<br />
            <span style={{ color: '#C9A84C' }}>Done Right.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeDown(0.22)}
            className="text-muted text-base leading-relaxed mb-6 max-w-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A father &amp; son team with over 20 years of experience helping
            individuals and families across Miami file with confidence.
          </motion.p>

          {/* Quick stats */}
          <motion.div {...fadeDown(0.3)} className="flex gap-8 mb-6 justify-center lg:justify-start">
            {[
              { value: 20,   prefix: '',  suffix: '+', label: 'Years'         },
              { value: 5000, prefix: '',  suffix: '+', label: 'Clients'       },
              { value: 100,  prefix: '$', suffix: '',  label: 'Starting price'},
            ].map(({ value, prefix, suffix, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start">
                <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
                <span className="text-xs text-muted uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Nav cards */}
          <motion.div {...fadeUp(0.42)} className="flex flex-col gap-2 w-full max-w-sm">
            {navCards.map(({ label, section, icon: Icon, desc }) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className="group flex items-center gap-3 px-4 py-3 text-left w-full transition-colors duration-200"
                style={{ backgroundColor: '#EEEAE3', border: '1px solid #C9A84C', borderRadius: '4px', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8F4EE' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#EEEAE3' }}
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                  style={{ backgroundColor: '#F8F4EE', border: '1px solid #C9A84C', borderRadius: '3px' }}>
                  <Icon size={15} color="#C9A84C" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</div>
                  <div className="text-xs text-muted truncate" style={{ fontFamily: 'Inter, sans-serif' }}>{desc}</div>
                </div>
                <ArrowRight size={15} color="#C9A84C" style={{ flexShrink: 0, opacity: 0.6 }} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — animation (hidden on mobile, visible lg+) ── */}
        <motion.div {...fadeDown(0.18)} className="flex-shrink-0 hidden lg:flex flex-col items-center justify-center gap-4">
          <TaxFormAnimation />
          <div className="text-center">
            <p style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.3, textShadow: '0 1px 8px rgba(201,168,76,0.18)' }}>
              "Filing runs in the family."
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#C9A84C', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '8px', opacity: 0.85 }}>
              Let ours take care of yours.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Footer pinned to bottom of the locked landing screen */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </div>
    </motion.div>
  )
}
