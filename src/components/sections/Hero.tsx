import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { HERO, SITE } from '../../constants/content'
import { stagger, fadeUp } from '../../constants/animations'

const CharacterScene = lazy(() =>
  import('../characters/CharacterScene').then(m => ({ default: m.CharacterScene }))
)

function FloatingBlob({ className }: { className: string }) {
  return <div className={`bg-blob-1 ${className}`} aria-hidden />
}

function SparkDot({ style }: { style: React.CSSProperties }) {
  return <div className="sparkle" style={style} aria-hidden />
}

export function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-light via-white to-purple-50"
    >
      {/* Background blobs */}
      <FloatingBlob className="top-[-80px] left-[-100px] opacity-70" />
      <FloatingBlob className="bottom-[-60px] right-[-80px] opacity-60 bg-blob-2" />

      {/* Sparkle dots */}
      {[
        { top: '20%', left: '8%', animationDelay: '0s' },
        { top: '60%', left: '5%', animationDelay: '0.8s' },
        { top: '35%', right: '6%', animationDelay: '1.4s' },
        { top: '75%', right: '12%', animationDelay: '0.3s' },
        { top: '15%', right: '25%', animationDelay: '2s' },
        { top: '80%', left: '20%', animationDelay: '1s' },
      ].map((s, i) => (
        <SparkDot key={i} style={s} />
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-brand-violet mb-6 bg-brand-accent/30 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet inline-block animate-pulse" />
            Profesionalno čiščenje · Slovenija
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-brand-dark mb-3"
          >
            {HERO.headline}
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            custom={0.18}
            className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-gradient mb-8"
          >
            {HERO.headlineAccent}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10"
          >
            {HERO.sub}
          </motion.p>

          <motion.div variants={fadeUp} custom={0.42} className="flex flex-wrap gap-4">
            <motion.a
              href={`tel:${SITE.phone}`}
              className="btn-primary"
              whileTap={{ scale: 0.96 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {HERO.cta1}
            </motion.a>
            <motion.a
              href="#storitve"
              className="btn-secondary"
              whileTap={{ scale: 0.96 }}
            >
              {HERO.cta2}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={fadeUp}
            custom={0.55}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-brand-accent/40"
          >
            {[
              { icon: '✓', label: 'Zanesljivi in natančni' },
              { icon: '✓', label: 'Profesionalna oprema' },
              { icon: '✓', label: '100% zadovoljstvo' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-violet text-white flex items-center justify-center text-xs font-bold">
                  {b.icon}
                </span>
                <span className="text-sm font-body text-slate-600">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Character column */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex items-center justify-center"
        >
          {/* Glow backdrop */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 blur-3xl" />
          <div className="relative w-full">
            <Suspense
              fallback={
                <div className="h-[520px] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-brand-violet border-t-transparent animate-spin" />
                </div>
              }
            >
              <CharacterScene />
            </Suspense>
            {/* Name badges */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8">
              <div className="glass rounded-2xl px-4 py-2 text-center shadow-card">
                <p className="font-display font-bold text-sm text-brand-dark">Martin</p>
                <p className="text-xs text-slate-400 font-body">Karcher specialist</p>
              </div>
              <div className="glass rounded-2xl px-4 py-2 text-center shadow-card">
                <p className="font-display font-bold text-sm text-brand-dark">Dominika</p>
                <p className="text-xs text-slate-400 font-body">Čiščenje oken & prostorov</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-brand-accent flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-brand-violet rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
