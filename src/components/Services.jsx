import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Individual Tax Return',
    subtitle: 'Form 1040',
    description:
      'We prepare your federal income tax return accurately and efficiently, whether you have W-2 income, freelance earnings, or investment income.',
    price: 'Starting at $100',
    priceHighlight: true,
  },
  {
    number: '02',
    title: 'State Tax Filing',
    subtitle: 'Multi-State Returns',
    description:
      'State filing is included with your federal return at no extra cost. Have income in multiple states? Each additional state filing is $40. Note: Florida residents pay no state income tax.',
    price: 'Included · +$40/additional state',
    priceHighlight: true,
  },
  {
    number: '03',
    title: 'Prior Year & Amended Returns',
    subtitle: 'Form 1040-X',
    description:
      'Behind on taxes or need to correct a past return? We file prior year returns and amended returns to get you caught up and compliant.',
    price: '$100 per year',
    priceHighlight: true,
  },
  {
    number: '04',
    title: 'Tax Advice & Consulting',
    subtitle: 'Personalized Guidance',
    description:
      'Have a tax question or need guidance on a financial decision? We offer personalized tax consulting to help you make informed choices.',
    price: 'Contact Us',
    priceHighlight: false,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services({ onNavigate }) {
  return (
    <motion.div
      key="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="min-h-screen pt-24 pb-16 px-6 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <p className="text-accent text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em' }}>
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Our Services</h2>
        <div className="w-12 h-0.5 bg-accent mx-auto" />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {services.map((svc) => (
          <motion.div
            key={svc.number}
            variants={cardVariant}
            className="group relative p-8 border transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: '#EEEAE3',
              border: '1px solid #C9A84C',
              borderRadius: '2px',
            }}
          >
            {/* Number */}
            <div
              className="text-6xl font-heading font-bold mb-4 leading-none"
              style={{ color: '#DDD9D2', fontFamily: 'Playfair Display, serif' }}
            >
              {svc.number}
            </div>

            {/* Title */}
            <h3 className="text-xl font-heading font-semibold text-primary mb-1">{svc.title}</h3>
            <p className="text-xs text-muted uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>
              {svc.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              {svc.description}
            </p>

            {/* Price badge — clickable on consulting card */}
            {svc.price === 'Contact Us' ? (
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-accent hover:text-white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: 'transparent',
                  color: '#C9A84C',
                  border: '1px solid #C9A84C',
                  borderRadius: '2px',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                }}
              >
                {svc.price}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <div
                className="inline-block px-4 py-2 text-sm font-medium tracking-wide"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: '#C9A84C',
                  color: 'white',
                  borderRadius: '2px',
                  letterSpacing: '0.04em',
                }}
              >
                {svc.price}
              </div>
            )}

            {/* Gold accent line on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ borderRadius: '0 2px 2px 0' }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        className="text-center py-8 border-t"
        style={{ borderColor: '#DDD9D2' }}
      >
        <p className="text-muted text-sm mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
          Not sure which service you need? Contact us — we'll point you in the right direction.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3 border text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', borderColor: '#1A1A1A', color: '#1A1A1A' }}
        >
          Contact Us
        </button>
      </motion.div>
    </motion.div>
  )
}
