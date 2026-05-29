import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SITE, MARQUEE_ITEMS } from '../../constants/content'
import { ease } from '../../constants/animations'

const words = ['Mi', 'počistimo.']
const words2 = ['Vi', 'uživate.']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="domov" className="relative min-h-screen overflow-hidden bg-navy-900 flex flex-col">
      {/* Animated bg blobs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-teal/8 animate-blob blur-[80px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-navy-600/40 animate-blob blur-[100px]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-teal/5 animate-blob blur-[60px]" style={{ animationDelay: '6s' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </motion.div>

      {/* Floating icon accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[
          { emoji: '💦', top: '18%', left: '7%', delay: 0, size: 'text-4xl', anim: 'animate-float-slow' },
          { emoji: '🪟', top: '60%', left: '5%', delay: 1, size: 'text-3xl', anim: 'animate-float-mid' },
          { emoji: '✨', top: '25%', right: '8%', delay: 0.5, size: 'text-3xl', anim: 'animate-float-fast' },
          { emoji: '🧹', top: '65%', right: '6%', delay: 1.5, size: 'text-4xl', anim: 'animate-float-slow' },
          { emoji: '🏢', top: '80%', left: '15%', delay: 0.8, size: 'text-2xl', anim: 'animate-float-mid' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: 1.2 + item.delay, duration: 0.6, type: 'spring' }}
            className={`absolute ${item.size} ${item.anim} select-none`}
            style={{ top: item.top, left: item.left, right: (item as { right?: string }).right }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Star badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8"
            >
              <span className="flex gap-0.5 text-yellow-400 text-sm">{'★★★★★'}</span>
              <span className="text-white/70 text-sm font-body">5.0 · 200+ strank · Ljubljana & okolica</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-x-4 gap-y-0">
                {words.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
                    className="font-display font-black text-6xl md:text-7xl xl:text-8xl text-white leading-none tracking-tight"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-0 mt-2">
                {words2.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 + i * 0.12, ease }}
                    className={`font-display font-black text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight ${
                      i === 1 ? 'text-teal-grad' : 'text-white'
                    }`}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
              className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-2xl mt-8 mb-10"
            >
              Profesionalno čiščenje pisarn, teras in oken po Sloveniji. Z Karcher opremo, izkušnjami in predanostjo — da je vaš prostor vedno brezhiben.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={`tel:${SITE.phone}`}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(0,196,204,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-8 py-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Pokličite: {SITE.phone}
              </motion.a>
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost text-base px-8 py-4"
              >
                Brezplačna ponudba →
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10"
            >
              {[
                { label: '5+ let izkušenj', icon: '🏆' },
                { label: 'Certificirana oprema', icon: '✅' },
                { label: 'Fleksibilni termini', icon: '🕐' },
                { label: '100% jamstvo', icon: '🛡️' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2">
                  <span>{b.icon}</span>
                  <span className="text-white/60 font-body text-sm">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] font-body tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="relative z-10 bg-teal/10 border-y border-teal/20 py-3 overflow-hidden">
        <div className="flex animate-marquee">
          <div className="marquee-inner">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="font-display font-semibold text-teal/70 text-sm uppercase tracking-widest">
                · {item}
              </span>
            ))}
          </div>
          <div className="marquee-inner" aria-hidden>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="font-display font-semibold text-teal/70 text-sm uppercase tracking-widest">
                · {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
