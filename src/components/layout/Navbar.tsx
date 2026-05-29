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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-surface/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-shadow">
              <span className="font-display font-black text-white text-sm tracking-tight">DD</span>
            </div>
            <div>
              <span className="font-display font-black text-xl text-ink-dark tracking-tight">
                Dom<span className="text-brand-blue">Dom</span>
              </span>
              <p className="text-[9px] tracking-[0.18em] uppercase font-body text-ink-light leading-none mt-0.5">
                Čisto · Zanesljivo
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(l => (
              <a key={l.href} href={l.href}
                className="nav-link font-body text-sm font-medium text-ink-mid hover:text-ink-dark transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${SITE.phone}`} className="font-body text-sm text-ink-light hover:text-ink-dark transition-colors">
              {SITE.phone}
            </a>
            <motion.a href="#kontakt" whileTap={{ scale: 0.96 }}
              className="btn-primary text-sm py-2.5 px-5">
              Brezplačna ocena
            </motion.a>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu">
            {[0,1,2].map(i => (
              <motion.span key={i}
                animate={open
                  ? i === 1 ? { opacity: 0, scaleX: 0 }
                    : i === 0 ? { rotate: 45, y: 8 } : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.22 }}
                className={`bg-ink-dark rounded-full origin-center h-0.5 ${i === 1 ? 'w-4' : 'w-6'}`}
              />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}
            className="fixed top-[64px] inset-x-0 z-40 bg-white border-b border-ink-line shadow-card md:hidden">
            <nav className="flex flex-col px-6 py-5 gap-5">
              {NAV.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="font-body text-base font-medium text-ink-dark hover:text-brand-blue transition-colors">
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
