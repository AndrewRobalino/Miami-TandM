import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FileText, Phone, Users, ArrowRight } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import TaxFormAnimation from './TaxFormAnimation'
import Footer from './Footer'
import logoSrc from '../assets/logo.jpg'

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

export default function Landing() {
  const navigate = useNavigate()
  return (
    <motion.div
      key="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      // h-screen + overflow-hidden = never scrolls
      // items-start + paddingTop = content anchors to top, not pulled down by centering
      className="min-h-screen lg:h-screen lg:overflow-hidden flex items-start justify-center px-6 relative pt-[64px] sm:pt-[88px]"
    >
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

        {/* ── Left column ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Logo */}
          <motion.div {...fadeDown(0)} className="mb-3 sm:mb-6">
            <img
              src={logoSrc}
              alt="Miami T&M"
              className="h-16 sm:h-20 md:h-24 w-auto block"
              style={{ objectFit: 'contain', borderRadius: '6px', boxShadow: '0 0 0 2px #C9A84C' }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeDown(0.12)}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tax Preparation<br />
            <span style={{ color: '#C9A84C' }}>Done Right.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeDown(0.22)}
            className="text-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-sm font-body"
          >
            A father &amp; son team with over 20 years of experience helping
            individuals and families across Miami file with confidence.
          </motion.p>

          {/* Quick stats */}
          <motion.div {...fadeDown(0.3)} className="flex gap-6 sm:gap-8 mb-4 sm:mb-6 justify-center lg:justify-start">
            {[
              { value: 20,   prefix: '',  suffix: '+', label: 'Years'         },
              { value: 5000, prefix: '',  suffix: '+', label: 'Clients'       },
              { value: 100,  prefix: '$', suffix: '',  label: 'Starting price'},
            ].map(({ value, prefix, suffix, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start">
                <AnimatedCounter value={value} prefix={prefix} suffix={suffix} duration={3} className="font-heading text-3xl font-bold text-primary" />
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
                onClick={() => navigate(`/${section}`)}
                className="group flex items-center gap-3 px-4 py-3 text-left w-full transition-colors duration-200 bg-surface border border-accent rounded cursor-pointer"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8F4EE' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#EEEAE3' }}
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-bg border border-accent"
                  style={{ borderRadius: '3px' }}>
                  <Icon size={15} color="#C9A84C" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-primary font-body">{label}</div>
                  <div className="text-xs text-muted truncate font-body">{desc}</div>
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
            <p className="font-heading text-accent" style={{ fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.3, textShadow: '0 1px 8px rgba(201,168,76,0.18)' }}>
              "Filing runs in the family."
            </p>
            <p className="font-body text-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '8px', opacity: 0.85 }}>
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
