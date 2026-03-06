import { useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

// Separates parallax (outer div, MotionValue-driven) from float (inner div, animate-driven).
// Mixing style.y MotionValue and animate.y on the same element causes jank — this fixes it.
function FormCard({ mx, my, floatY, floatR, floatDur, floatDelay = 0, posStyle, children }) {
  return (
    <motion.div style={{ x: mx, y: my, position: 'absolute', ...posStyle }}>
      <motion.div
        animate={{ y: floatY, rotate: floatR }}
        transition={{ duration: floatDur, delay: floatDelay, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// ── W-2 Form ─────────────────────────────────────────────────────────────────
function W2Card() {
  return (
    <div style={{
      width: 210, height: 265,
      backgroundColor: '#EEEAE3',
      border: '1.5px solid #C9A84C',
      borderRadius: 10,
      padding: '18px 17px',
      boxShadow: '4px 7px 22px rgba(0,0,0,0.10)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 13 }}>
        <div>
          <div style={{ fontSize: 8, color: '#6B7280', letterSpacing: 1, fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>DEPARTMENT OF THE TREASURY</div>
          <div style={{ fontSize: 12, color: '#1A1A1A', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: 0.5 }}>W-2</div>
          <div style={{ fontSize: 7.5, color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Wage &amp; Tax Statement</div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: 5, backgroundColor: '#DDD9D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
            <path d="M1 5h8M5 1v8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Employer/Employee boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
        {['EMPLOYER EIN', 'EMPLOYEE SSN'].map((l) => (
          <div key={l}>
            <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>{l}</div>
            <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3 }} />
          </div>
        ))}
      </div>

      {/* Employer name */}
      <div style={{ marginBottom: 9 }}>
        <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>EMPLOYER NAME &amp; ADDRESS</div>
        <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3, marginBottom: 4 }} />
        <div style={{ height: 15, width: '65%', backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3 }} />
      </div>

      <div style={{ height: 1, backgroundColor: '#DDD9D2', margin: '6px 0' }} />

      {/* Wage boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {[
          { box: '1', label: 'Wages, tips' },
          { box: '2', label: 'Fed tax withheld' },
          { box: '3', label: 'SS wages' },
          { box: '4', label: 'SS tax withheld' },
        ].map(({ box, label }) => (
          <div key={box} style={{ border: '1px solid #DDD9D2', borderRadius: 3, padding: '4px 5px' }}>
            <div style={{ fontSize: 6.5, color: '#C9A84C', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{box}</div>
            <div style={{ fontSize: 6.5, color: '#6B7280', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>{label}</div>
            <div style={{ height: 13, backgroundColor: '#F8F4EE', borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Schedule K-1 Form ────────────────────────────────────────────────────────
function K1Card() {
  return (
    <div style={{
      width: 210, height: 265,
      backgroundColor: '#EEEAE3',
      border: '1.5px solid #C9A84C',
      borderRadius: 10,
      padding: '18px 17px',
      boxShadow: '4px 7px 22px rgba(0,0,0,0.10)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 13 }}>
        <div>
          <div style={{ fontSize: 8, color: '#6B7280', letterSpacing: 1, fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>SCHEDULE</div>
          <div style={{ fontSize: 12, color: '#1A1A1A', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: 0.5 }}>K-1</div>
          <div style={{ fontSize: 7.5, color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Partner's Share of Income</div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: 5, backgroundColor: '#DDD9D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
            <rect x="2" y="2" width="6" height="6" rx="1" stroke="#6B7280" strokeWidth="1"/>
            <path d="M4 5h2" stroke="#6B7280" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Partner/Partnership info */}
      <div style={{ marginBottom: 9 }}>
        <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>PARTNER'S NAME</div>
        <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3, marginBottom: 6 }} />
        <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>PARTNERSHIP NAME</div>
        <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3 }} />
      </div>

      <div style={{ height: 1, backgroundColor: '#DDD9D2', margin: '6px 0' }} />

      {/* Income items */}
      <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 7 }}>INCOME ITEMS</div>
      {[
        { num: '1', label: 'Ordinary business income' },
        { num: '2', label: 'Net rental income' },
        { num: '6a', label: 'Ordinary dividends' },
        { num: '7', label: 'Royalties' },
      ].map(({ num, label }) => (
        <div key={num} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <span style={{ fontSize: 7, color: '#C9A84C', fontWeight: 700, fontFamily: 'Inter, sans-serif', minWidth: 13 }}>{num}</span>
            <span style={{ fontSize: 7, color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>{label}</span>
          </div>
          <div style={{ width: 38, height: 13, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 2 }} />
        </div>
      ))}
    </div>
  )
}

// ── 1040 Form ────────────────────────────────────────────────────────────────
function Form1040Card() {
  return (
    <div style={{
      width: 245, height: 310,
      backgroundColor: '#F8F4EE',
      border: '2px solid #C9A84C',
      borderRadius: 12,
      padding: '22px 20px',
      boxShadow: '8px 14px 36px rgba(0,0,0,0.15)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
        <div style={{ width: 32, height: 32, borderRadius: 7, backgroundColor: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ width: 90, height: 6, backgroundColor: '#1A1A1A', borderRadius: 3, marginBottom: 4 }} />
          <div style={{ width: 55, height: 4, backgroundColor: '#DDD9D2', borderRadius: 2 }} />
        </div>
        <div style={{ fontSize: 13, fontFamily: 'Inter, sans-serif', color: '#C9A84C', fontWeight: 700, letterSpacing: 1 }}>1040</div>
      </div>

      {/* Fields */}
      {[{ label: 'NAME', w: '70%' }, { label: 'SSN', w: '50%' }, { label: 'FILING STATUS', w: '62%' }].map(({ label, w }) => (
        <div key={label} style={{ marginBottom: 11 }}>
          <div style={{ fontSize: 8, color: '#6B7280', letterSpacing: 0.9, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>{label}</div>
          <div style={{ height: 19, border: '1px solid #DDD9D2', borderRadius: 4, backgroundColor: '#EEEAE3', width: w }} />
        </div>
      ))}

      <div style={{ height: 1, backgroundColor: '#DDD9D2', margin: '8px 0' }} />

      <div style={{ fontSize: 8, color: '#6B7280', letterSpacing: 0.9, fontFamily: 'Inter, sans-serif', marginBottom: 7 }}>INCOME</div>
      {['Wages, salaries', 'Other income'].map((label) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 9 }}>
          <div style={{ width: '54%', height: 16, backgroundColor: '#EEEAE3', borderRadius: 3, border: '1px solid #DDD9D2' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 10, color: '#C9A84C', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>$</span>
            <div style={{ width: 50, height: 16, backgroundColor: '#EEEAE3', borderRadius: 3, border: '1px solid #C9A84C', opacity: 0.7 }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: 'auto', padding: '7px 10px', backgroundColor: '#C9A84C', borderRadius: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 9, color: 'white', fontWeight: 600, letterSpacing: 1, fontFamily: 'Inter, sans-serif' }}>TOTAL REFUND</span>
        <span style={{ fontSize: 12, color: 'white', fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>$___</span>
      </div>
    </div>
  )
}

// ── Schedule C Form ──────────────────────────────────────────────────────────
function ScheduleCCard() {
  return (
    <div style={{
      width: 185, height: 265,
      backgroundColor: '#EEEAE3',
      border: '1.5px solid #C9A84C',
      borderRadius: 10,
      padding: '18px 17px',
      boxShadow: '4px 7px 22px rgba(0,0,0,0.10)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 13 }}>
        <div>
          <div style={{ fontSize: 8, color: '#6B7280', letterSpacing: 1, fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>SCHEDULE</div>
          <div style={{ fontSize: 12, color: '#1A1A1A', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: 0.5 }}>C</div>
          <div style={{ fontSize: 7.5, color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>Profit or Loss from Business</div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: 5, backgroundColor: '#DDD9D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5 2v6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Business info */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>BUSINESS NAME</div>
        <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3, marginBottom: 6 }} />
        <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>PRINCIPAL BUSINESS</div>
        <div style={{ height: 15, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 3 }} />
      </div>

      <div style={{ height: 1, backgroundColor: '#DDD9D2', margin: '6px 0' }} />

      {/* Income / Expenses */}
      <div style={{ fontSize: 7, color: '#6B7280', letterSpacing: 0.8, fontFamily: 'Inter, sans-serif', marginBottom: 7 }}>INCOME &amp; EXPENSES</div>
      {[
        { num: '1', label: 'Gross receipts' },
        { num: '2', label: 'Returns & allowances' },
        { num: '28', label: 'Total expenses' },
        { num: '31', label: 'Net profit or loss' },
      ].map(({ num, label }) => (
        <div key={num} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <span style={{ fontSize: 7, color: '#C9A84C', fontWeight: 700, fontFamily: 'Inter, sans-serif', minWidth: 16 }}>{num}</span>
            <span style={{ fontSize: 7, color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>{label}</span>
          </div>
          <div style={{ width: 38, height: 13, backgroundColor: '#F8F4EE', border: '1px solid #DDD9D2', borderRadius: 2 }} />
        </div>
      ))}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function TaxFormAnimation() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width)
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height)
  }

  const handleMouseLeave = () => {
    animate(mouseX, 0, { duration: 0.8, ease: 'easeOut' })
    animate(mouseY, 0, { duration: 0.8, ease: 'easeOut' })
  }

  // Depth layers — back cards move less, front card moves most
  const w2x  = useTransform(mouseX, [-0.5, 0.5], [-3, 3])
  const w2y  = useTransform(mouseY, [-0.5, 0.5], [-3, 3])
  const scx  = useTransform(mouseX, [-0.5, 0.5], [-5, 5])
  const scy  = useTransform(mouseY, [-0.5, 0.5], [-5, 5])
  const f1x  = useTransform(mouseX, [-0.5, 0.5], [-10, 10])
  const f1y  = useTransform(mouseY, [-0.5, 0.5], [-10, 10])
  const k1x  = useTransform(mouseX, [-0.5, 0.5], [-4, 4])
  const k1y  = useTransform(mouseY, [-0.5, 0.5], [-4, 4])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', width: 600, height: 420, userSelect: 'none' }}
    >
      {/* W-2 — far left, deepest back */}
      <FormCard
        mx={w2x} my={w2y}
        floatY={[-4, 7, -4]} floatR={[-12, -10, -12]}
        floatDur={7.5} floatDelay={0.6}
        posStyle={{ left: 0, top: 65, zIndex: 1 }}
      >
        <W2Card />
      </FormCard>

      {/* Schedule C — left-center, second layer */}
      <FormCard
        mx={scx} my={scy}
        floatY={[-6, 5, -6]} floatR={[-4, -2, -4]}
        floatDur={6.2} floatDelay={1.2}
        posStyle={{ left: 120, top: 22, zIndex: 2 }}
      >
        <ScheduleCCard />
      </FormCard>

      {/* 1040 — right-center, front */}
      <FormCard
        mx={f1x} my={f1y}
        floatY={[-10, 8, -10]} floatR={[-1, 2, -1]}
        floatDur={5.0} floatDelay={0}
        posStyle={{ left: 255, top: 0, zIndex: 4 }}
      >
        <Form1040Card />
      </FormCard>

      {/* K-1 — far right, third layer */}
      <FormCard
        mx={k1x} my={k1y}
        floatY={[-5, 6, -5]} floatR={[10, 12, 10]}
        floatDur={7.8} floatDelay={0.9}
        posStyle={{ right: 0, top: 65, zIndex: 3 }}
      >
        <K1Card />
      </FormCard>
    </div>
  )
}
