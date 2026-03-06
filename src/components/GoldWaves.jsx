import { motion } from 'framer-motion'

// Smooth ease: sinusoidal in-out
const EASE = [0.45, 0.05, 0.55, 0.95]

// Each group of ribbon paths is wrapped in its own motion.div so we animate
// a GPU-composited HTML element — far smoother than animating SVG attributes.

// Groups: [strokeWidth, opacity, yRange, duration, delay]
const GROUPS = [
  // Background — widest, softest, slowest
  { sw: 55, op: 0.08,  yr: 55, dur: 17, delay: 0 },
  { sw: 28, op: 0.14,  yr: 44, dur: 14, delay: 1.5 },
  // Mid-range
  { sw: 12, op: 0.25,  yr: 38, dur: 10.5, delay: 0.8 },
  { sw: 5,  op: 0.40,  yr: 32, dur: 8.5,  delay: 2.2 },
  // Foreground — sharpest, fastest
  { sw: 1.8, op: 0.70, yr: 48, dur: 7,   delay: 0.4 },
  { sw: 0.7, op: 0.90, yr: 28, dur: 11,  delay: 1.8 },
]

// Each group gets two phase-offset S-curve paths to fill the ribbon band
const PATHS = [
  'M -20 -60 C 210 200, -70 480, 195 760 C 460 1040, -50 1200, 170 1440 C 420 1640, -30 1720, 140 1800',
  'M 25 -90 C 220 180, -50 460, 185 740 C 420 1020, -30 1180, 150 1420 C 400 1620, -10 1700, 120 1780',
  'M 5 -40 C 195 215, -45 490, 178 760 C 400 1030, -15 1190, 140 1430 C 380 1630, -5 1710, 110 1790',
  'M 35 -70 C 185 230, -25 510, 165 775 C 355 1040, 5 1200, 125 1440 C 340 1650, 15 1720, 100 1800',
  'M 18 -20 C 172 245, -8 525, 152 790 C 312 1055, 18 1215, 110 1455 C 300 1660, 28 1730, 90 1810',
  'M 48 -50 C 160 260, 12 540, 140 805 C 268 1070, 28 1230, 98 1470 C 280 1670, 38 1740, 80 1820',
  'M 55 10 C 148 270, 22 550, 132 815 C 242 1080, 38 1240, 88 1480 C 260 1680, 45 1750, 72 1830',
  'M 62 -30 C 140 280, 30 560, 122 825 C 214 1090, 46 1250, 78 1490 C 240 1690, 52 1760, 65 1840',
]

// Pairs each group with two paths for layered depth
const GROUP_PATHS = [
  [PATHS[0], PATHS[1]],
  [PATHS[2], PATHS[3]],
  [PATHS[4], PATHS[5]],
  [PATHS[5], PATHS[6]],
  [PATHS[6], PATHS[7]],
  [PATHS[7], PATHS[6]],
]

function WavePanel({ side }) {
  const isLeft = side === 'left'

  // Two masks applied via NESTED divs — avoids mask-composite cross-browser issues.
  //
  // Outer div  → inner-edge fade: waves dissolve toward page center
  // Middle div → top-edge fade: waves fade out as they approach the top ribbon
  //   Panel top=-80px, so panel y=80 = viewport y=0, panel y=152 = navbar bottom (72px).
  //   transparent 80px → black 280px gives a smooth ~200px emergence below navbar.

  return (
    <div
      style={{
        position: 'fixed',
        top: -80,
        bottom: -80,
        [isLeft ? 'left' : 'right']: 0,
        width: 300,
        pointerEvents: 'none',
        zIndex: 20,
        overflow: 'hidden',
        WebkitMaskImage: isLeft
          ? 'linear-gradient(to right, black 20%, transparent 88%)'
          : 'linear-gradient(to left, black 20%, transparent 88%)',
        maskImage: isLeft
          ? 'linear-gradient(to right, black 20%, transparent 88%)'
          : 'linear-gradient(to left, black 20%, transparent 88%)',
      }}
    >
      {/* Top-edge fade — separate div so both masks compose correctly */}
      <div style={{
        width: '100%',
        height: '100%',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 152px, black 310px, black calc(100% - 240px), transparent calc(100% - 80px))',
        maskImage: 'linear-gradient(to bottom, transparent 152px, black 310px, black calc(100% - 240px), transparent calc(100% - 80px))',
      }}>
        {/* Mirror right side horizontally */}
        <div style={{ width: '100%', height: '100%', transform: isLeft ? 'none' : 'scaleX(-1)' }}>
          {GROUPS.map((g, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                willChange: 'transform',
              }}
              animate={{ y: [0, -g.yr, 0] }}
              transition={{
                duration: g.dur,
                delay: g.delay,
                repeat: Infinity,
                ease: EASE,
              }}
            >
              <svg
                width="300"
                height="1700"
                viewBox="0 0 300 1700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                {GROUP_PATHS[i].map((d, j) => (
                  <path
                    key={j}
                    d={d}
                    stroke="#C9A84C"
                    strokeWidth={g.sw}
                    strokeOpacity={g.op * (j === 0 ? 1 : 0.7)}
                    strokeLinecap="round"
                    fill="none"
                  />
                ))}
              </svg>
            </motion.div>
          ))}

          {/* Mid tick */}
          <motion.div
            style={{ position: 'absolute', top: 'calc(50% + 0px)', left: 0, transform: 'translateY(-50%)' }}
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <svg width="35" height="20" viewBox="0 0 35 20" fill="none">
              <line x1="0" y1="10" x2="30" y2="10" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="0" y1="6"  x2="18" y2="6"  stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="0" y1="14" x2="18" y2="14" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function GoldWaves() {
  return (
    <>
      <WavePanel side="left" />
      <WavePanel side="right" />
    </>
  )
}
