import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../../constants/content'
import { useCountUp } from '../../hooks/useCountUp'

function Stat({ value, suffix, label, i }: typeof STATS[0] & { i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, 2000, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: i * 0.12 }}
      className="text-center"
    >
      <div className="font-display font-black text-5xl md:text-6xl text-ink-dark mb-2 tabular-nums">
        {count}<span className="text-brand-blue">{suffix}</span>
      </div>
      <p className="font-body text-sm text-ink-light tracking-wider uppercase">{label}</p>
    </motion.div>
  )
}

export function StatsCounter() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative soft blob */}
      <div className="blob-bg w-[600px] h-[400px] bg-brand-blue-light rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="soft-grid absolute inset-0 opacity-60" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="tag mb-3 block mx-auto w-fit">Naši rezultati</span>
          <h2 className="section-title">Govorijo sami zase</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((s, i) => <Stat key={s.label} {...s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
