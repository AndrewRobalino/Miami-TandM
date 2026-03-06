import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import fatherSonPhoto from '../assets/Father and son.jpg'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Personalized Service' },
]

function AnimatedCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary">
      {value >= 1000 ? `${(display / 1000).toFixed(display >= 1000 ? 0 : 1)}K` : display}
      {suffix}
    </span>
  )
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function About() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="min-h-screen pt-24 pb-16 px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-12 text-center">
        <p className="text-accent text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em' }}>
          Who We Are
        </p>
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Our Story</h2>
        <div className="w-12 h-0.5 bg-accent mx-auto" />
      </motion.div>

      {/* Main photo */}
      <motion.div
        {...fadeUp(0.15)}
        className="w-full mb-12 overflow-hidden"
        style={{ border: '1px solid #C9A84C', borderRadius: '2px', maxHeight: '420px' }}
      >
        <img
          src={fatherSonPhoto}
          alt="Cesar and Ricardo Robalino"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: '420px' }}
        />
      </motion.div>

      {/* Copy */}
      <motion.div {...fadeUp(0.25)} className="mb-12">
        <div
          className="px-8 py-10"
          style={{ border: '1px solid #C9A84C', borderRadius: '4px', backgroundColor: '#EEEAE3' }}
        >
          <h3 className="text-2xl md:text-3xl font-heading text-primary mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Father &amp; Son Company Based in Miami, Florida
          </h3>
          {/* Gold divider */}
          <div className="w-10 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#C9A84C' }} />
          <div className="space-y-5 max-w-2xl mx-auto">
            <p className="text-muted leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
              We started Miami Taxes &amp; Management with one goal in mind: to give every client the kind of honest, personalized attention they deserve. Over the past 20 years, we've had the privilege of helping more than 5,000 individuals and small businesses navigate the complex world of taxes — and we're proud of every one of those relationships.
            </p>
            <p className="text-muted leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
              We're based right here in Miami, and we understand the unique needs of our community and clients across the country. When you work with us, you're not just a number. We take the time to understand your situation, answer your questions, and make sure you feel confident every step of the way.
            </p>
            <p className="text-muted leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
              Our approach is built on integrity, honesty, and a genuine commitment to helping you succeed. That's what makes us the go-to choice for tax services in the Miami area — and beyond.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px mb-12" style={{ backgroundColor: '#DDD9D2' }} />

      {/* Stats */}
      <motion.div
        {...fadeUp(0.35)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {stats.map(({ value, suffix, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 py-8 px-4"
            style={{ border: '1px solid #C9A84C', borderRadius: '4px', backgroundColor: '#EEEAE3' }}
          >
            <AnimatedCounter value={value} suffix={suffix} />
            <p className="text-xs text-muted uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
