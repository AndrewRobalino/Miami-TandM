import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Mail, Instagram } from 'lucide-react'
import cesarPhoto from '../assets/Cesar Robalino.jpg'
import ricardoPhoto from '../assets/Ricardo Robalino.jpg'

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/13058482475',
    tooltip: 'Opens WhatsApp',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:rickyrobalino@hotmail.com',
    tooltip: 'Email Miami T&M',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/miami.tandm',
    tooltip: 'Opens Instagram',
  },
]

const owners = [
  {
    name: 'Cesar Robalino',
    role: 'Founder & Tax Professional',
    photo: cesarPhoto,
    email: 'rickyrobalino@hotmail.com',
    whatsapp: 'https://wa.me/13058482475',
  },
  {
    name: 'Ricardo Robalino',
    role: 'Tax Professional',
    photo: ricardoPhoto,
    email: 'ricky.robalino@yahoo.com',
    whatsapp: 'https://wa.me/13867956812',
  },
]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function Contact() {
  const navigate = useNavigate()
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="min-h-screen pt-24 pb-16 px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-12 text-center">
        <p className="text-accent text-xs tracking-widest uppercase mb-3 font-body" style={{ letterSpacing: '0.2em' }}>
          Reach Out
        </p>
        <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-accent mx-auto" />
      </motion.div>

      {/* Contact method icons */}
      <motion.div {...fadeUp(0.15)} className="flex justify-center gap-10 mb-10">
        {contactMethods.map(({ icon: Icon, label, href, tooltip }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noreferrer"
            className="relative flex flex-col items-center gap-2 group"
          >
            {tooltip && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-body normal-case tracking-normal">
                {tooltip}
              </span>
            )}
            <div
              className="w-14 h-14 flex items-center justify-center border border-accent transition-all duration-300 group-hover:border-accent group-hover:bg-surface"
              style={{ borderRadius: '2px' }}
            >
              <Icon
                size={22}
                className="text-muted transition-colors duration-300 group-hover:text-accent"
              />
            </div>
            <span className="text-xs text-muted tracking-widest uppercase font-body" style={{ letterSpacing: '0.12em' }}>
              {label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div {...fadeUp(0.25)} className="w-full h-px mb-12" style={{ backgroundColor: '#DDD9D2' }} />

      {/* Owner cards */}
      <motion.div {...fadeUp(0.35)} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {owners.map((owner) => (
          <div
            key={owner.name}
            className="p-8 text-center bg-surface border border-accent"
          >
            {/* Photo */}
            <div className="w-28 h-28 mx-auto mb-5 overflow-hidden" style={{ borderRadius: '2px', border: '2px solid #C9A84C' }}>
              <img
                src={owner.photo}
                alt={owner.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name & role */}
            <h3 className="text-xl font-heading font-semibold text-primary mb-1">{owner.name}</h3>
            <p className="text-xs text-accent tracking-widest uppercase mb-6 font-body" style={{ letterSpacing: '0.12em' }}>
              {owner.role}
            </p>

            {/* Email */}
            <a
              href={`mailto:${owner.email}`}
              className="relative group block text-sm text-muted mb-5 font-body transition-colors duration-200 hover:text-accent"
            >
              {owner.email}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-body normal-case tracking-normal">
                Email {owner.name}
              </span>
            </a>

            {/* WhatsApp button */}
            <a
              href={owner.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="relative group inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest uppercase font-medium font-body bg-accent text-white rounded-sm transition-all duration-300"
              style={{ letterSpacing: '0.1em' }}
            >
              <MessageCircle size={14} />
              Message on WhatsApp
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap normal-case tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-body">
                Opens WhatsApp
              </span>
            </a>
          </div>
        ))}
      </motion.div>

      {/* About link */}
      <motion.div {...fadeUp(0.5)} className="py-10 border-t border-border">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 bg-surface border border-accent rounded"
        >
          <div>
            <p className="font-heading text-lg text-primary mb-1">
              Want to know more about us?
            </p>
            <p className="text-xs text-muted font-body">
              Read our story — 20 years, a family, and 5,000+ clients.
            </p>
          </div>
          <button
            onClick={() => navigate('/about')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 text-sm font-medium font-body tracking-widest uppercase bg-accent text-white transition-all duration-300 hover:opacity-90"
            style={{
              letterSpacing: '0.1em',
              borderRadius: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            Our Story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
