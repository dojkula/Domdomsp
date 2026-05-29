import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../../constants/content'
import { useCountUp } from '../../hooks/useCountUp'

function StatItem({ value, suffix, label, delay }: typeof STATS[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, 2200, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">
        {count}
        <span className="text-brand-violet-light">{suffix}</span>
      </div>
      <p className="text-indigo-200 font-body text-sm tracking-wider uppercase">{label}</p>
    </motion.div>
  )
}

export function StatsCounter() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-brand-dark">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-violet/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-display font-semibold tracking-widest uppercase text-brand-violet-light mb-12"
        >
          Naši rezultati govorijo sami zase
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
