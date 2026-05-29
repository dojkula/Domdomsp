import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, SITE } from '../../constants/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        id="progress-bar"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
      />

      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(10,22,40,0.1)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center group-hover:bg-navy-700 transition-colors">
              <span className="font-display font-black text-teal text-sm tracking-tight">DD</span>
            </div>
            <div className="leading-none">
              <span className={`font-display font-black text-xl tracking-tight ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                Dom<span className="text-teal">Dom</span>
              </span>
              <p className={`text-[9px] tracking-[0.2em] uppercase font-body mt-0.5 ${scrolled ? 'text-slate-light' : 'text-white/50'}`}>
                čisto · zanesljivo
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`font-body text-sm font-medium transition-colors underline-draw ${
                  scrolled ? 'text-slate-text hover:text-navy-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className={`font-body text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-text' : 'text-white/70'
              }`}
            >
              {SITE.phone}
            </a>
            <motion.a
              href="#kontakt"
              whileTap={{ scale: 0.96 }}
              className="bg-teal text-navy-900 font-display font-bold text-sm px-5 py-2.5 rounded-full shadow-teal hover:shadow-teal-lg hover:-translate-y-0.5 transition-all"
            >
              Brezplačna ocena
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 1 ? { opacity: 0, scaleX: 0 }
                      : i === 0 ? { rotate: 45, y: 9 }
                      : { rotate: -45, y: -9 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
                className={`h-0.5 rounded-full origin-center transition-colors ${
                  scrolled ? 'bg-navy-900' : 'bg-white'
                } ${i === 1 ? 'w-4' : 'w-6'}`}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] inset-x-0 z-40 bg-white border-b border-slate-line shadow-card-hover md:hidden"
          >
            <nav className="flex flex-col px-6 py-5 gap-5">
              {NAV.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base font-medium text-navy-900 hover:text-teal transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" className="btn-primary justify-center mt-2" onClick={() => setOpen(false)}>
                Brezplačna ocena
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
