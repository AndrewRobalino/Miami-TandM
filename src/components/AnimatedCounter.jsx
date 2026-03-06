import { useRef, useState, useEffect } from 'react'
import { useInView, animate } from 'framer-motion'

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2, margin = '-40px', className = '' }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value, duration])

  const formatted = value >= 1000
    ? `${(display / 1000).toFixed(display >= 1000 ? 0 : 1)}K`
    : display

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
