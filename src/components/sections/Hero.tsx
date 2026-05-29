import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { SITE, MARQUEE_ITEMS } from '../../constants/content'

const ToolScene = lazy(() =>
  import('../characters/ToolScene').then(m => ({ default: m.ToolScene }))
)

const words1 = ['Mi', 'počistimo.']
const words2 = ['Vi', 'uživate.']

export function Hero() {
  return (
    <section id="domov" className="relative overflow-hidden bg-hero-grad min-h-screen flex flex-col">
      {/* Soft blob backgrounds */}
      <div aria-hidden className="pointer-events-none">
        <div className="blob-bg w-[520px] h-[520px] bg-brand-blue-light rounded-full top-[-80px] left-[-120px] animate-blob" />
        <div className="blob-bg w-[420px] h-[420px] bg-brand-sky-light rounded-full bottom-[60px] right-[-80px] animate-blob-delay" />
        <div className="blob-bg w-[300px] h-[300px] bg-brand-teal-light rounded-full top-[40%] left-[20%] animate-blob" style={{ animationDelay: '7s' }} />
        <div className="soft-grid absolute inset-0 opacity-60" />
      </div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Text column */}
          <div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white rounded-full pl-3 pr-5 py-2 shadow-soft mb-8"
            >
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-ink-mid text-xs font-body">5.0 · 200+ zadovoljnih strank</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-2 overflow-hidden">
              <div className="flex flex-wrap gap-x-5">
                {words1.map((w, i) => (
                  <motion.span key={w}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-black text-6xl md:text-7xl xl:text-8xl text-ink-dark leading-none tracking-tight">
                    {w}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-5 mt-2">
                {words2.map((w, i) => (
                  <motion.span key={w}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.4 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-display font-black text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight ${
                      i === 1 ? 'text-blue-grad' : 'text-ink-dark'
                    }`}>
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-ink-mid font-body text-lg leading-relaxed max-w-xl mt-8 mb-10">
              Profesionalno čiščenje pisarn, teras in oken po vsej Sloveniji. Z Karcher opremo in izkušnjami, ki zagotavljajo brezhiben rezultat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="flex flex-wrap gap-4">
              <motion.a href={`tel:${SITE.phone}`}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-8 py-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {SITE.phone}
              </motion.a>
              <motion.a href="#kontakt"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-ghost text-base px-8 py-4">
                Brezplačna ponudba
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>

            {/* Trust badges — no emojis, SVG icons */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-5 mt-12 pt-10 border-t border-ink-line/60">
              {[
                { icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, label: '5+ let izkušenj' },
                { icon: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />, label: 'Certificirana oprema' },
                { icon: <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" />, label: '100% jamstvo' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-light flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                      {b.icon}
                    </svg>
                  </div>
                  <span className="font-body text-sm text-ink-mid">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D Scene column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Soft glow backing */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue-light/60 via-brand-sky-light/40 to-brand-teal-light/30 blur-2xl" />
            <div className="relative w-full bg-white/30 rounded-3xl border border-white/60 shadow-card overflow-hidden">
              <Suspense fallback={
                <div className="h-[480px] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-3 border-brand-blue border-t-transparent animate-spin" />
                </div>
              }>
                <ToolScene />
              </Suspense>
              {/* Bottom label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-soft">
                <p className="font-display font-semibold text-sm text-ink-dark text-center whitespace-nowrap">
                  Profesionalna oprema · Brezhiben rezultat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 bg-white/70 backdrop-blur-sm border-y border-ink-line/40 py-3.5 overflow-hidden">
        <div className="flex animate-marquee">
          {[1, 2].map(k => (
            <div key={k} className="marquee-row">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="font-display font-semibold text-brand-blue/60 text-xs uppercase tracking-widest flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-brand-blue/40 inline-block" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
