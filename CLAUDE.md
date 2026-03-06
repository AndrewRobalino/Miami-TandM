# Miami Taxes & Management Co. — Project Reference

## Purpose
Professional marketing website for a family-owned Miami tax preparation business.

## Contact Info
- Instagram: https://instagram.com/miami.tandm
- Cesar Robalino: rickyrobalino@hotmail.com | WhatsApp: https://wa.me/13058482475
- Ricardo Robalino: ricky.robalino@yahoo.com | WhatsApp: https://wa.me/13867956812

## Pricing
- Individual 1040: Starting at $100
- State Filing: Starting at $100
- Prior Year / Amended: $100 per year
- Consulting: Contact Us (no fixed price)

## Design Tokens
- Background: #F8F4EE (eggshell white)
- Surface/cards: #EEEAE3
- Primary text: #1A1A1A
- Accent (gold): #C9A84C
- Secondary: #2C2C2C
- Muted: #6B7280
- Border: #DDD9D2
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Component Map
- App.jsx — state management, AnimatePresence routing
- Navbar.jsx — logo + back button (shown in sections)
- Landing.jsx — hero view with TaxFormAnimation + 3 buttons
- TaxFormAnimation.jsx — parallax layered document, mouse hover + idle float
- Services.jsx — 4 service cards with pricing
- Contact.jsx — contact icons + owner cards with WhatsApp buttons
- About.jsx — photo, copy, animated stat counters
- Footer.jsx — minimal copyright

## Section Layout
Single-page, no scroll routing. `activeSection` state: null | 'services' | 'contact' | 'about'
AnimatePresence mode="wait" handles enter/exit transitions (slide up + fade).

## Stack
React + Vite, Framer Motion, Tailwind CSS v3, Lucide React
